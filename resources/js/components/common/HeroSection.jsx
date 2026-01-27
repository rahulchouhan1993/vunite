import { CheckCircle } from 'lucide-react';
import hero from '../../assets/abouthero.png';
import { Link } from '@inertiajs/react';

const PageHeroSection = ({ width, banner, link, title, description }) => {
  return (
    <>

      <style>{`
          .hero-bg {
            background: linear-gradient(90deg, #0F6F75 19.64%, rgba(15, 111, 117, 0) 100%);
          }
      `}</style>

      <div className='relative  '>
          <img src={banner || hero} alt="Background" className="heroimg  absolute top-0 left-0 w-full h-full object-cover" />
          <div className='hero-bg w-full h-full absolute top-0 left-0 '></div>
          <section className="container mx-auto px-5 lg:px-0 relative w-full flex items-center">
            <div className={` md:min-h-[400px] py-[50px] flex items-center  lg:py-[60px] ${width ? width : "max-w-[550px]" } w-full h-full relative text-white  `}>
              <div>
                <h1 className="font-recoleta text-[32px] md:text-[48px] lg:text-[58px]  font-bold mb-6 leading-tight">{title}</h1>
                <p className=" text-normal md:text-[16px] lg:text-[18px] opacity-90">{description}</p>
                
                {link && 
                <div>
                  <Link href={link} className="block sm:w-fit mt-12 button btn-hover !bg-white">
                    <span className='text-gray-800 text-gr'>GET SUPPORT</span>
                  </Link>
                </div>
                }
              </div>
            </div>
          </section>
      </div>
    </>
  );
};

export default PageHeroSection;
