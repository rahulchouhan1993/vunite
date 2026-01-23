import React from 'react';
import { Play } from 'lucide-react';
import stroies from '../../assets/hero.png';

const RealStories = () => {
  return (
    <section className="py-20 container mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 relative">
          <img src={stroies} alt="Video thumbnail" className="rounded-3xl !min-h-[380px] w-full object-cover shadow-lg" />
          <button className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition">
            <Play className="ml-1" />
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="font-recoleta text-4xl font-bold text-main mb-2">Real Stories.</h2>
          <h2 className="font-recoleta text-4xl font-bold text-pink mb-6">Real Support.</h2>
          <p className="font-bold text-gray-800 text-xl mb-4">See how we support NDIS participants to live more confidently and independently every day.</p>
          <p className="text-gray-600 mb-2 text-normal md:text-lg leading-relaxed">
            We believe every person deserves respectful, reliable, and personalised support.
          </p>
          <p className="text-gray-600 mb-2 text-normal md:text-lg leading-relaxed">
            This short video shows how our team works closely with participants and families to create meaningful outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealStories;
