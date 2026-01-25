import { ChevronDown } from 'lucide-react'

export default function ParticipantReferralFormCard() {
  return (
    <div className="max-w-[500px] m-auto bg-[#F3F4F6] rounded-3xl p-8 shadow-sm">
      <h3 className="text-[18px] font-bold text-gray-800">Participant Referral</h3>

      <form className="mt-6 space-y-4">
        <input className="w-full bg-white rounded-full border border-gray-200 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#0F6F75]" placeholder="First Name of Referee" />
        <input className="w-full bg-white rounded-full border border-gray-200 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#0F6F75]" placeholder="Last Name of Referee" />
        <input className="w-full bg-white rounded-full border border-gray-200 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#0F6F75]" placeholder="Email Address of Referee" />
        <input className="w-full bg-white rounded-full border border-gray-200 px-5 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#0F6F75]" placeholder="Contact Number of Referee" />

        <div className="relative">
          <select className="w-full appearance-none bg-white rounded-full border border-gray-200 px-5 py-3 pr-12 text-[13px] text-gray-500 outline-none focus:ring-2 focus:ring-[#0F6F75]">
            <option>Referee’s profession</option>
            <option>Participant</option>
            <option>Family / Carer</option>
            <option>Support Coordinator</option>
            <option>Health Professional</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
        </div>

        <div className="relative">
          <select className="w-full appearance-none bg-white rounded-full border border-gray-200 px-5 py-3 pr-12 text-[13px] text-gray-500 outline-none focus:ring-2 focus:ring-[#0F6F75]">
            <option>Purpose of making referral</option>
            <option>Start services</option>
            <option>Change provider</option>
            <option>Request information</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
        </div>

        <div className="relative">
          <select className="w-full appearance-none bg-white rounded-full border border-gray-200 px-5 py-3 pr-12 text-[13px] text-gray-500 outline-none focus:ring-2 focus:ring-[#0F6F75]">
            <option>Services looking for</option>
            <option>Core Supports</option>
            <option>Support Coordination</option>
            <option>Behaviour Support</option>
            <option>Community Nursing</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
        </div>

        <button type="button" className="w-full h-[44px] rounded-full bg-gr text-white font-semibold text-[13px]">
          SEND NOW
        </button>
      </form>
    </div>
  )
}
