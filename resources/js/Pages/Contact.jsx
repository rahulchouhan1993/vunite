import { useMemo, useState } from 'react'
import { Link, useForm } from '@inertiajs/react'
import { CalendarDays, Mail, Phone } from 'lucide-react'
import MainLayout from '../Layout/MainLayout'
import contactImage from '../assets/contact.png'
import logo from '../assets/siteicon.png'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [touched, setTouched] = useState({ name: false, phone: false, email: false, message: false })

  const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
 
  const contact = useMemo(
    () => ({
      phoneDisplay: '+61 449 799 946',
      phoneTel: '+61449799946',
      email: 'info@vunitesupportservices.com.au',
    }),
    []
  )

  const clientErrors = useMemo(() => {
    const next = {}

    if (!data.name.trim()) next.name = 'Name is required.'

    const email = data.email.trim()
    if (!email) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address.'

    if (data.phone.trim()) {
      if (!/^\d+$/.test(data.phone)) next.phone = 'Phone number must contain digits only.'
      else if (data.phone.length < 10 || data.phone.length > 13) next.phone = 'Phone number must be 10 to 13 digits.'
    }

    if (!data.message.trim()) next.message = 'Message is required.'

    return next
  }, [data])

  const canSubmit = Object.keys(clientErrors).length === 0

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
                    setTouched({ name: true, phone: true, email: true, message: true })
                    setSubmitError('')
                    if (!canSubmit) {
                      setSubmitError('Please fix the highlighted fields and try again.')
                      return
                    }
                    const contactUrl = typeof route === 'function' ? route('contact') : '/contact-us'

                    post(contactUrl, {
                      preserveScroll: true,
                      preserveState: true,
                      onSuccess: () => {
                        setSubmitted(true)
                        setTimeout(() => setSubmitted(false), 2500)
                        setTouched({ name: false, phone: false, email: false, message: false })
                        setSubmitError('')
                        reset()
                      },
                      onError: () => {
                        setSubmitError('Please review the highlighted fields and try again.')
                      },
                    })
                  }}
                  method='post'
                >
                  <input
                    value={data.name}
                    onBlur={() => setTouched((s) => ({ ...s, name: true }))}
                    onChange={(e) => {
                      setData('name', e.target.value)
                      setSubmitError('')
                      clearErrors('name')
                    }}
                    className="w-full bg-white rounded-full border border-gray-200 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#0F6F75]"
                    placeholder="Name"
                    name="name"
                  />
                  {(touched.name && (clientErrors.name || errors.name)) && (
                    <div className="text-[12px] text-red-600 font-medium">{clientErrors.name || errors.name}</div>
                  )}
                  <input
                    value={data.phone}
                    onBlur={() => setTouched((s) => ({ ...s, phone: true }))}
                    onChange={(e) => {
                      setData('phone', e.target.value.replace(/\D/g, ''))
                      setSubmitError('')
                      clearErrors('phone')
                    }}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    className="w-full bg-white rounded-full border border-gray-200 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#0F6F75]"
                    placeholder="Phone"
                    name="phone"
                  />
                  {(touched.phone && (clientErrors.phone || errors.phone)) && (
                    <div className="text-[12px] text-red-600 font-medium">{clientErrors.phone || errors.phone}</div>
                  )}
                  <input
                    value={data.email}
                    onBlur={() => setTouched((s) => ({ ...s, email: true }))}
                    onChange={(e) => {
                      setData('email', e.target.value)
                      setSubmitError('')
                      clearErrors('email')
                    }}
                    className="w-full bg-white rounded-full border border-gray-200 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#0F6F75]"
                    placeholder="Email"
                    name="email"
                  />
                  {(touched.email && (clientErrors.email || errors.email)) && (
                    <div className="text-[12px] text-red-600 font-medium">{clientErrors.email || errors.email}</div>
                  )}
                  <textarea
                    value={data.message}
                    onBlur={() => setTouched((s) => ({ ...s, message: true }))}
                    onChange={(e) => {
                      setData('message', e.target.value)
                      setSubmitError('')
                      clearErrors('message')
                    }}
                    className="w-full bg-white rounded-[22px] border border-gray-200 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#0F6F75] min-h-[120px] resize-none"
                    placeholder="Message"
                    name="message"
                  />
                  {(touched.message && (clientErrors.message || errors.message)) && (
                    <div className="text-[12px] text-red-600 font-medium">{clientErrors.message || errors.message}</div>
                  )}

                  <button
                    type="submit"
                    disabled={!canSubmit || processing}
                    className={`w-full h-[44px] rounded-full bg-gr text-white font-semibold text-[13px] disabled:opacity-60 disabled:cursor-not-allowed`}
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      {processing && <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />}
                      {processing ? 'SENDING…' : 'SEND NOW'}
                    </span>
                  </button>

                  {submitError && <div className="text-[13px] text-red-700 font-semibold">{submitError}</div>}
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
