import { Target, BarChart, DollarSign, Users, Shield, Rocket, 
    TrendingUp, Search, ShoppingCart, Camera, Clock, CheckCircle,
    Star, FileText, Globe } from 'lucide-react';
  
  interface Benefit {
    title: string;
    description: string;
    icon?: string;
  }
  
  interface ServiceBenefitsProps {
    benefits: Benefit[];
  }
  
  const iconMapping: Record<string, any> = {
    Target, BarChart, DollarSign, Users, Shield, Rocket,
    TrendingUp, Search, ShoppingCart, Camera, Clock, CheckCircle,
    Star, FileText, Globe
  };
  
  const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon ? iconMapping[benefit.icon] : Target;
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 mb-6 text-blue-600">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServiceBenefits;