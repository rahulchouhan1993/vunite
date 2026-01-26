import heart from '../../assets/heart.png';
import { Activity, Users, Clock, DollarSign, ShieldCheck, MessageCircle } from 'lucide-react';

const StatisticsGrid = () => {
  const features = [
    { title: 'Complex Care Specialists', desc:"Your wellbeing always comes first. Our experienced and specially trained team is equipped to support complex needs with care, consistency, and professionalism—ensuring your support is always reliable and responsive.", icon: <Activity size={36} /> },
    { title: 'Dedicated Support Teams', desc:"You are supported by a consistent team who takes the time to know you. This continuity allows strong relationships to form, helping you feel comfortable, respected, and supported with dignity.", icon: <Users size={36} /> },
    { title: '24/7 Reliable Support', desc:"Support should never stop when you need it most. Our team is available 24 hours a day, 7 days a week, so you’re never alone and help is always within reach.", icon: <Clock  size={36}/> },
    { title: 'Transparent Pricing', desc:"We believe in honesty and clarity. You are only charged for the services you book—never for travel, mileage, or additional communication.", icon: <DollarSign size={36} /> },
    { title: 'Holistic Risk & Wellbeing', desc:"Safety is more than a checklist. Our proactive risk assessments focus on the whole person, ensuring physical, emotional, and environmental wellbeing are always prioritised.", icon: <ShieldCheck size={36} /> },
    { title: 'Clear & Seamless Communication', desc:"Families and loved ones are part of the journey. We make communication simple and transparent, keeping everyone informed, involved, and confident in the care being provided.", icon: <MessageCircle size={36} /> }
  ];

  return (
    <section className="bg-[#F5F5F5] relative py-12 md:py-20 relative">
      <div className="relative z-1 container mx-auto">
        <h2 className="text-start text-[30px] md:text-[35px] lg:text-[40px]
        
        leading-[30px] md:leading-[35px] lg:leading-[40px]
        
        font-recoleta font-bold text-main mb-2"><span className="text-pink">90 percent</span> of our clients choose to stay with us long-term</h2>
        <p className="text-start text-[18px] font-bold tracking-widest text-black my-6 uppercase">That trust comes from the way we care.</p>
        <p className="text-start text-[18px] font-light text-gray-500 ">At V Unite, we deliver high-quality, personalised NDIS support for people with complex and everyday needs. Regardless of the level of care required, our team is trained to create a safe, supportive environment that helps participants maintain healthy routines, build independence, and feel confident in their daily lives.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-8 gap-y-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-start">
              <div className={`w-20 h-20 rounded-[14px] flex  
                items-center justify-center mb-4 text-white
                ${idx % 2 === 0 ? 'bg-pink' : 'bg-main'}`}>
                  {feature.icon}
                </div>
              <h3 className="font-bold text-[21px] md:text-[23px] lg:text-[24px] text-black mb-2">{feature.title}</h3>
              <p className="text-[15px] lg:text-[16px] text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <img src={heart} alt="bg" className="w-full max-w-[400px] object-contain absolute bottom-[10%] right-0 object-full z-[0]" />
    </section>
  );
};

export default StatisticsGrid;
