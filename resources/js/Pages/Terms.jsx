import MainLayout from '../Layout/MainLayout';
import { Head, Link } from '@inertiajs/react';

export default function Terms() {
    const lastUpdated = '29 January 2026';
    const supportEmail = 'info@vunitesupportservices.com.au';
    const supportPhone = '+61 449 799 946';
    const supportAddress = '68 Hanorah Avenue, Virginia, 5120';

    return (
        <MainLayout>
            <Head title="Terms & Conditions | V Unite Support Services" />
            <div className="min-h-screen bg-gray-50">
                <div className="bg-white border-b border-gray-100">
                    <div className="container mx-auto px-5 lg:px-0 py-10 sm:py-14">
                        <div className="">
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#FDE7EA] px-4 py-2 text-pink text-sm font-medium">
                                Terms & Conditions
                            </div>
                            <h1 className="mt-5 font-recoleta text-3xl sm:text-4xl font-bold text-main tracking-tight">
                                Terms for using our website and contacting V Unite
                            </h1>
                            <p className="mt-4 text-gray-600 text-[15px] sm:text-[16px] leading-relaxed max-w-3xl">
                                These Terms & Conditions apply to your use of this website and your interactions with V Unite Support Services through online enquiries and referrals.
                            </p>
                            <div className="mt-4 text-sm text-gray-500">
                                Last updated: <span className="font-medium text-gray-700">{lastUpdated}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-5 lg:px-0 py-10 sm:py-14">
                    <div className="">
                        <div className="space-y-8">
                                <section id="about" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">About These Terms</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        By accessing or using this website, you agree to these Terms & Conditions. If you do not agree, please do not use the website.
                                    </p>
                                </section>

                                <section id="services" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Our Services</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        V Unite Support Services provides disability support services, including NDIS-related supports. Information on this website is general in nature and may change.
                                    </p>
                                </section>

                                <section id="website-use" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Website Use</h2>
                                    <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-600">
                                        <li>Do not misuse the website, attempt to gain unauthorised access, or disrupt the service.</li>
                                        <li>Do not upload or submit unlawful, harmful, or misleading information.</li>
                                        <li>We may update, suspend, or remove website content at any time.</li>
                                    </ul>
                                </section>

                                <section id="enquiries" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Enquiries and Referrals</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        When you submit an enquiry or referral, you agree that the information you provide is accurate to the best of your knowledge and that you have appropriate permission to provide it.
                                    </p>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        We will use the details you provide to respond and, where relevant, to coordinate services. For more information about how we handle personal data, view our{' '}
                                        <Link href="/privacy" className="text-main hover:underline underline-offset-4">
                                            Privacy Policy
                                        </Link>
                                        .
                                    </p>
                                </section>

                                <section id="responsibilities" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Your Responsibilities</h2>
                                    <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-600">
                                        <li>Provide accurate and current information when contacting us.</li>
                                        <li>Engage respectfully with our staff and service providers.</li>
                                        <li>Follow any reasonable safety directions during service delivery.</li>
                                    </ul>
                                </section>

                                <section id="third-parties" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Third-Party Links</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        This website may include links to third-party websites. We are not responsible for their content, security, or privacy practices.
                                    </p>
                                </section>

                                <section id="disclaimers" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Disclaimers</h2>
                                    <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-600">
                                        <li>Website content is provided for general information and does not constitute professional advice.</li>
                                        <li>We do not guarantee uninterrupted or error-free access to the website.</li>
                                        <li>Service availability may vary by location and capacity.</li>
                                    </ul>
                                </section>

                                <section id="liability" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Limitation of Liability</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        To the maximum extent permitted by law, V Unite Support Services is not liable for any indirect, incidental, or consequential loss arising from your use of this website.
                                    </p>
                                </section>

                                <section id="ip" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Intellectual Property</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        The website, branding, text, and design are owned by or licensed to V Unite Support Services. You may view and print pages for personal use, but you must not copy or reproduce content for commercial use without permission.
                                    </p>
                                </section>

                                <section id="changes" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Changes to These Terms</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        We may update these Terms & Conditions from time to time. When we do, we will update the “Last updated” date at the top of this page.
                                    </p>
                                </section>

                                <section id="law" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Governing Law</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        These terms are governed by the laws of South Australia, Australia, and any disputes will be subject to the jurisdiction of the courts in that region.
                                    </p>
                                </section>

                                <section id="contact" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Contact Us</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        If you have any questions about these Terms & Conditions, contact us:
                                    </p>
                                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="rounded-xl bg-gray-50 pt-4">
                                            <div className="text-gray-800 font-semibold">Email</div>
                                            <a className="mt-2 block text-main hover:underline underline-offset-4" href={`mailto:${supportEmail}`}>
                                                {supportEmail}
                                            </a>
                                        </div>
                                        <div className="rounded-xl bg-gray-50 pt-4">
                                            <div className="text-gray-800 font-semibold">Phone</div>
                                            <a
                                                className="mt-2 block text-main hover:underline underline-offset-4"
                                                href={`tel:${supportPhone.replace(/\s/g, '')}`}
                                            >
                                                {supportPhone}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="mt-6 rounded-xl bg-gray-50 pt-4">
                                        <div className="text-gray-800 font-semibold">V Unite Support Services</div>
                                        <div className="mt-2 text-sm text-gray-600 leading-relaxed">{supportAddress}</div>
                                        <div className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:gap-6">
                                            <div className="text-gray-700">
                                                <span className="text-gray-500">Email: </span>
                                                <a className="text-main hover:underline underline-offset-4" href={`mailto:${supportEmail}`}>
                                                    {supportEmail}
                                                </a>
                                            </div>
                                            <div className="text-gray-700">
                                                <span className="text-gray-500">Phone: </span>
                                                <a
                                                    className="text-main hover:underline underline-offset-4"
                                                    href={`tel:${supportPhone.replace(/\s/g, '')}`}
                                                >
                                                    {supportPhone}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
        </MainLayout>
    );
}
