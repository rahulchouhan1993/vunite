import { Users, Shield, Award, MessageCircle } from 'lucide-react';
import siteicon from '../../assets/siteicon.png';

const WhatMakesUsDifferentSection = () => {
  const featureCards = [
    {
      icon: Users,
      title: "Experienced & Caring Team",
      description: "Our support workers are carefully selected, trained, and supported to deliver care that is both professional and compassionate.",
      iconColor: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: Shield,
      title: "Consistency You Can Trust",
      description: "We provide dedicated support teams wherever possible, helping participants build strong, familiar relationships over time.",
      iconColor: "text-coral-600",
      bgColor: "bg-coral-50"
    },
    {
      icon: Award,
      title: "Safety & Quality First",
      description: "We follow all NDIS Quality and Safeguards Commission requirements and maintain strong systems to ensure safe, reliable services.",
      iconColor: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "We believe everyone involved should feel informed and confident. Families, carers, and coordinators are kept up to date through open and transparent communication.",
      iconColor: "text-coral-600",
      bgColor: "bg-coral-50"
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Center icon/graphic decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <div className="w-32 h-32 bg-teal-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="font-recoleta text-3xl sm:text-4xl lg:text-4xl font-bold text-main mb-4">
            What Makes Us Different
          </h2>
        </div>
        <div className=' relative'>
          <div className=" relative z-1 grid grid-cols-1 md:grid-cols-2 gap-30 max-w-5xl mx-auto">
            {featureCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-[30px] p-[20px] md:p-[35px] shadow-[2px_2px_40px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-start space-y-4">
                    {/* Title */}
                    <h3 className="w-full text-xl font-bold text-black text-start">
                      {card.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='  mx-auto absolute z-[0] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-[#FBEBE9] w-[450px] h-[450px] rounded-full flex items-center justify-center'>
            <img className='max-w-[120px]' src={siteicon} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferentSection;