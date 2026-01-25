import heart from '../../assets/heart.png';
import { Activity, Users, Clock, DollarSign, ShieldCheck, MessageCircle } from 'lucide-react';

const StatisticsGrid = () => {
  const features = [
    { title: 'Complex Care Specialists', icon: <Activity size={36} /> },
    { title: 'Dedicated Support Teams', icon: <Users size={36} /> },
    { title: '24/7 Reliable Support', icon: <Clock  size={36}/> },
    { title: 'Transparent Pricing', icon: <DollarSign size={36} /> },
    { title: 'Holistic Risk & Wellbeing', icon: <ShieldCheck size={36} /> },
    { title: 'Clear & Seamless Communication', icon: <MessageCircle size={36} /> }
  ];

  return (
    <section className="bg-[#F5F5F5] relative py-12 md:py-20 relative">
      <div className="relative z-1 container mx-auto">
        <h2 className="text-start text-5xl font-recoleta font-bold text-main mb-2"><span className="text-pink">90 percent</span> of our clients choose to stay with us long-term</h2>
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
              <h3 className="font-bold text-2xl text-black mb-2">{feature.title}</h3>
              <p className="text-normal text-gray-500 leading-relaxed">Your wellbeing always comes first. Our experienced and specially trained team is equipped to support.</p>
            </div>
          ))}
        </div>
      </div>
      <img src={heart} alt="bg" className="w-full max-w-[400px] object-contain absolute bottom-[10%] right-0 object-full z-[0]" />
    </section>
  );
};

export default StatisticsGrid;
