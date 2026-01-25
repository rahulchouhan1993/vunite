import MainLayout from '../Layout/MainLayout';
import ServicesSidebar from '../components/services/ServicesSidebar';
import ServicesGrid from '../components/services/ServicesGrid';
import HowItWorks from '../components/home/HowItWorks';
import CTABanner from '../components/home/CTABanner';
import PageHeroSection from '../components/common/HeroSection';
import banner from '../assets/services-bg.png';

export default function Services() {
    return (
        <MainLayout>
            <div className="min-h-screen">
                <PageHeroSection
                banner={banner} width='max-w-[550px]'
                description={'Whether you need everyday assistance or complex care, our experienced team is here to support you—every step of the way.'}
                title={<>Flexible NDIS Support, <br></br>Built Around You</>} 
                />
                    <section className="py-6 md:py-20 bg-gray-50">
                        <div className="container mx-auto px-5 lg:px-0">
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                                {/* Sidebar */}
                                <div className="lg:col-span-1">
                                    <ServicesSidebar />
                                </div>
                                
                                {/* Services Grid */}
                                <div className="lg:col-span-3">
                                    <ServicesGrid />
                                </div>
                            </div>
                        </div>
                    </section>
                <HowItWorks />
                <CTABanner />
            </div>
        </MainLayout>
    );
}
