import { Link } from '@inertiajs/react';
import logo from '../assets/unitelogo.png'
export const Header = () => {
    const colors = {
      primaryGreen: 'bg-[#2E8B83]',
      accentRed: 'bg-[#D97768]'
    };
  return (
    <div className="bg-white sticky top-0 z-9">
    <header className="container m-auto bg-white py-4 flex justify-between items-center sticky top-0 z-2">
        <div className="flex items-center gap-2">
          <img src={logo} className='max-w-[180px]' />          
        </div>
        <nav className="hidden lg:flex gap-4 xl:gap-6 text-sm lg:text-normal xl:text-[16px] font-medium text-gray-500">
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <Link href="/services" className="hover:text-teal-600">Services</Link>
          <Link href="/participant" className="hover:text-teal-600">Participant</Link>
          <Link href="/referral" className="hover:text-teal-600">Make Referral</Link>
          <Link href="/contact-us" className="hover:text-teal-600">Contact Us</Link>
          <Link href="/about" className="hover:text-teal-600">About Us</Link>
          <Link href="/faq" className="hover:text-teal-600">FAQs</Link>
        </nav>
        
        <button className={`btn bg-gr text-white text-sm px-6 py-3  rounded-[30px]`}>REGISTER YOUR INTEREST</button>
    </header>
    </div>
  );
};
