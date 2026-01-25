import { CircleCheck } from 'lucide-react';
import whychoose from '../../assets/whychoosebg.png';
 
const WhyChooseUs = () => {
  const benefits = ['Nurse-led care approach', 'Family-owned & values-driven', 'Focus on dignity, safety & clinical oversight', 'Understanding of complex care needs'];
  return (
    <section className="relative  py-6 sm:py-12 md:py-24  ">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center">
        <div className={`whychoosebg text-white p-6 sm:p-12 md:p-16 rounded-[35px] max-w-[500px] z-1 lg:-mr-12 shadow-2xl`}>
          <h2 className="font-recoleta text-3xl font-bold mb-8">Why Choose V UNITE</h2>
          <div className="space-y-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="rounded-full">
                  <CircleCheck />
                </div>
                <span className="font-medium text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={whychoose} alt="Caregiver" className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl" />
    </section>
  );
};

export default WhyChooseUs;
