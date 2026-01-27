import { useMemo, useState } from 'react'
import { useForm, usePage } from '@inertiajs/react'
import { ChevronDown } from 'lucide-react'

export default function ParticipantReferralFormCard() {
  const [successMessage, setSuccessMessage] = useState('')
  const [submitError, setSubmitError] = useState('')
  const [touched, setTouched] = useState({
    first_name: false,
    last_name: false,
    referee_email: false,
    referee_contact: false,
    referee_position: false,
    referee_purpose: false,
    service: false,
  })

  const { data, setData, post, processing, errors, clearErrors, reset, recentlySuccessful } = useForm({
    first_name: '',
    last_name: '',
    referee_email: '',
    referee_contact: '',
    referee_position: '',
    referee_purpose: '',
    service: '',
  })

  const flash = usePage().props?.flash

  const clientErrors = useMemo(() => {
    const next = {}

    if (!data.first_name.trim()) next.first_name = 'First name is required.'
    if (!data.last_name.trim()) next.last_name = 'Last name is required.'

    const email = data.referee_email.trim()
    if (!email) next.referee_email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.referee_email = 'Enter a valid email address.'

    if (data.referee_contact.trim()) {
      if (!/^\d+$/.test(data.referee_contact)) next.referee_contact = 'Phone number must contain digits only.'
      else if (data.referee_contact.length < 10 || data.referee_contact.length > 13) {
        next.referee_contact = 'Phone number must be 10 to 13 digits.'
      }
    }

    return next
  }, [data])

  const canSubmit = Object.keys(clientErrors).length === 0

  return (
    <div className="max-w-[500px] m-auto bg-[#F3F4F6] rounded-3xl p-8 shadow-sm">
      <h3 className="text-[18px] md:text-[22px] font-bold text-gray-800">Participant Referral</h3>

      <form
        className="mt-6 space-y-4"
        method="post"
        onSubmit={(e) => {
          e.preventDefault()
          setTouched({
            first_name: true,
            last_name: true,
            referee_email: true,
            referee_contact: true,
            referee_position: true,
            referee_purpose: true,
            service: true,
          })
          setSubmitError('')
          setSuccessMessage('')
          if (!canSubmit) {
            setSubmitError('Please fix the highlighted fields and try again.')
            return
          }

          const referralUrl = typeof route === 'function' ? route('referral') : '/referral'

          post(referralUrl, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
              setSuccessMessage('Referral sent. We\'ll be in touch soon.')
              setTimeout(() => setSuccessMessage(''), 2500)
              setSubmitError('')
              setTouched({
                first_name: false,
                last_name: false,
                referee_email: false,
                referee_contact: false,
                referee_position: false,
                referee_purpose: false,
                service: false,
              })
              reset()
            },
            onError: () => {
              setSubmitError('Please review the highlighted fields and try again.')
            },
          })
        }}
      >
        <input
          value={data.first_name}
          name="first_name"
          onBlur={() => setTouched((s) => ({ ...s, first_name: true }))}
          onChange={(e) => {
            setData('first_name', e.target.value)
            setSubmitError('')
            setSuccessMessage('')
            clearErrors('first_name')
          }}
          className="w-full bg-white rounded-full border border-gray-200 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#0F6F75]"
          placeholder="First Name of Referee"
        />
        {(touched.first_name && (clientErrors.first_name || errors.first_name)) && (
          <div className="text-[12px] text-red-600 font-medium">{clientErrors.first_name || errors.first_name}</div>
        )}

        <input
          value={data.last_name}
          name="last_name"
          onBlur={() => setTouched((s) => ({ ...s, last_name: true }))}
          onChange={(e) => {
            setData('last_name', e.target.value)
            setSubmitError('')
            setSuccessMessage('')
            clearErrors('last_name')
          }}
          className="w-full bg-white rounded-full border border-gray-200 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#0F6F75]"
          placeholder="Last Name of Referee"
        />
        {(touched.last_name && (clientErrors.last_name || errors.last_name)) && (
          <div className="text-[12px] text-red-600 font-medium">{clientErrors.last_name || errors.last_name}</div>
        )}

        <input
          value={data.referee_email}
          name="referee_email"
          onBlur={() => setTouched((s) => ({ ...s, referee_email: true }))}
          onChange={(e) => {
            setData('referee_email', e.target.value)
            setSubmitError('')
            setSuccessMessage('')
            clearErrors('referee_email')
          }}
          className="w-full bg-white rounded-full border border-gray-200 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#0F6F75]"
          placeholder="Email Address of Referee"
        />
        {(touched.referee_email && (clientErrors.referee_email || errors.referee_email)) && (
          <div className="text-[12px] text-red-600 font-medium">{clientErrors.referee_email || errors.referee_email}</div>
        )}

        <input
          value={data.referee_contact}
          name="referee_contact"
          onBlur={() => setTouched((s) => ({ ...s, referee_contact: true }))}
          onChange={(e) => {
            setData('referee_contact', e.target.value.replace(/\D/g, ''))
            setSubmitError('')
            setSuccessMessage('')
            clearErrors('referee_contact')
          }}
          inputMode="numeric"
          pattern="[0-9]*"
          className="w-full bg-white rounded-full border border-gray-200 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#0F6F75]"
          placeholder="Contact Number of Referee"
        />
        {(touched.referee_contact && (clientErrors.referee_contact || errors.referee_contact)) && (
          <div className="text-[12px] text-red-600 font-medium">{clientErrors.referee_contact || errors.referee_contact}</div>
        )}

        <div className="relative">
          <select
            value={data.referee_position}
            name="referee_position"
            onBlur={() => setTouched((s) => ({ ...s, referee_position: true }))}
            onChange={(e) => {
              setData('referee_position', e.target.value)
              setSubmitError('')
              setSuccessMessage('')
              clearErrors('referee_position')
            }}
            className="w-full appearance-none bg-white rounded-full border border-gray-200 px-5 py-3 pr-12 text-[13px] text-gray-500 outline-none focus:ring-2 focus:ring-[#0F6F75]"
          >
            <option value="">Referee’s profession</option>
            <option value="Participant">Participant</option>
            <option value="Family / Carer">Family / Carer</option>
            <option value="Support Coordinator">Support Coordinator</option>
            <option value="Health Professional">Health Professional</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
        </div>
        {(touched.referee_position && errors.referee_position) && (
          <div className="text-[12px] text-red-600 font-medium">{errors.referee_position}</div>
        )}

        <div className="relative">
          <select
            value={data.referee_purpose}
            name="referee_purpose"
            onBlur={() => setTouched((s) => ({ ...s, referee_purpose: true }))}
            onChange={(e) => {
              setData('referee_purpose', e.target.value)
              setSubmitError('')
              setSuccessMessage('')
              clearErrors('referee_purpose')
            }}
            className="w-full appearance-none bg-white rounded-full border border-gray-200 px-5 py-3 pr-12 text-[13px] text-gray-500 outline-none focus:ring-2 focus:ring-[#0F6F75]"
          >
            <option value="">Purpose of making referral</option>
            <option value="Start services">Start services</option>
            <option value="Change provider">Change provider</option>
            <option value="Request information">Request information</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
        </div>
        {(touched.referee_purpose && errors.referee_purpose) && (
          <div className="text-[12px] text-red-600 font-medium">{errors.referee_purpose}</div>
        )}

        <div className="relative">
          <select
            value={data.service}
            name="service"
            onBlur={() => setTouched((s) => ({ ...s, service: true }))}
            onChange={(e) => {
              setData('service', e.target.value)
              setSubmitError('')
              setSuccessMessage('')
              clearErrors('service')
            }}
            className="w-full appearance-none bg-white rounded-full border border-gray-200 px-5 py-3 pr-12 text-[13px] text-gray-500 outline-none focus:ring-2 focus:ring-[#0F6F75]"
          >
            <option value="">Services looking for</option>
            <option value="Core Supports">Core Supports</option>
            <option value="Support Coordination">Support Coordination</option>
            <option value="Behaviour Support">Behaviour Support</option>
            <option value="Community Nursing">Community Nursing</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
        </div>
        {(touched.service && errors.service) && <div className="text-[12px] text-red-600 font-medium">{errors.service}</div>}

        <button
          type="submit"
          disabled={!canSubmit || processing}
          className="w-full h-[44px] rounded-full bg-gr text-white font-semibold text-[13px] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span className="inline-flex items-center justify-center gap-2">
            {processing && <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />}
            {processing ? 'SENDING…' : 'SEND NOW'}
          </span>
        </button>

        {(submitError || flash?.error) && <div className="text-[13px] text-red-700 font-semibold">{submitError || flash?.error}</div>}
        {(successMessage || flash?.success || recentlySuccessful) && (
          <div className="text-[13px] text-main font-semibold">
            {successMessage || flash?.success || 'Referral sent. We\'ll be in touch soon.'}
          </div>
        )}
      </form>
    </div>
  )
}
