import { Users, Shield, Award, MessageCircle } from 'lucide-react';
import siteicon from '../../assets/siteicon.png';

const WhatMakesUsDifferentSection = () => {
  const featureCards = [
    {
      icon: Users,
      title: "Experienced & Caring Team",
      description: "Qualified professionals dedicated to person-centred care.",
      iconColor: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: Shield,
      title: "Consistency You Can Trust",
      description: "Reliable supports with continuity.",
      iconColor: "text-coral-600",
      bgColor: "bg-coral-50"
    },
    {
      icon: Award,
      title: "Safety & Quality First",
      description: "Best-practice standards and rigorous safeguards.",
      iconColor: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "Transparent updates and coordination across your providers.",
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
                  className="bg-white rounded-[35px] p-8 shadow-[2px_2px_40px_rgba(0,0,0,0.1)] hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon */}
                    <div className={`${card.bgColor} rounded-full p-4`}>
                      <IconComponent className={`w-8 h-8 ${card.iconColor}`} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800">
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