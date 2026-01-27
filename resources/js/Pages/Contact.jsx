import { useMemo, useState } from 'react'
import { Link } from '@inertiajs/react'
import { CalendarDays, Mail, Phone } from 'lucide-react'
import MainLayout from '../Layout/MainLayout'
import contactImage from '../assets/contact.png'
import logo from '../assets/siteicon.png'
import { router } from '@inertiajs/react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
 
  const contact = useMemo(
    () => ({
      phoneDisplay: '+61 449 799 946',
      phoneTel: '+61449799946',
      email: 'info@vunitesupportservices.com',
    }),
    []
  )

  const canSubmit = form.name.trim() && form.email.trim() && form.message.trim()

  return (
    <MainLayout>
      <div className="min-h-screen">
        <section className="container m-auto px-5 lg:px-0 pt-16 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="font-recoleta text-main text-[16px] md:text-[22px] font-bold">Get in touch</div>
              <h1 className="mt-2 text-[44px] leading-[48px] lg:text-[54px] lg:leading-[56px] font-bold text-pink">Contact us</h1>
              <p className="mt-4 text-[14px] lg:text-[15px] leading-relaxed text-gray-500 max-w-[540px]">
               Have any questions? We’re here to help! Simply leave us a message using the form on the right, or give us a call to speak to one of our friendly team members.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-4">
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="w-full bg-[#F4F6F7] rounded-full px-3 py-3 flex items-center gap-4 text-gray-700 hover:bg-[#EEF2F4]"
                >
                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <Phone className="w-5 h-5 text-pink" />
                  </span>
                  <span className="text-[14px] font-semibold">{contact.phoneDisplay}</span>
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="w-full bg-[#F4F6F7] rounded-full px-3 py-3 flex items-center gap-4 text-gray-700 hover:bg-[#EEF2F4]"
                >
                  <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <Mail className="w-5 h-5 text-main" />
                  </span>
                  <span className="text-[14px] font-semibold break-all">{contact.email}</span>
                </a>

                <Link
                  href="#"
                  className="w-full h-[60px] rounded-full bg-gr text-white font-semibold text-[14px] flex items-center justify-center gap-3"
                >
                  <CalendarDays className="w-5 h-5" />
                  Make an Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container m-auto mt-6 px-5 lg:px-0 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6">
              <div className="bg-[#F3F4F6]   rounded-3xl p-8">
                <h2 className="text-[18px] font-bold text-gray-800">Write Us</h2>
                <form
                  className="mt-6 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (!canSubmit) return

                    router.post(route('contact'), form, {
                      onSuccess: () => {
                        setSubmitted(true)
                        setTimeout(() => setSubmitted(false), 2500)
                        setForm({ name: '', phone: '', email: '', message: '' })
                      },
                    })
                  }}
                  method='post'
                >
                  <input
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    className="w-full bg-white rounded-full border border-gray-200 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#0F6F75]"
                    placeholder="Name"
                    name="name"
                  />
                  <input
                    value={form.phone}
                    onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                    className="w-full bg-white rounded-full border border-gray-200 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#0F6F75]"
                    placeholder="Phone"
                    name="phone"
                  />
                  <input
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    className="w-full bg-white rounded-full border border-gray-200 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#0F6F75]"
                    placeholder="Email"
                    name="email"
                  />
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                    className="w-full bg-white rounded-[22px] border border-gray-200 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#0F6F75] min-h-[120px] resize-none"
                    placeholder="Message"
                    name="message"
                  />

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className={`w-full h-[44px] rounded-full bg-gr text-white font-semibold text-[13px] disabled:opacity-60 disabled:cursor-not-allowed`}
                  >
                    SEND NOW
                  </button>

                  {submitted && <div className="text-[13px] text-main font-semibold">Message sent. We’ll be in touch soon.</div>}
                </form>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="w-full max-w-full lg:max-w-[400px] lg:ms-auto relative rounded-[40px] overflow-hidden">
                <img src={contactImage} alt="Caregiver supporting a participant" className="w-full h-full object-cover" />
                <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-sm">
                  <img src={logo} alt="V Unite" className="w-12 h-12" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
