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
    <div className="bg-gray-50 rounded-2xl h-fit sticky top-[140px]">
      <nav className=" ">
        {serviceCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`border-b border-gray-200 mb-4 w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
              activeCategory === category
                ? 'bg-[#E4EEED] text-main '
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
            }`}
          >
            <span className="text-sm font-medium leading-relaxed">{category}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ServicesSidebar;