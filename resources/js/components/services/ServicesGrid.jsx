import ServiceItem from '../home/ServiceItem'
import bg1 from '../../assets/bg1.png'
import bg2 from '../../assets/bg2.png'
import bg3 from '../../assets/bg3.png'
import bg4 from '../../assets/bg4.png'
import bg5 from '../../assets/bg5.png'
import bg6 from '../../assets/bg6.png'
import bg7 from '../../assets/bg7.png'
import bg8 from '../../assets/bg8.png'
import bg9 from '../../assets/bg9.png'
import bg10 from '../../assets/bg10.png'
import bg11 from '../../assets/bg11.png'
import bg12 from '../../assets/bg12.png'
import bg13 from '../../assets/bg13.png'
import bg14 from '../../assets/bg14.png'
import bg15 from '../../assets/bg15.png'
import bg16 from '../../assets/bg16.png'
import bg17 from '../../assets/bg17.png'
import bg18 from '../../assets/bg18.png'
const servicesByCategory = {
  'Core Supports': [
    {
      title: 'Daily Living Support',
      img: bg1,
      desc: 'Help with everyday tasks at home and in the community to support your independence.',
    },
    {
      title: 'Community Access',
      img: bg2,
      desc: 'Support to build confidence, connect socially, and participate in community activities.',
    },
    {
      title: 'Assistance with Self-Care',
      img: bg3,
      desc: 'Personal care and routine support delivered respectfully and safely.',
    },
  ],
  'High Intensity & Community Nursing Care': [
    {
      title: 'Complex Personal Care',
      img: bg4,
      desc: 'High intensity daily support delivered by trained staff following your care plan.',
    },
    {
      title: 'Community Nursing',
      img: bg5,
      desc: 'Nursing services supporting health needs with coordinated clinical oversight.',
    },
    {
      title: 'Medication Support',
      img: bg6,
      desc: 'Assistance to safely manage medication routines as outlined by your healthcare team.',
    },
  ],
  'Specialist Disability Accommodation (SDA)': [
    {
      title: 'SDA Support',
      img: bg7,
      desc: 'Support within suitable accommodation that promotes safety, accessibility, and quality of life.',
    },
    {
      title: 'Tenancy Support',
      img: bg8,
      desc: 'Help to build skills and confidence to maintain your home and daily routines.',
    },
    {
      title: 'Independent Living Skills',
      img: bg9,
      desc: 'Practical support to strengthen your independence at home and in the community.',
    },
  ],
  'Behaviour Support': [
    {
      title: 'Positive Behaviour Support',
      img: bg10,
      desc: 'Evidence-informed strategies that reduce barriers and support your goals and wellbeing.',
    },
    {
      title: 'Behaviour Plan Support',
      img: bg11,
      desc: 'Implementing agreed supports with consistent communication across your care team.',
    },
    {
      title: 'Skill Building',
      img: bg12,
      desc: 'Support to build coping strategies and daily skills for long-term outcomes.',
    },
  ],
  'Specialist Support Coordination': [
    {
      title: 'Support Coordination',
      img: bg13,
      desc: 'Supporting you to understand your plan, connect services, and move towards your goals.',
    },
    {
      title: 'Complex Support Coordination',
      img: bg14,
      desc: 'Specialist coordination for complex needs, risk management, and multi-provider collaboration.',
    },
    {
      title: 'Plan Implementation',
      img: bg15,
      desc: 'Help to activate supports, monitor progress, and adjust services when needs change.',
    },
  ],
  'Future Services': [
    {
      title: 'Coming Soon',
      img: bg16,
      desc: 'We are expanding our services. Check back soon for new support options.',
    },
    {
      title: 'More Supports',
      img: bg17,
      desc: 'New programs and services are in development to better meet community needs.',
    },
    {
      title: 'Stay Updated',
      img: bg18,
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
