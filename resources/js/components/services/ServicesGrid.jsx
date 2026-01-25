import { ArrowRight } from 'lucide-react';
import ServiceItem from '../home/ServiceItem';
import bg from '../../assets/service.png';

const ServicesGrid = () => {
  const services = [
    {
      title: "Support Coordination",
      img: bg,
      desc: "Supporting you to understand your NDIS plan and budget, identify services and providers, and implement your plan effectively."
    },
    {
      title: "Support Coordination", 
      img: bg,
      desc: "Helping you navigate your NDIS journey including service linkages, plan monitoring, and goal achievement."
    },
    {
      title: "Support Coordination",
      img: bg,
      desc: "Assisting you to strengthen your ability to coordinate supports and access the community."
    },
    {
      title: "Support Coordination",
      img: bg,
      desc: "Improve your capacity to manage supports, build skills, and make informed decisions."
    },
    {
      title: "Support Coordination",
      img: bg,
      desc: "Helping you identify providers, negotiate service agreements, and monitor progress."
    },
    {
      title: "Support Coordination",
      img: bg,
      desc: "Integrates clinical and allied health linkages with culturally informed support."
    },
    {
      title: "Support Coordination",
      img: bg,
      desc: "Helping you connect with local services, manage budgets, and review goals regularly."
    },
    {
      title: "Support Coordination",
      img: bg,
      desc: "We help you understand your plan, develop strategies, and coordinate providers."
    },
    {
      title: "Support Coordination",
      img: bg,
      desc: "Navigating funding categories and linking you with the right supports for your needs."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
           <ServiceItem key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;