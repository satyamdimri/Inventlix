import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us',   href: '#why-us' },
  { label: 'Process',  href: '#process' },
  { label: 'Clients',  href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F4F1EB]/90 backdrop-blur-md border-b border-[#D0CDC6]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-16 h-[68px] flex items-center justify-between">

        {/* ── Logo ── */}
        <a
          href="#"
          aria-label="Inventlix Home"
          className="font-display text-[1.55rem] tracking-[0.07em] text-[#0A0A0F] no-underline leading-none"
        >
          INVENT<span className="text-[#0057FF]">LIX</span>
        </a>

        {/* ── Desktop nav ── */}
        <ul className="hidden md:flex items-center gap-10" role="navigation">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[0.78rem] font-normal tracking-[0.06em] uppercase text-[#5A6478] hover:text-[#0057FF] transition-colors duration-200 font-['DM_Sans']"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:block">
          <a
            href="#consultation"
            id="nav-cta"
            className="font-mono-inv text-[0.75rem] font-bold tracking-[0.1em] uppercase text-white bg-[#0057FF] border-2 border-[#0057FF] hover:bg-white hover:text-[#0057FF] focus:bg-white focus:text-[#0057FF] focus:outline-none px-5 py-2.5 transition-all duration-300 inline-block"
          >
            Book a Call
          </a>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          className="md:hidden p-2 text-[#0A0A0F]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-[#F4F1EB] border-t border-[#D0CDC6] px-6 py-5 flex flex-col gap-5">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.8rem] tracking-[0.06em] uppercase text-[#5A6478] hover:text-[#0057FF] transition-colors font-['DM_Sans']"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#consultation"
            className="font-mono-inv text-[0.75rem] font-bold tracking-[0.1em] uppercase text-white bg-[#0057FF] border-2 border-[#0057FF] hover:bg-white hover:text-[#0057FF] px-5 py-3 text-center mt-1 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  )
}
