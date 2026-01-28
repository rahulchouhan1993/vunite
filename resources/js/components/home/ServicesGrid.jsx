import React from 'react';
import ser6 from '../../assets/service/6.png';
import ser5 from '../../assets/service/5.png';
import ser4 from '../../assets/service/4.png';
import ser3 from '../../assets/service/3.png';
import ser2 from '../../assets/service/2.png';
import ser1 from '../../assets/service/1.png';
import ServiceItem from './ServiceItem';

const ServicesGrid = () => {
  const cards = [
    { title: 'Daily Living Support', img: ser1, desc: ' Helping with personal care, meals, and everyday tasks. Helping with personal care, ' },
    { title: 'Help to Manage Daily Activities', img: ser2, desc: 'Support with household tasks and personal routines.' },
    { title: 'Community Participation', img: ser3, desc: 'Engage with community and social activities confidently.' },
    { title: 'Therapeutic Supports', img: ser4, desc: 'Professional therapy services to improve wellbeing.' },
    { title: 'Support Coordination', img: ser5, desc: 'Guidance to navigate and manage your NDIS plan.' },
    { title: 'NDIS Plan Support', img: ser6, desc: 'Comprehensive assistance across your NDIS journey.' },
  ];

  return (
    <section className="py-20  bg-white">
    <div className="container m-auto">
      <div className="text-center max-w-3xl mx-auto mb-6">
        <h2 className="font-recoleta text-3xl lg:text-4xl  font-bold text-main mb-4">Our NDIS Services</h2>
        <p className="text-gray-500 text-sm xl:text-normal">We provide flexible and reliable NDIS services designed to support your independence and wellbeing.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
        {cards.map((service, idx) => (
          <ServiceItem key={idx} service={service} idx={idx} />
        ))}
      </div>
      <div className="text-center mt-6 md:mt-12">
        <button className="button btn-hover !bg-white text-sm border-gr px-12 py-3">
          <span className='text-gr uppercase'>View All Services</span>
        </button>
      </div>
    </div>
    </section>
  );
};

export default ServicesGrid;
