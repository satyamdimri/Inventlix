import { Mail } from 'lucide-react'

// Simplified footer — only real, useful links kept
const footerLinks = {
  Services: [
    { label: 'Cloud Infrastructure', href: '#services' },
    { label: 'AI Agent Development', href: '#services' },
    { label: 'IT Hardware Solutions', href: '#services' },
    { label: 'AI Training Programs', href: '#services' },
  ],
  Company: [
    { label: 'About',           href: '#' },
    { label: 'Contact',         href: '#consultation' },
    { label: 'Privacy Policy',  href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#0A0A0F] border-t-[3px] border-[#0057FF]"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-14 pb-10">

        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <a
              href="#"
              className="font-display text-[1.5rem] tracking-[0.07em] text-[#F4F1EB] no-underline leading-none block mb-4"
              aria-label="Inventlix Home"
            >
              INVENT<span className="text-[#0057FF]">LIX</span>
            </a>
            <p className="text-[0.83rem] leading-[1.65] text-[rgba(244,241,235,0.4)] font-light max-w-[28ch]">
              Enterprise cloud, AI, and technology services — built for businesses that need results.
            </p>
            <a
              href="mailto:hello@inventlix.com"
              className="mt-5 flex items-center gap-2 text-[0.78rem] text-[rgba(244,241,235,0.35)] hover:text-[#0057FF] transition-colors duration-200"
            >
              <Mail size={13} /> hello@inventlix.com
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3
                className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#F4F1EB] mb-5"
                style={{ fontFamily: 'Courier Prime, monospace' }}
              >
                {group}
              </h3>
              <ul className="space-y-3" role="list">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[0.83rem] text-[rgba(244,241,235,0.4)] hover:text-[#0057FF] transition-colors duration-200 font-light"
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
        <div className="border-t border-[#1e1e2a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.72rem] text-[rgba(244,241,235,0.25)]">
            © {new Date().getFullYear()} Inventlix. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[0.72rem] text-[rgba(244,241,235,0.25)]">
            <a href="#" className="hover:text-[rgba(244,241,235,0.5)] transition-colors">Privacy Policy</a>
            <span className="opacity-40">·</span>
            <a href="#" className="hover:text-[rgba(244,241,235,0.5)] transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
