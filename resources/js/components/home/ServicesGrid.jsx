import React from 'react';
import { ArrowRight } from 'lucide-react';
import service from '../../assets/service.png';

const ServicesGrid = () => {
  const cards = [
    { title: 'Daily Living Support', img: service, desc: 'Helping with personal care, meals, and everyday tasks.' },
    { title: 'Help to Manage Daily Activities', img: service, desc: 'Support with household tasks and personal routines.' },
    { title: 'Community Participation', img: service, desc: 'Engage with community and social activities confidently.' },
    { title: 'Therapeutic Supports', img: service, desc: 'Professional therapy services to improve wellbeing.' },
    { title: 'Support Coordination', img: service, desc: 'Guidance to navigate and manage your NDIS plan.' },
    { title: 'NDIS Plan Support', img: service, desc: 'Comprehensive assistance across your NDIS journey.' },
    { title: 'Respite Support', img: service, desc: 'Trusted temporary care for families and carers.' },
    { title: 'Transport Assistance', img: service, desc: 'Safe, reliable transport to appointments and activities.' }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-6">
        <h2 className="font-recoleta text-3xl lg:text-4xl  font-bold text-main mb-4">Our NDIS Services</h2>
        <p className="text-gray-500 text-sm xl:text-normal">We provide flexible and reliable NDIS services designed to support your independence and wellbeing.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
        {cards.map((service, idx) => (
          <div key={idx} className="bg-[#E4EEED] rounded-[20px] overflow-hidden hover:shadow-lg transition group">
            <div className='p-3'>
              <img src={service.img} alt={service.title} className="w-full rounded-[15px] h-[150px] object-cover" />
            </div>
            <div className="px-6 py-[20px]">
              <h3 className="text-xl lg:text-xl font-bold text-main mb-3 line-clamp-1">{service.title}</h3>
              <p className="text-gray-500 text-sm lg:text-[15px] mb-4">{service.desc}</p>
              <a href="#" className="text-sm lg:text-[14px] font-semibold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="button !bg-white text-sm border-gr px-12 py-3">
          <span className='text-gr uppercase'>View All Services</span>
        </button>
      </div>
    </section>
  );
};

export default ServicesGrid;
