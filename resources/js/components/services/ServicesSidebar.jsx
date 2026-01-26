import { useState } from 'react';

const ServicesSidebar = () => {
  const [activeCategory, setActiveCategory] = useState('Specialist Disability Accommodation (SDA)');

  const serviceCategories = [
    'Core Supports',
    'High Intensity & Community Nursing Care',
    'Specialist Disability Accommodation (SDA)',
    'Behaviour Support',
    'Specialist Support Coordination',
    'Future Services'
  ];

  return (
    <div className="bg-gray-50 rounded-2xl h-fit lg:sticky lg:top-[140px]">
      <nav className="flex lg:flex-col gap-3 lg:gap-0 overflow-x-auto lg:overflow-visible p-3 lg:p-0">
        {serviceCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`flex-shrink-0 lg:flex-shrink w-auto lg:w-full text-left px-4 md:px-4 py-6 rounded-lg md:rounded-[0px] transition-all duration-200 lg:border-b lg:border-gray-200 ${
              activeCategory === category
                ? 'bg-[#E4EEED] text-main'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
            }`}
          >
            <span className="text-sm font-medium leading-relaxed whitespace-nowrap lg:whitespace-normal">{category}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ServicesSidebar;
