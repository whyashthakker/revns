import { sendAcknowledgmentEmail, sendTeamNotificationEmail } from "@/lib/emails/support";
import { ContactFormData, validateContactFormData } from "@/lib/validation";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

async function sendDiscordNotification(content: string, webhookUrl: string) {
  if (!webhookUrl) {
    console.error('Webhook URL is not defined.');
    throw new Error('Webhook URL is not defined.');
  }

  try {
    await axios.post(webhookUrl, { 
      content,
      username: "Revns Lead Bot",
      avatar_url: "https://revns.com/logo.png"
    });
  } catch (error) {
    console.error('Error sending Discord notification:', error);
    throw new Error('Failed to send Discord notification');
  }
}

function formatCurrency(revenue?: string) {
  if (!revenue) return 'Not provided';
  try {
    const amount = parseFloat(revenue.replace(/[^0-9.]/g, ''));
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  } catch {
    return revenue;
  }
}

function createDiscordMessage(data: ContactFormData): string {
  const priorityEmoji = data.monthlyRevenue && parseFloat(data.monthlyRevenue) > 1000000 ? '🔥' : '🚨';
  
  return `
    ${priorityEmoji} **New Business Inquiry!**
    
    **Contact Details:**
    👤 Name: ${data.name}
    📧 Email: ${data.email}
    📱 Phone: ${data.phone || 'Not provided'}
    🏢 Company: ${data.company}
    
    **Business Information:**
    💰 Monthly Revenue: ${formatCurrency(data.monthlyRevenue)}
    
    **Marketplaces of Interest:**
    ${data.marketplaces.map(m => `• ${m}`).join('\n')}
    
    **Services Required:**
    ${data.services.map(s => `• ${s}`).join('\n')}
    
    **Message:**
    >>> ${data.message}
    
    ${priorityEmoji} *Assign this lead based on primary marketplace: ${data.marketplaces[0]}*
  `.trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = validateContactFormData(body);
    
    if (!validation.success) {
      return new NextResponse(
        JSON.stringify({ 
          error: "Validation failed", 
          details: validation.errors 
        }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const data = validation.data;

    // Prepare webhook URLs based on services
    const webhookUrls = [
      process.env.REVNS_MAIN_WEBHOOK,
      ...data.services.includes('advertising') ? [process.env.REVNS_ADS_WEBHOOK] : [],
      ...data.services.includes('photography') ? [process.env.REVNS_STUDIO_WEBHOOK] : []
    ].filter(Boolean) as string[];

    // Send notifications concurrently
    const discordMessage = createDiscordMessage(data);
    
    await Promise.all([
      // Send Discord notifications
      ...webhookUrls.map(webhook => 
        sendDiscordNotification(discordMessage, webhook)
          .catch(error => console.error(`Failed to send Discord notification to ${webhook}:`, error))
      ),
      
      // Send team notification email
      sendTeamNotificationEmail(data)
        .catch(error => console.error('Failed to send team notification:', error)),
      
      // Send acknowledgment email
      sendAcknowledgmentEmail(data.name, data.email)
        .catch(error => console.error('Failed to send acknowledgment:', error))
    ]);

    return new NextResponse(
      JSON.stringify({ success: true, message: "Form submitted successfully" }), 
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error: any) {
    console.error(`Error processing contact form submission:`, error);
    
    return new NextResponse(
      JSON.stringify({ 
        error: "Internal server error", 
        message: process.env.NODE_ENV === 'development' ? error.message : undefined 
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}