import { CheckCircle } from 'lucide-react';
import hero from '../../assets/abouthero.png';
import { Link } from '@inertiajs/react';

const PageHeroSection = ({ link, title, description }) => {
  return (
    <>

      <style>{`
          .hero-bg {
            background: linear-gradient(90deg, #0F6F75 19.64%, rgba(15, 111, 117, 0) 100%);
          }
      `}</style>

      <div className='relative  '>
          <img src={hero} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover" />
          <div className='hero-bg w-full h-full absolute top-0 left-0 '></div>
          <section className="container mx-auto relative w-full flex items-center">
            <div className=" py-[50px]  lg:py-[60px] max-w-[450px]  w-full h-full relative text-white  ">
              <h1 className="font-recoleta text-4xl md:text-5xl  font-bold mb-6 leading-tight">{title}</h1>
              <p className="mb-12 text-normal lg:text-[16px] opacity-90">{description}</p>
              <Link href={link} className=" button !bg-white">
                <span className='text-gray-800 text-gr'>GET SUPPORT</span>
              </Link>
            </div>
          </section>
      </div>
    </>
  );
};

export default PageHeroSection;
