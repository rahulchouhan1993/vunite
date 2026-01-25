import { Link, usePage } from '@inertiajs/react'
import { useEffect, useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/unitelogo.png'
export const Header = () => {
  const { url } = usePage()
  const [isOpen, setIsOpen] = useState(false)

  const links = useMemo(
    () => [
      { href: '/', label: 'Home' },
      { href: '/services', label: 'Services' },
      { href: '/participant', label: 'Participant' },
      { href: '/referral', label: 'Make Referral' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/about-us', label: 'About Us' },
      { href: '/faq', label: 'FAQs' },
    ],
    []
  )

  useEffect(() => {
    setIsOpen(false)
  }, [url])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  return (
    <div className="bg-white sticky top-0 z-50">
      <header className="container m-auto bg-white py-4 px-5 lg:px-0 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <img src={logo} className="max-w-[160px] lg:max-w-[180px]" alt="V UNITE" />
        </Link>

        <nav className="hidden lg:flex gap-4 md:gap-2 xl:gap-6 text-sm md:text-[13px] xl:text-[16px] font-medium text-gray-500">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-teal-600 ${url === l.href ? 'text-teal-700' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="lg:hidden w-12 h-12 rounded-full  flex items-center justify-center text-gray-700"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={20} /> : <Menu className='text-main' size={30} />}
          </button>

          <button className="hidden lg:inline-flex btn bg-gr text-white text-sm px-6 py-3 rounded-[30px]">REGISTER YOUR INTEREST</button>
        </div>
      </header>

      <div className={`lg:hidden fixed inset-0 z-[60] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />

        <aside
          className={`absolute right-0 top-0 h-full w-[320px] max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="h-full flex flex-col">
            <div className="px-5 py-4 flex items-center justify-between border-b border-gray-100">
              <img src={logo} className="max-w-[140px]" alt="V UNITE" />
              <button
                type="button"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-4">
              <div className="flex flex-col gap-2 text-[15px] font-medium text-gray-800">
                {links.map((l) => (
                  <Link key={l.href} href={l.href} className="py-2" onClick={() => setIsOpen(false)}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="px-5 py-4 border-t border-gray-100">
              <button className="w-full btn bg-gr text-white text-sm px-6 py-3 rounded-[30px]">REGISTER YOUR INTEREST</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
