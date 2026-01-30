import React, { useEffect } from 'react';
import MainLayout from '../Layout/MainLayout';
import HomeHeroSection from '../components/home/HomeHeroSection';
import ServicesGrid from '../components/home/ServicesGrid';
import WhoWeSupport from '../components/home/WhoWeSupport';
import RealStories from '../components/home/RealStories';
import StatisticsGrid from '../components/home/StatisticsGrid';
import HowItWorks from '../components/home/HowItWorks';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/home/CTABanner';

const LandingPage = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash
      if (!hash) return
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (!el) return
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 0)
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  return (
    <MainLayout>
      <HomeHeroSection />
      <ServicesGrid />
      <div id="who-we-support" className="scroll-mt-28">
        <WhoWeSupport />
      </div>
      <RealStories />
      <StatisticsGrid />
      <div id="how-it-works" className="scroll-mt-28">
        <HowItWorks />
      </div>
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </MainLayout>
  );
};

export default LandingPage;
