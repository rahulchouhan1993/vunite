import MainLayout from '../Layout/MainLayout'
import PageHeroSection from '../components/common/HeroSection'
import ParticipantsFamiliesSection from '../components/referral/ParticipantsFamiliesSection'
import ParticipantReferralFormCard from '../components/referral/ParticipantReferralFormCard'
import CTABanner from '../components/home/CTABanner'
import banner from '../assets/refferal.png'

export default function Referral() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        <PageHeroSection
          banner={banner}
          width="max-w-[700px]"
          description="Our goal is to provide the right support, at the right time, in the right way."
          title={
            <>
              Making Referrals Simple,
              <br />
              Respectful & Fast
            </>
          }
        />
        <ParticipantsFamiliesSection rightSlot={<ParticipantReferralFormCard />} />
        <CTABanner />
      </div>
    </MainLayout>
  )
}
