import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us',   href: '#why-us' },
  { label: 'Process',  href: '#process' },
  { label: 'Clients',  href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-[#F4F1EB]/95 backdrop-blur-md border-b border-[#D0CDC6]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 h-[64px] sm:h-[68px] flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          aria-label="Inventlix Home"
          className="font-display text-[1.4rem] sm:text-[1.55rem] tracking-[0.07em] text-[#0A0A0F] no-underline leading-none shrink-0"
        >
          INVENT<span className="text-[#0057FF]">LIX</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10" role="navigation">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[0.75rem] font-normal tracking-[0.06em] uppercase text-[#5A6478] hover:text-[#0057FF] transition-colors duration-200"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#consultation"
            id="nav-cta"
            className="text-[0.75rem] font-bold tracking-[0.1em] uppercase text-white bg-[#0057FF] border-2 border-[#0057FF] hover:bg-white hover:text-[#0057FF] focus:bg-white focus:text-[#0057FF] focus:outline-none px-5 py-2.5 transition-all duration-300 inline-block"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-1 text-[#0A0A0F] touch-manipulation"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu — full-width dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#F4F1EB] border-t border-[#D0CDC6] px-5 sm:px-8 py-5 flex flex-col gap-1">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="py-3 text-[0.82rem] tracking-[0.06em] uppercase text-[#5A6478] hover:text-[#0057FF] transition-colors border-b border-[#D0CDC6]/50 last:border-0"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#consultation"
            className="mt-4 w-full text-center text-[0.8rem] font-bold tracking-[0.1em] uppercase text-white bg-[#0057FF] border-2 border-[#0057FF] hover:bg-white hover:text-[#0057FF] py-3.5 transition-all duration-300 touch-manipulation"
            style={{ fontFamily: 'Courier Prime, monospace' }}
            onClick={() => setMenuOpen(false)}
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  )
}
