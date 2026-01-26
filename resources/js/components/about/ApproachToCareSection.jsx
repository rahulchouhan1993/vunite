import { Check } from 'lucide-react';
import stroies from '../../assets/about-approch.png';

const ApproachToCareSection = () => {
  
  const bulletPoints = [
    "Adults with intellectual disability",
    'Participants with mental health conditions',
    'Participants with behaviours of concern',
    'Participants requiring Positive Behaviour Support Plans (PBSP)',
    'Participants with complex medical and nursing needs',
    'Participants with medication complexity',
    'Participants transitioning from hospital, mental health units, or aged care',
    'Participants requiring high-intensity daily personal care'
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#E4EEED] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className='flex justify-start items-center'>
          <div className="w-full max-w-[35%] rounded-2xl ">
              <img src={stroies} alt="Care Activity Image 1" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="ps-[50px] w-full max-w-[65%]  mx-auto">
            <h2 className="font-recoleta text-3xl sm:text-4xl lg:text-5xl font-bold text-pink mb-4">
              Our Approach to Care
            </h2>
            <p className=' text-gray-500 mb-8 mt-3'>We believe high-quality disability support is built on:</p>
            <div className=" grid grid-cols-1 md:grid-cols-1 gap-2">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-white rounded-[19px] flex items-center px-4 py-4 pe-8  ">
                    <div className="me-3 w-6 h-6 min-w-6 min-h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4  font-bold text-white" />
                    </div>
                    <span className="text-main text-[15px] font-medium">{point}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default ApproachToCareSection;