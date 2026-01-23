import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import commas from '../../assets/comma.png';

const testimonials = [
  { name: 'Sarah', role: 'NDIS Participant', quote: 'The support workers are kind, reliable, and really listen to my needs.', rating: 3 },
  { name: 'James', role: 'Support Coordinator', quote: 'Professional team that truly cares about outcomes and clear communication.', rating: 5 },
  { name: 'Mia', role: 'Family Carer', quote: 'Respite support gives us peace of mind while our loved one is well cared for.', rating: 4 },
  { name: 'Sarah', role: 'NDIS Participant', quote: 'The support workers are kind, reliable, and really listen to my needs.', rating: 3 },
  { name: 'James', role: 'Support Coordinator', quote: 'Professional team that truly cares about outcomes and clear communication.', rating: 5 },
  { name: 'Mia', role: 'Family Carer', quote: 'Respite support gives us peace of mind while our loved one is well cared for.', rating: 4 },
  { name: 'Liam', role: 'NDIS Participant', quote: 'Tailored support helped me live more independently and confidently.', rating: 5 },
  { name: 'James', role: 'Support Coordinator', quote: 'Professional team that truly cares about outcomes and clear communication.', rating: 5 },
  { name: 'Mia', role: 'Family Carer', quote: 'Respite support gives us peace of mind while our loved one is well cared for.', rating: 4 },
  { name: 'Liam', role: 'NDIS Participant', quote: 'Tailored support helped me live more independently and confidently.', rating: 5 },
];

const StarRow = ({ count = 5 }) => (
  <div className="flex text-yellow-400 mb-4" aria-hidden>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="mr-1 text-2xl">★</span>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="pt-24 pb-4 w-full ">
      <div className="container mx-auto relative" >
          <h2 className="font-recoleta text-4xl font-bold text-main mb-12 uppercase">Testimonials</h2>
          <img src={commas} alt='commas' className="absolute top-[-20px] right-[10%] w-full  object-contain max-w-[180px]" />
      </div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop className='!h-auto w-full  !mb-[30px]'
        slidesPerView={1}
        centeredSlides={true} 
        spaceBetween={30}
        breakpoints={{
          500: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx} className="!h-[200px] ">
            <div className="bg-white min-w-[60px] min-h-[220px] max-w-[60px] p-6 border border-gray-100 rounded-[24px] shadow-sm max-w-[480px] mx-auto">
              <StarRow count={t.rating} />
              <p className="text-[15px] text-gray-600 mb-6">"{t.quote}"</p>
              <p className="text-[15px] text-gray-800">— {t.name}, {t.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
