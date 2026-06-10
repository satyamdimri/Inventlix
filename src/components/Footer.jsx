import { Mail } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Cloud Infrastructure', href: '#services' },
    { label: 'AI Agent Development', href: '#services' },
    { label: 'IT Hardware Solutions', href: '#services' },
    { label: 'AI Training Programs',  href: '#services' },
  ],
  Company: [
    { label: 'About',   href: '#' },
    { label: 'Contact', href: '#consultation' },
  ],
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0A0A0F] border-t-[3px] border-[#0057FF]"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-10 sm:pt-14 pb-8 sm:pb-10">

        {/* Grid — stacks on mobile, 3-col on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <a
              href="#"
              className="font-display text-[1.4rem] sm:text-[1.5rem] tracking-[0.07em] text-[#F4F1EB] no-underline leading-none block mb-3 sm:mb-4"
              aria-label="Inventlix Home"
            >
              INVENT<span className="text-[#0057FF]">LIX</span>
            </a>
            <p
              className="text-[0.82rem] leading-[1.65] font-light max-w-[30ch]"
              style={{ color: 'rgba(244,241,235,0.4)' }}
            >
              Enterprise cloud, AI, and technology services — built for businesses that need results.
            </p>
            <a
              href="mailto:connect@inventlix.com"
              className="mt-4 flex items-center gap-2 text-[0.78rem] hover:text-[#0057FF] transition-colors duration-200"
              style={{ color: 'rgba(244,241,235,0.35)' }}
            >
              <Mail size={13} /> connect@inventlix.com
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3
                className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#F4F1EB] mb-4 sm:mb-5"
                style={{ fontFamily: 'Courier Prime, monospace' }}
              >
                {group}
              </h3>
              <ul className="space-y-2.5 sm:space-y-3" role="list">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[0.82rem] sm:text-[0.83rem] font-light hover:text-[#0057FF] transition-colors duration-200"
                      style={{ color: 'rgba(244,241,235,0.4)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="border-t pt-6 sm:pt-8 flex items-center justify-center"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p className="text-[0.7rem] sm:text-[0.72rem]" style={{ color: 'rgba(244,241,235,0.25)' }}>
            © {new Date().getFullYear()} Inventlix. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
