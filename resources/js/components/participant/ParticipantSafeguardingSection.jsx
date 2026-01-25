import img from '../../assets/safe.png';

const ParticipantSafeguardingSection = () => {
  const safeguardingItems = [
    {
      title: "Incident management processes",
    },
    {
      title: "Complaints handling",
    },
    {
      title: "Staff training and supervision",
    },
    {
      title: "Compliance with NDIS practice standards",
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#F5F5F5] mb-20">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-28 items-center">
          <div>
            <h2 className="font-recoleta text-3xl sm:text-3xl lg:text-4xl font-bold text-main mb-6">
              Safeguarding
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We maintain strong systems to identify, manage, and escalate risks, including:
            </p>

            <div className="space-y-0">
              {safeguardingItems.map((right, index) => {
                return (
                  <div key={index} className={`p-5 lg:p-6 ${safeguardingItems.length === index + 1 ? "" : "border-b border-gray-200"} transition-shadow duration-200`}>
                    <div className="flex items-start">
                        <h3 className="text-lg font-bold text-black ">{right.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
           <div className="relative">
            <div className="rounded-3xl flex items-center justify-center relative">
                <img src={img} alt="Participant Rights" className="w-full h-full object-cover rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipantSafeguardingSection;
