import React from 'react';

const CTABanner = () => {
  const colors = { accentRed: 'bg-[#D97768]' };
  return (
    <section className="container mx-auto px-6 mb-20">
      <div className="bg-[#E4EEED] rounded-3xl py-12 px-18 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="w-full max-w-[50%]">
          <h2 className="font-recoleta text-3xl max-w-[380px] leading-[50px] font-bold text-main mb-2">You're already funded, but are you receiving the care you deserve?</h2>
        </div>
        <div className="w-full max-w-[50%] flex  md:py-6 md:py-8 flex-col items-start ps-[100px] border-l-2 border-gray-300">
          <p className="text-lg text-gray-500 mb-6  text-start max-w-sm">Discover why our clients trust us to provide exceptional care and support.</p>
          <div className="flex gap-4">
            <button className={`button bg-gr`}>CALL NOW</button>
            <button className="button !bg-white">
              <span className='text-gr'>GET SUPPORT</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
