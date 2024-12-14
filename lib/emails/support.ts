import { sendMail } from "@/lib/mail-service";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company: string;
  marketplaces: string[];
  services: string[];
  monthlyRevenue?: string;
  message: string;
}

interface NotificationOptions {
  type?: 'lead';
}

interface AcknowledgmentOptions {
  template?: 'lead';
}

export async function sendTeamNotificationEmail(data: ContactFormData, options: NotificationOptions = {}) {
  try {
    const currentDate = new Date().toLocaleDateString();
    const isLead = options.type === 'lead';
    
    const subject = `New Business Inquiry from ${data.name} - ${data.company}`;
    
    const emailText = `
Hey Team!

We've received a new business inquiry. Here are the details:

Date: ${currentDate}
Contact Information:
- Name: ${data.name}
- Company: ${data.company}
- Phone: ${data.phone || 'Not provided'}
- Email: ${data.email}

Business Details:
- Monthly Revenue: ${data.monthlyRevenue || 'Not provided'}

Marketplaces of Interest:
${data.marketplaces.map(m => `- ${m}`).join('\n')}

Services Required:
${data.services.map(s => `- ${s}`).join('\n')}

Message:
${data.message}

Please reach out to ${data.name} as soon as possible to discuss their requirements.

Best regards,
Team Revns
    `;

    // Define recipients based on services requested
    const recipients = [
      "yash@explainx.ai",
      ...data.services.includes('advertising') ? ["yash@explainx.ai"] : [],
      ...data.services.includes('photography') ? ["yash@explainx.ai"] : []
    ];

    const replyTo = "yash@explainx.ai";
    
    await Promise.all(
      recipients.map(recipient =>
        sendMail(
          subject,
          recipient,
          emailText,
          "Business Inquiry",
          replyTo,
          true
        )
      )
    );
  } catch (error: any) {
    console.error(`Error sending team notification email: ${error.message}`);
    throw error;
  }
}

export async function sendAcknowledgmentEmail(
  name: string,
  email: string,
  options: AcknowledgmentOptions = {}
) {
  try {
    const subject = `Thank you for contacting Revns - Your E-commerce Growth Partner`;
    
    const emailText = `Hi ${name},

Thank you for reaching out to Revns. We've received your inquiry and our team will be in touch shortly to discuss how we can help accelerate your e-commerce growth.

In the meantime:
1. Schedule a Consultation: https://calendly.com/revns/consultation
2. View Our Case Studies: https://revns.com/case-studies
3. Learn About Our Services: https://revns.com/services

Our team typically responds within 1 business day. If you have any immediate questions, feel free to:
- Schedule a consultation using the link above
- Call us at: +91 9769614002
- WhatsApp us: +91 9769614002

Best regards,
Team Revns`;

    const fromEmail = "yash@explainx.ai";
    const replyTo = "yash@explainx.ai";

    await sendMail(
      subject,
      email,
      emailText,
      "Revns Team",
      fromEmail,
      false,
      replyTo
    );
  } catch (error: any) {
    console.error(`Error sending acknowledgment email: ${error.message}`);
    throw error;
  }
}