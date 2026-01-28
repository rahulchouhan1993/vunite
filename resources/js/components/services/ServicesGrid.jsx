import ServiceItem from '../home/ServiceItem'
import bg from '../../assets/service.png'

const servicesByCategory = {
  'Core Supports': [
    {
      title: 'Daily Living Support',
      img: bg,
      desc: 'Help with everyday tasks at home and in the community to support your independence.',
    },
    {
      title: 'Community Access',
      img: bg,
      desc: 'Support to build confidence, connect socially, and participate in community activities.',
    },
    {
      title: 'Assistance with Self-Care',
      img: bg,
      desc: 'Personal care and routine support delivered respectfully and safely.',
    },
  ],
  'High Intensity & Community Nursing Care': [
    {
      title: 'Complex Personal Care',
      img: bg,
      desc: 'High intensity daily support delivered by trained staff following your care plan.',
    },
    {
      title: 'Community Nursing',
      img: bg,
      desc: 'Nursing services supporting health needs with coordinated clinical oversight.',
    },
    {
      title: 'Medication Support',
      img: bg,
      desc: 'Assistance to safely manage medication routines as outlined by your healthcare team.',
    },
  ],
  'Specialist Disability Accommodation (SDA)': [
    {
      title: 'SDA Support',
      img: bg,
      desc: 'Support within suitable accommodation that promotes safety, accessibility, and quality of life.',
    },
    {
      title: 'Tenancy Support',
      img: bg,
      desc: 'Help to build skills and confidence to maintain your home and daily routines.',
    },
    {
      title: 'Independent Living Skills',
      img: bg,
      desc: 'Practical support to strengthen your independence at home and in the community.',
    },
  ],
  'Behaviour Support': [
    {
      title: 'Positive Behaviour Support',
      img: bg,
      desc: 'Evidence-informed strategies that reduce barriers and support your goals and wellbeing.',
    },
    {
      title: 'Behaviour Plan Support',
      img: bg,
      desc: 'Implementing agreed supports with consistent communication across your care team.',
    },
    {
      title: 'Skill Building',
      img: bg,
      desc: 'Support to build coping strategies and daily skills for long-term outcomes.',
    },
  ],
  'Specialist Support Coordination': [
    {
      title: 'Support Coordination',
      img: bg,
      desc: 'Supporting you to understand your plan, connect services, and move towards your goals.',
    },
    {
      title: 'Complex Support Coordination',
      img: bg,
      desc: 'Specialist coordination for complex needs, risk management, and multi-provider collaboration.',
    },
    {
      title: 'Plan Implementation',
      img: bg,
      desc: 'Help to activate supports, monitor progress, and adjust services when needs change.',
    },
  ],
  'Future Services': [
    {
      title: 'Coming Soon',
      img: bg,
      desc: 'We are expanding our services. Check back soon for new support options.',
    },
    {
      title: 'More Supports',
      img: bg,
      desc: 'New programs and services are in development to better meet community needs.',
    },
    {
      title: 'Stay Updated',
      img: bg,
      desc: 'Register your interest to hear about upcoming services and availability.',
    },
  ],
}

const ServicesGrid = ({ activeCategory }) => {
  const services = servicesByCategory[activeCategory] ?? []

  return (
    <div className="space-y-6" role="tabpanel">
      <div className="text-main text-[18px] md:text-[22px] font-bold">{activeCategory}</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceItem key={`${activeCategory}-${index}`} service={service} />
        ))}
      </div>
    </div>
  )
};

export default ServicesGrid;
