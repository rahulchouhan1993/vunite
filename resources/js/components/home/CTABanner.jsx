import React from 'react';

const CTABanner = () => {
  const colors = { accentRed: 'bg-[#D97768]' };
  return (
    <section className="container mx-auto px-6 mb-20">
      <div className="bg-[#E4EEED] rounded-3xl py-10 lg:py-12 px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="w-full lg:max-w-[50%]">
          <h2 className="font-recoleta text-[28px] leading-[32px] sm:text-[32px] sm:leading-[46px] md:text-[36px] md:leading-[40px] md:max-w-[380px]  font-bold text-main mb-2">You're already funded, but are you receiving the care you deserve?</h2>
        </div>
        <div className="w-full md:max-w-[50%] flex flex-col items-start md:ps-[100px] ps-0 md:border-l-2 border-l-0 border-gray-300">
          <p className="text-lg text-black mb-6  text-start max-w-sm">Discover why our clients trust us to provide exceptional care and support.</p>
          <div className="md:flex ">
            <button className={`w-full lg:w-auto mb-4 md:mb-0 button bg-gr me-4`}>CALL NOW</button>
            <button className="w-full lg:w-auto button btn-hover !bg-white">
              <span className='text-gr'>GET SUPPORT</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
