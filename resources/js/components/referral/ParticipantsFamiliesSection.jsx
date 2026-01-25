import { useState } from 'react'

export default function ParticipantsFamiliesSection({ rightSlot }) {
  const chips = [
    'NDIS participants',
    'Families and carers',
    'Support coordinators',
    'Plan managers',
    'Health and allied health professionals',
    'Community organisations',
  ]

  const [selected, setSelected] = useState(null)

  return (
    <section aria-labelledby="participants-families-title" className="container m-auto px-5 lg:px-0 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-6">
          <h2 id="participants-families-title" className="text-main text-[22px] lg:text-[26px] font-bold">
            For participants & families
          </h2>
          <p className="mt-3 text-[14px] lg:text-[15px] leading-relaxed text-gray-500 max-w-[560px]">
            At V Unite we make the referral process easy and transparent. Whether you are a support coordinator, health
            professional, family member, or participant, we work closely with you to ensure supports begin smoothly and
            without unnecessary delays.
          </p>

          <div className="mt-7">
            <p className="text-main text-[16px] lg:text-[18px] font-semibold">Who Can Make a Referral?</p>
            <p className="mt-2 text-[13px] text-gray-500">Referrals can be made by:</p>

            <div role="list" aria-label="Referral makers" className="mt-4 flex flex-wrap gap-3">
              {chips.map((chip, idx) => {
                const isActive = selected === idx
                return (
                  <button
                    key={chip}
                    type="button"
                    role="listitem"
                    aria-pressed={isActive}
                    onClick={() => setSelected(isActive ? null : idx)}
                    className={` shadow-[1px_1px_20px_rgba(0,0,0,0.2)] py-[12px] px-[14px] rounded-[13px] text-[14px] transition-colors  
                         bg-[#F4F6F7] text-[#2F3A3F] hover:bg-[#E8EEF0]  
                    `}
                  >
                    {chip}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {rightSlot && <div className="lg:col-span-6">{rightSlot}</div>}
      </div>
    </section>
  )
}
