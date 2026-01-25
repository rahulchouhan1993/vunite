import React from 'react';
import img from '../../assets/service.png';
import ServiceItem from './ServiceItem';

const ServicesGrid = () => {
  const cards = [
    { title: 'Daily Living Support', img: img, desc: 'Helping with personal care, meals, and everyday tasks.' },
    { title: 'Help to Manage Daily Activities', img: img, desc: 'Support with household tasks and personal routines.' },
    { title: 'Community Participation', img: img, desc: 'Engage with community and social activities confidently.' },
    { title: 'Therapeutic Supports', img: img, desc: 'Professional therapy services to improve wellbeing.' },
    { title: 'Support Coordination', img: img, desc: 'Guidance to navigate and manage your NDIS plan.' },
    { title: 'NDIS Plan Support', img: img, desc: 'Comprehensive assistance across your NDIS journey.' },
    { title: 'Respite Support', img: img, desc: 'Trusted temporary care for families and carers.' },
    { title: 'Transport Assistance', img: img, desc: 'Safe, reliable transport to appointments and activities.' }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-6">
        <h2 className="font-recoleta text-3xl lg:text-4xl  font-bold text-main mb-4">Our NDIS Services</h2>
        <p className="text-gray-500 text-sm xl:text-normal">We provide flexible and reliable NDIS services designed to support your independence and wellbeing.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
        {cards.map((service, idx) => (
          <ServiceItem key={idx} service={service} idx={idx} />
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
