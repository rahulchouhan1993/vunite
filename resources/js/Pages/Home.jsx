import React from 'react';
import MainLayout from '../Layout/MainLayout';
import HeroSection from '../components/home/HeroSection';
import ServicesGrid from '../components/home/ServicesGrid';
import WhoWeSupport from '../components/home/WhoWeSupport';
import RealStories from '../components/home/RealStories';
import StatisticsGrid from '../components/home/StatisticsGrid';
import HowItWorks from '../components/home/HowItWorks';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/home/CTABanner';

const LandingPage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ServicesGrid />
      <WhoWeSupport />
      <RealStories />
      <StatisticsGrid />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </MainLayout>
  );
};

export default LandingPage;
