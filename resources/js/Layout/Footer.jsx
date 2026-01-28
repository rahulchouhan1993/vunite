import React from 'react';
import logo from '../assets/footerlogo.png'
import { Link } from '@inertiajs/react';

export const Footer = ({  contactInfo, quickLinks, services }) => {
  return (
    <>
      <footer className={`footerbg text-white pt-8 pb-4 md:pt-20 md:pb-10`}>
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="bg-white w-fit p-3 rounded-[20px] mb-6">
                <img src={logo} className='w-full max-w-[80px]' />          
              </div>
              <div className="text-[15px] lg:text-[15px] space-y-2 opacity-90">
                <p className='mb-2'><span className="font-light">Founder : </span> Yuvraj Dhingra</p>
                <p className='mb-2'><span className="font-light">Address : </span> 68 Hanorah Avenue, Virginia, 5120</p>
                <p className='mb-2'><span className="font-light">Contact no : </span> +61 449 799 946</p>
                <p className='mb-2'><span className="font-light">Email : </span> info@vunitesupportservices.com.au</p>
              </div>
            </div>
            <div className='md:ps-[100px]'>
              <h4 className="font-bold mb-6 text-xl">QUICK LINKS</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li><Link href="/services" className="hover:text-gray-300 text-[15px] lg:text-[15px]">- Our Services</Link></li>
                <li><Link href="/who-we-help" className="hover:text-gray-300 text-[15px] lg:text-[15px]">- Who We Help</Link></li>
                <li><Link href="/about" className="hover:text-gray-300 text-[15px] lg:text-[15px]">- About Us</Link></li>
                <li><Link href="/work-with-us" className="hover:text-gray-300 text-[15px] lg:text-[15px]">- Work with us</Link></li>
                <li><Link href="/referral" className="hover:text-gray-300 text-[15px] lg:text-[15px]">- Make a referral</Link></li>
                <li><Link href="/faq" className="hover:text-gray-300 text-[15px] lg:text-[15px]">- FAQs</Link></li>
                <li><Link href="/register-interest" className="hover:text-gray-300 text-[15px] lg:text-[15px]">- Register your interest</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">SERVICES</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li><a href="#" className="hover:text-gray-300 text-[15px] lg:text-[15px]">Support Worker Services</a></li>
                <li><a href="#" className="hover:text-gray-300 text-[15px] lg:text-[15px]">Community Nursing</a></li>
                <li><a href="#" className="hover:text-gray-300 text-[15px] lg:text-[15px]">Supported Independent Living</a></li>
                <li><a href="#" className="hover:text-gray-300 text-[15px] lg:text-[15px]">Specialised Disability Accommodation</a></li>
                <li><a href="#" className="hover:text-gray-300 text-[15px] lg:text-[15px]">Complex Hospital Discharge Planning</a></li>
                <li><a href="#" className="hover:text-gray-300 text-[15px] lg:text-[15px]">Veteran Community Nursing</a></li>
              </ul>
            </div>
          </div>
      </footer>
      <div className="container py-6 mx-auto flex flex-col md:flex-row justify-between text-sm md:text-[14px] md:text-[14px] opacity-70">
        <p className='text-gray-700'>Copyright © 2025 V Unite. All Rights Reserved</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className=' text-gray-700 underline'>Terms & Condition</a>
          <a href="#" className=' text-gray-700 underline'>Privacy Policy</a>
        </div>
      </div>
    </>
  );
};
