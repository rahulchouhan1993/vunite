import MainLayout from '../Layout/MainLayout';
import ApproachToCareSection from '../components/about/ApproachToCareSection';
import WhatMakesUsDifferentSection from '../components/about/WhatMakesUsDifferentSection';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/home/CTABanner';
import PageHeroSection from '../components/common/HeroSection';
import AboutWhoWeAre from '../components/about/AboutWhoWeAre';
import WhyChooseUs from '../components/home/WhyChooseUs';
import hero from '../assets/abouthero.png';

export default function About() {
    return (
        <MainLayout>
            <div className="min-h-screen">
                <PageHeroSection 
                banner={hero}
                    link='/'
                    title='Supporting People, Not Just Plans'
                    description='We don’t believe in one-size-fits-all solutions. Every person we support is different—and so is the care we provide.'
                 />
                <AboutWhoWeAre />
                <ApproachToCareSection />
                <WhatMakesUsDifferentSection />
                <WhyChooseUs />
                <Testimonials />
                <CTABanner />
            </div>
        </MainLayout>
    );
}