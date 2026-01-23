import React from 'react';
import { Play } from 'lucide-react';
import stroies from '../../assets/hero.png';
import heart from '../../assets/heart-dark.png';

const AboutWhoWeAre = () => {
  return (
    <div className='relative'>
              
      <img src={heart} alt="bg" className="w-full max-w-[370px] object-contain absolute top-[0%] left-0 object-full z-[0]" />
      
      <section className="relative z-1 py-20 container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="font-recoleta text-4xl font-bold text-main mb-2">Who We Are</h2>
            <p className="text-gray-600 my-6 text-normal md:text-lg leading-relaxed">
              V Unite Support Services Pty Ltd is a disability support provider delivering NDIS-aligned services across community, home, and supported living environments.
            </p>
            <p className="text-main mb-2 text-normal md:text-lg leading-relaxed">
              Our organisation is led by healthcare professionals with extensive experience in clinical coordination, risk management, and person-centred care.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative">
            <img src={stroies} alt="Video thumbnail" className="rounded-3xl !min-h-[380px] w-full object-cover shadow-lg" />
            <button className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition">
              <Play className="ml-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutWhoWeAre;
