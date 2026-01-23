import React from 'react';
import logo from '../assets/unitelogo.png'

export const Footer = ({  contactInfo, quickLinks, services }) => {
  return (
    <>
      <footer className={` footerbg text-white pt-20 pb-10`}>
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="bg-white w-fit p-4 rounded-xl mb-6">
                <img src={logo} className='max-w-[170px]' />          
              </div>
              <div className="text-[15px] lg:text-[16px] space-y-2 opacity-90">
                <p className='mb-2'><span className="font-light">Founder : </span> Yuvraj Dhingra</p>
                <p className='mb-2'><span className="font-light">Contact no : </span> +61 449 799 946</p>
                <p className='mb-2'><span className="font-light">Email : </span> info@vunitesupportservices.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">QUICK LINKS</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li><a href="#" className="hover:underline text-[15px] lg:text-[16px]">- Our Services</a></li>
                <li><a href="#" className="hover:underline text-[15px] lg:text-[16px]">- Who We Help</a></li>
                <li><a href="#" className="hover:underline text-[15px] lg:text-[16px]">- About Us</a></li>
                <li><a href="#" className="hover:underline text-[15px] lg:text-[16px]">- Work with us</a></li>
                <li><a href="#" className="hover:underline text-[15px] lg:text-[16px]">- Make a referral</a></li>
                <li><a href="#" className="hover:underline text-[15px] lg:text-[16px]">- FAQs Us</a></li>
                <li><a href="#" className="hover:underline text-[15px] lg:text-[16px]">- Register your interest</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-xl">SERVICES</h4>
              <ul className="space-y-3 text-sm opacity-90">
                <li><a href="#" className="hover:underline text-[15px] lg:text-[16px]">Support Worker Services</a></li>
                <li><a href="#" className="hover:underline text-[15px] lg:text-[16px]">Community Nursing</a></li>
                <li><a href="#" className="hover:underline text-[15px] lg:text-[16px]">Supported Independent Living</a></li>
                <li><a href="#" className="hover:underline text-[15px] lg:text-[16px]">Specialised Disability Accommodation</a></li>
                <li><a href="#" className="hover:underline text-[15px] lg:text-[16px]">Complex Hospital Discharge Planning</a></li>
                <li><a href="#" className="hover:underline text-[15px] lg:text-[16px]">Veteran Community Nursing</a></li>
              </ul>
            </div>
          </div>
      </footer>
      <div className="container py-6 mx-auto flex flex-col md:flex-row justify-between text-sm md:text-[15px] opacity-70">
        <p>Copyright © 2025 V Unite. All Rights Reserved</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </>
  );
};
