import React from 'react';
import { Activity, Users, ShieldCheck } from 'lucide-react';
import wesupport from '../../assets/wesupport.png';
import s1 from '../../assets/s1.png';
import s3 from '../../assets/s3.png';
import s2 from '../../assets/s2.png';

const WhoWeSupport = () => {
  
  const colors = { accentRed: 'bg-[#D97768]' };
  const blocks = [
    { title: 'NDIS Participants', icon: s1, text: 'Tailored support based on your goals and needs. Tailored support based on your goals and needs. Tailored support based on.' },
    { title: 'Families & Carers', icon: s2, text: 'Reliable support you can trust. Support you can trust. Support reliable you can trust. You can trust. Reliable support you can trust.' },
    { title: 'Support Coordinators', icon: s3, text: 'Clear communication and dependable services. Clear communication and dependable services. Clear  services. ' }
  ];

  return (
    <>
    <div className='container m-auto'>
      <section className="rounded-[30px] overflow-hidden py-16 bg-gray-700 relative">
        <img src={wesupport} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className='clip-path-hero w-full h-full absolute top-0 left-0 '></div>

        <div className="relative px-8">
          <h2 className="text-center text-white text-3xl font-recoleta font-bold mb-8">Who We Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9 xl:gap-12 px-12">
            {blocks.map((item, idx) => (
              <div key={idx} className="bg-white rounded-[30px] p-8 lg:p-12 text-start shadow-xl">
                <img src={item.icon} alt={item.title} className=" max-w-[100px] mt-3 mb-6 lg:mb-6 " />
                <h3 className="text-xl lg:text-2xl font-bold text-main mb-4 pt-6">{item.title}</h3>
                <p className="text-gray-500 text-normal lg:text-[15px] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default WhoWeSupport;
