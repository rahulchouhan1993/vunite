import MainLayout from '../Layout/MainLayout';
import { Head, Link } from '@inertiajs/react';

export default function Privacy() {
    const lastUpdated = '29 January 2026';
    const supportEmail = 'info@vunitesupportservices.com.au';
    const supportPhone = '+61 449 799 946';
    const supportAddress = '68 Hanorah Avenue, Virginia, 5120';

    return (
        <MainLayout>
            <Head title="Privacy Policy | V Unite Support Services" />
            <div className="min-h-screen bg-gray-50">
                <div className="bg-white border-b border-gray-100">
                    <div className="container mx-auto px-5 lg:px-0 py-10 sm:py-14">
                        <div className="">
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#E4EEED] px-4 py-2 text-main text-sm font-medium">
                                Privacy Policy
                            </div>
                            <h1 className="mt-5 font-recoleta text-3xl sm:text-4xl font-bold text-main tracking-tight">
                                How we collect, use, and protect your information
                            </h1>
                            <p className="mt-4 text-gray-600 text-[15px] sm:text-[16px] leading-relaxed max-w-3xl">
                                This Privacy Policy explains how V Unite Support Services handles personal information when you visit our website or contact us about our NDIS support services.
                            </p>
                            <div className="mt-4 text-sm text-gray-500">
                                Last updated: <span className="font-medium text-gray-700">{lastUpdated}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-5 lg:px-0 py-10 sm:py-14">
                    <div className="c">
                        <div className="space-y-8">
                                <section id="info-we-collect" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Information We Collect</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        We collect information you provide directly to us and limited information that is collected automatically when you use our website.
                                    </p>
                                    <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-600">
                                        <li>
                                            Contact information such as your name, email address, phone number, and the details you share in your enquiry.
                                        </li>
                                        <li>
                                            Referral and service-related details you provide through our forms (for example, the type of support you’re seeking).
                                        </li>
                                        <li>
                                            Basic technical information such as browser type, device information, and pages visited (where enabled by the platform or analytics tools).
                                        </li>
                                    </ul>
                                </section>

                                <section id="how-we-use" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">How We Use Information</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        We use personal information to communicate with you, provide services, and improve our website and support experience.
                                    </p>
                                    <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-600">
                                        <li>Respond to enquiries and referrals.</li>
                                        <li>Coordinate support services, scheduling, and service delivery communications.</li>
                                        <li>Maintain internal records and meet legal or regulatory obligations where applicable.</li>
                                        <li>Improve our website content, accessibility, and user experience.</li>
                                    </ul>
                                </section>

                                <section id="sharing" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Sharing and Disclosure</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        We do not sell your personal information. We may share information in limited circumstances, such as:
                                    </p>
                                    <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-600">
                                        <li>With service providers who help us operate our website or communications systems.</li>
                                        <li>When required by law, regulation, or a lawful request.</li>
                                        <li>
                                            With your consent, for example to coordinate services with relevant stakeholders in your support network.
                                        </li>
                                    </ul>
                                </section>

                                <section id="security" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Security</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        We take reasonable steps to protect personal information from loss, misuse, unauthorised access, disclosure, alteration, or destruction. No method of transmission or storage is completely secure.
                                    </p>
                                </section>

                                <section id="retention" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Data Retention</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        We retain personal information only for as long as necessary to respond to your enquiry, deliver services, meet administrative needs, or comply with legal obligations.
                                    </p>
                                </section>

                                <section id="cookies" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Cookies and Analytics</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        Our website may use cookies or similar technologies to provide core functionality and understand how visitors use the site. You can manage cookies through your browser settings.
                                    </p>
                                </section>

                                <section id="your-rights" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Your Choices and Rights</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        You may request access to, correction of, or deletion of the personal information we hold about you, subject to legal and operational requirements.
                                    </p>
                                    <div className="mt-4 text-gray-600 leading-relaxed">
                                        To make a request, please contact us using the details in the <a className="text-main hover:underline underline-offset-4" href="#contact">Contact Us</a> section.
                                    </div>
                                </section>

                                <section id="children" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Children's Privacy</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        Our website is not intended for children to use without a parent or guardian. If you believe a child has provided us information without appropriate consent, please contact us.
                                    </p>
                                </section>

                                <section id="changes" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Changes to This Policy</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        We may update this policy from time to time. When we do, we will update the “Last updated” date at the top of this page.
                                    </p>
                                </section>

                                <section id="contact" className="scroll-mt-28 ">
                                    <h2 className="text-xl sm:text-2xl font-bold text-main">Contact Us</h2>
                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        If you have any questions about this Privacy Policy or how your information is handled, contact V Unite Support Services:
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

                                    <div className="mt-6 text-sm text-gray-500">
                                        Looking for our service terms? Read our{' '}
                                        <Link href="/terms" className="text-main hover:underline underline-offset-4">
                                            Terms & Conditions
                                        </Link>
                                        .
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
