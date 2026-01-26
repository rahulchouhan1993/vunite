import React from 'react';
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
  return (
    <MainLayout>
      <HomeHeroSection />
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
