import { ArrowRight } from 'lucide-react';
export default function FadingServiceItem({service, idx}) {
  return (
   <div key={idx} className=" bg-[#E4EEED] rounded-[20px]  hover:shadow-lg transition group">
      <div className='p-3'>
         <img src={service?.img} alt={service.title} className="fading w-full rounded-[15px]  object-cover" />
      </div>
      <div className="px-6 py-[20px]">
         <h3 className="fading text-xl lg:text-xl font-bold text-main mb-3 line-clamp-1">{service.title}</h3>
         <p className="fading line-clamp-3 text-gray-500 text-sm lg:text-[15px] mb-4">{service.desc}</p>
         <a href="/services" className="fading text-sm lg:text-[14px] font-semibold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
            Learn More <ArrowRight className="w-4 h-4" />
         </a>
      </div>
   </div>
  )
}
