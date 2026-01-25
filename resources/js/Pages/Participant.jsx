import React from 'react';
import ParticipantRightsSection from '../components/participant/ParticipantRightsSection';
import ParticipantSafeguardingSection from '../components/participant/ParticipantSafeguardingSection';
import PageHeroSection from '../components/common/HeroSection';
import banner from '../assets/participant.png';
import MainLayout from '../Layout/MainLayout';
import CTABanner from '../components/home/CTABanner';

export default function Participant() {
    return (
        <MainLayout>
            <div className="min-h-screen">
                <PageHeroSection
                banner={banner} width='max-w-[550px]'
                description={'You have the right to feel safe, heard, and supported at all times.'}
                title={<>
                Your Rights.
                <br></br>
                Your Choice.
                <br></br>
                Your Safety.
                </>} 
                />
                <ParticipantRightsSection />
                <ParticipantSafeguardingSection />
                <CTABanner />
            </div>
        </MainLayout>
    );
}