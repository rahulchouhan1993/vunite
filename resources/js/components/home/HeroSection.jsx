import { CheckCircle } from 'lucide-react';
import hero from '../../assets/hero.png';
import ndis from '../../assets/wenidis.png';

const HeroSection = () => {
  return (
    <>

      <style>{`
          .clip-path-hero {
            background: linear-gradient(100.67deg, rgba(50, 140, 126, 0.9) 39.36%, rgba(237, 105, 94, 0.4) 93.97%);
          }
      `}</style>

      <div className='container mx-auto px-5 lg:px-0 relative mt-[10px]'>
        {/* <div className="absolute z-1 bg-gradient-to-r from-[#328C7E] via-[#ED695E]/60 to-transparent w-full h-full clip-path-hero"></div> */}
        <div className=' overflow-hidden '>
            <section className="!rounded-[50px] relative overflow-hidden w-full flex items-center">
              <img src={hero} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover" />
              <div className='clip-path-hero w-full h-full absolute top-0 left-0 '></div>
              <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-[60px] lg:py-[60px] max-w-[600px] lg:max-w-[700px] w-full h-full relative text-white">
                <p className="uppercase tracking-widest text-sm lg:text-normal mb-4">Welcome to V Unite</p>
                <h1 className="font-recoleta text-4xl md:text-5xl  font-bold mb-6 leading-tight">Supporting You to Live More Independently</h1>
                <p className="mb-8 text-normal lg:text-[16px] opacity-90">Registered NDIS Provider offering personalised disability support services across South Australia.</p>
                <div className="space-y-3 mb-8">
                  {['Nurse-led care approach', 'NDIS Registered Provider', 'Qualified Support Workers', 'Person-Centred Care'].map((item, idx) => (
                    <div key={idx} className="text-sm md:text-normal lg:text-[16px] flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-white" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="button !bg-white">
                  <span className='text-gr'>GET SUPPORT</span>
                </button>
              </div>
            </section>
        </div>
        <div className="absolute bottom-1 right-1 z-1">
            <img className='' src={ndis}  />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
