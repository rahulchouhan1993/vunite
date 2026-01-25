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

  return (
    <div className="bg-white sticky top-0 z-50">
      <header className="container m-auto bg-white py-4 px-5 lg:px-0 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <img src={logo} className="max-w-[160px] lg:max-w-[180px]" alt="V UNITE" />
        </Link>

        <nav className="hidden lg:flex gap-4 xl:gap-6 text-sm xl:text-[16px] font-medium text-gray-500">
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
            className="lg:hidden w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button className="hidden lg:inline-flex btn bg-gr text-white text-sm px-6 py-3 rounded-[30px]">REGISTER YOUR INTEREST</button>
        </div>
      </header>

      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="container m-auto px-5 py-4">
            <div className="flex flex-col gap-3 text-[15px] font-medium text-gray-700">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="py-2">
                  {l.label}
                </Link>
              ))}
            </div>

            <button className="mt-4 w-full btn bg-gr text-white text-sm px-6 py-3 rounded-[30px]">REGISTER YOUR INTEREST</button>
          </div>
        </div>
      )}
    </div>
  );
};
