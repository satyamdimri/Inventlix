import { Mail, Phone } from 'lucide-react'

/* ── Zoho-style enterprise blueprint illustration ────────────────
   Minimal architectural line art — server infrastructure outline.
   White strokes at ~8% opacity. Positioned bottom-right, cropped.
   Does NOT distract — pure visual enrichment.
──────────────────────────────────────────────────────────────── */
function EnterpriseBlueprint() {
  return (
    <div
      className="absolute bottom-0 right-0 w-[320px] h-[360px] pointer-events-none select-none"
      aria-hidden="true"
      style={{ opacity: 0.08 }}
    >
      <svg
        viewBox="0 0 320 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* ── Cloud outline ── */}
        <ellipse cx="160" cy="68" rx="72" ry="38" stroke="white" strokeWidth="1"/>
        <ellipse cx="112" cy="84" rx="46" ry="30" stroke="white" strokeWidth="1"/>
        <ellipse cx="208" cy="82" rx="50" ry="32" stroke="white" strokeWidth="1"/>

        {/* Cloud → rack connection */}
        <line x1="136" y1="104" x2="110" y2="148" stroke="white" strokeWidth="0.8" strokeDasharray="5 4"/>
        <line x1="184" y1="104" x2="210" y2="148" stroke="white" strokeWidth="0.8" strokeDasharray="5 4"/>
        <line x1="160" y1="106" x2="160" y2="148" stroke="white" strokeWidth="0.8" strokeDasharray="5 4"/>

        {/* ── Server rack frame ── */}
        <rect x="78" y="148" width="164" height="192" rx="3" stroke="white" strokeWidth="1.2"/>

        {/* Rack units — 6 rows */}
        {[0,1,2,3,4,5].map(i => (
          <g key={i}>
            <rect
              x="90" y={162 + i * 28} width="140" height="18" rx="2"
              stroke="white" strokeWidth="0.7"
            />
            {/* LED dots */}
            <circle cx="218" cy={171 + i * 28} r="2.2" stroke="white" strokeWidth="0.6"/>
            <circle cx="226" cy={171 + i * 28} r="2.2" stroke="white" strokeWidth="0.6"/>
            {/* Drive slots */}
            <rect x="96" y={165 + i * 28} width="36" height="12" rx="1" stroke="white" strokeWidth="0.5"/>
            <rect x="136" y={165 + i * 28} width="36" height="12" rx="1" stroke="white" strokeWidth="0.5"/>
          </g>
        ))}

        {/* Rack bottom panel */}
        <rect x="90" y="332" width="140" height="6" rx="1" stroke="white" strokeWidth="0.6"/>

        {/* Decorative cross-hatch corner */}
        <line x1="78" y1="148" x2="90" y2="162" stroke="white" strokeWidth="0.5"/>
        <line x1="242" y1="148" x2="230" y2="162" stroke="white" strokeWidth="0.5"/>
      </svg>
    </div>
  )
}

export default function CTA() {
  return (
    <section
      id="consultation"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{
        // Zoho-style mature enterprise blue — directional lighting for depth
        background: 'linear-gradient(145deg, #1268B8 0%, #1062B3 45%, #0D56A3 100%)',
      }}
      aria-labelledby="cta-headline"
    >
      {/* ── Depth: very subtle inner vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 60%),' +
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,0,0,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* ── Subtle blueprint grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      {/* ── Giant background word — more subtle than before ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display whitespace-nowrap pointer-events-none select-none leading-none"
        style={{
          fontSize: 'clamp(14rem, 28vw, 26rem)',
          color: 'rgba(255,255,255,0.028)',
          letterSpacing: '0.01em',
        }}
        aria-hidden="true"
      >
        READY
      </div>

      {/* ── Zoho-style line art illustration ── */}
      <EnterpriseBlueprint />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 text-center">

        <p
          className="text-[0.68rem] font-bold tracking-[0.25em] uppercase mb-5"
          style={{
            fontFamily: 'Courier Prime, monospace',
            color: 'rgba(212,233,255,0.55)',
          }}
        >
          Get Started
        </p>

        <h2
          id="cta-headline"
          className="font-display leading-[0.9] mb-6 max-w-[14ch] mx-auto"
          style={{
            fontSize: 'clamp(3rem, 7vw, 5.8rem)',
            color: '#F4F1EB',
          }}
        >
          Ready to Modernize Your Business?
        </h2>

        <p
          className="text-[1rem] leading-[1.75] max-w-[46ch] mx-auto mb-12 font-light"
          style={{ color: 'rgba(212,233,255,0.7)', fontFamily: 'DM Sans, sans-serif' }}
        >
          Partner with experts in cloud infrastructure, AI solutions, enterprise
          hardware, and workforce transformation.
        </p>

        {/* ── Polished CTA buttons ── */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">

          {/* Primary — white fill with ink wipe */}
          <a
            href="mailto:hello@inventlix.com"
            id="cta-primary"
            className="relative inline-block overflow-hidden group"
          >
            {/* Ink wipe layer */}
            <span
              className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ background: '#0A0A0F' }}
              aria-hidden="true"
            />
            <span
              className="relative flex items-center justify-center gap-2 px-10 py-4 font-bold tracking-[0.12em] uppercase text-[0.8rem] border-2 transition-colors duration-300"
              style={{
                fontFamily: 'Courier Prime, monospace',
                color: '#1062B3',
                background: '#F4F1EB',
                borderColor: '#F4F1EB',
              }}
            >
              <span className="group-hover:text-[#F4F1EB] transition-colors duration-300">
                Book Consultation
              </span>
              <svg
                className="group-hover:translate-x-1 transition-transform duration-200 group-hover:text-[#F4F1EB]"
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </a>

          {/* Secondary — outline, fills on hover */}
          <a
            href="#contact"
            id="cta-secondary"
            className="relative inline-block overflow-hidden group"
          >
            <span
              className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-hidden="true"
            />
            <span
              className="relative block px-10 py-4 font-bold tracking-[0.12em] uppercase text-[0.8rem] border-2 text-center"
              style={{
                fontFamily: 'Courier Prime, monospace',
                color: '#F4F1EB',
                borderColor: 'rgba(244,241,235,0.35)',
              }}
            >
              Contact Sales
            </span>
          </a>

        </div>

        {/* Contact info */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[0.8rem]"
          style={{ color: 'rgba(212,233,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}
        >
          <a
            href="mailto:hello@inventlix.com"
            className="flex items-center gap-2 transition-colors duration-200"
            style={{ color: 'inherit' }}
            onMouseEnter={e => e.currentTarget.style.color = '#F4F1EB'}
            onMouseLeave={e => e.currentTarget.style.color = ''}
          >
            <Mail size={13} /> hello@inventlix.com
          </a>
          <span className="hidden sm:inline opacity-30">·</span>
          <a
            href="tel:+1800000000"
            className="flex items-center gap-2 transition-colors duration-200"
            style={{ color: 'inherit' }}
            onMouseEnter={e => e.currentTarget.style.color = '#F4F1EB'}
            onMouseLeave={e => e.currentTarget.style.color = ''}
          >
            <Phone size={13} /> +1 (800) 000-0000
          </a>
        </div>

      </div>
    </section>
  )
}
