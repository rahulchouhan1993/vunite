import React from 'react';
import ser6 from '../../assets/bg14.png';
import ser5 from '../../assets/bg13.png';
import ser4 from '../../assets/bg11.png';
import ser3 from '../../assets/bg7.png';
import ser2 from '../../assets/bg5.png';
import ser1 from '../../assets/bg1.png';
import ServiceItem from './ServiceItem';
import { Link } from '@inertiajs/react';

const ServicesGrid = () => {
  const cards = [
    { title: 'Daily Living Support', img: ser1, desc: ' Helping with personal care, meals, and everyday tasks. Helping with personal care, ' },
    { title: 'Community Nursing', img: ser2, desc: 'Nursing services supporting health needs with coordinated clinical oversight.' },
    { title: 'SDA Support', img: ser3, desc: 'Support within suitable accommodation that promotes safety, accessibility, and quality of life.' },
    { title: 'Behaviour Plan Support', img: ser4, desc: 'Implementing agreed supports with consistent communication across your care team.' },
    { title: 'Support Coordination', img: ser5, desc: 'Supporting you to understand your plan, connect services, and move towards your goals.' },
    { title: 'Complex Support Coordination', img: ser6, desc: 'Specialist coordination for complex needs, risk management, and multi-provider collaboration.' },
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
        <Link href={'/services'} className="button btn-hover !bg-white text-sm border-gr px-12 py-3">
          <span className='text-gr uppercase'>View All Services</span>
        </Link>
      </div>
    </div>
    </section>
  );
};

export default ServicesGrid;
