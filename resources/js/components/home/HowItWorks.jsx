import React from 'react';
import { Phone, Heart, CheckCircle } from 'lucide-react';
import heart from '../../assets/heart-dark.png';
import arrow from '../../assets/arrow.png';

const HowItWorks = () => {
  return (
    <>
    <div className="relative bg-white relative py-20">
      <div className="container m-auto">
        <section className="realtive z-1 py-20 px-6 bg-white text-center rounded-[40px] shadow-[3px_3px_40px_rgba(0,0,0,0.1)] relative overflow-hidden">
          <h2 className="font-recoleta text-4xl font-bold text-main mb-16">How It Works</h2>
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 relative">
            <div className="flex-1 flex flex-col items-center z-10 relative">
              <div className="w-20 h-20 bg-[#E4EEED] text-4xl rounded-full flex items-center justify-center mb-4 text-gray-600">📞</div>
              <span className="text-sm font-bold text-gray-400 my-3">STEP 1</span>
              <h3 className="font-bold text-main text-xl">Contact Us</h3>
              <p className="text-sm text-gray-500 mt-2">Get in touch by phone or form.</p>
            </div>
            <div className="pt-[30px] hidden md:block">
              <img src={arrow} />
            </div>
            <div className="flex-1 flex flex-col items-center z-10 relative">
              <div className="w-20 h-20 bg-[#E4EEED] text-4xl rounded-full flex items-center justify-center mb-4 text-yellow-600">🤝</div>
              <span className="text-sm font-bold text-gray-400 my-3">STEP 2</span>
              <h3 className="font-bold text-main text-xl">We Understand Your Needs</h3>
              <p className="text-sm text-gray-500 mt-2">We listen and create a personalised plan.</p>
            </div>
            <div className="pt-[30px] hidden md:block">
              <img src={arrow} />
            </div>
            <div className="flex-1 flex flex-col items-center z-10 relative">
              <div className="w-20 h-20 bg-[#E4EEED] text-4xl rounded-full flex items-center justify-center mb-4 text-green-600">🌱</div>
              <span className="text-sm font-bold text-gray-400 my-3">STEP 3</span>
              <h3 className="font-bold text-main text-xl">Start Your Support</h3>
              <p className="text-sm text-gray-500 mt-2">Begin services with a trusted support worker.</p>
            </div>
          </div>
        </section>
        <img src={heart} alt="bg" className="w-full max-w-[300px] object-contain absolute bottom-[0%] left-0 object-full z-[0]" />
      </div>
    </div>
    </>
  );
};

export default HowItWorks;
