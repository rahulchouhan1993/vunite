import { Users, Heart, Shield, Award } from 'lucide-react';
import img from '../../assets/rights.png';

const ParticipantRightsSection = () => {
  const rights = [
    {
      title: "Choices and control",
    },
    {
      title: "Dignity and respect",
    },
    {
      title: "Privacy and confidentiality",
    },
    {
      title: "Safe, ethical, and transparent service delivery",
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-28 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-3xl flex items-center justify-center relative">
               <img src={img} alt="Participant Rights" className="w-full h-full object-cover rounded-3xl" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="font-recoleta text-3xl sm:text-3xl lg:text-4xl font-bold text-main mb-6">
              Your rights
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              At V unite, we are committed to protecting participant rights, including:
            </p>

            <div className="space-y-4">
              {rights.map((right, index) => {
                return (
                  <div key={index} className="bg-gray-50 rounded-[20px] p-5 lg:p-6 shadow-[2px_2px_40px_rgba(0,0,0,0.15)] transition-shadow duration-200">
                    <div className="flex items-start">
                        <h3 className="text-lg font-bold text-main ">{right.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipantRightsSection;
