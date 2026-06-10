import { Mail } from 'lucide-react'

/* ── Server blueprint illustration ── */
function EnterpriseBlueprint() {
  return (
    <div
      className="absolute bottom-0 right-0 w-[200px] h-[240px] sm:w-[320px] sm:h-[360px] pointer-events-none select-none"
      aria-hidden="true"
      style={{ opacity: 0.08 }}
    >
      <svg viewBox="0 0 320 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <ellipse cx="160" cy="68" rx="72" ry="38" stroke="white" strokeWidth="1"/>
        <ellipse cx="112" cy="84" rx="46" ry="30" stroke="white" strokeWidth="1"/>
        <ellipse cx="208" cy="82" rx="50" ry="32" stroke="white" strokeWidth="1"/>
        <line x1="136" y1="104" x2="110" y2="148" stroke="white" strokeWidth="0.8" strokeDasharray="5 4"/>
        <line x1="184" y1="104" x2="210" y2="148" stroke="white" strokeWidth="0.8" strokeDasharray="5 4"/>
        <line x1="160" y1="106" x2="160" y2="148" stroke="white" strokeWidth="0.8" strokeDasharray="5 4"/>
        <rect x="78" y="148" width="164" height="192" rx="3" stroke="white" strokeWidth="1.2"/>
        {[0,1,2,3,4,5].map(i => (
          <g key={i}>
            <rect x="90" y={162 + i * 28} width="140" height="18" rx="2" stroke="white" strokeWidth="0.7"/>
            <circle cx="218" cy={171 + i * 28} r="2.2" stroke="white" strokeWidth="0.6"/>
            <circle cx="226" cy={171 + i * 28} r="2.2" stroke="white" strokeWidth="0.6"/>
            <rect x="96" y={165 + i * 28} width="36" height="12" rx="1" stroke="white" strokeWidth="0.5"/>
            <rect x="136" y={165 + i * 28} width="36" height="12" rx="1" stroke="white" strokeWidth="0.5"/>
          </g>
        ))}
        <rect x="90" y="332" width="140" height="6" rx="1" stroke="white" strokeWidth="0.6"/>
        <line x1="78" y1="148" x2="90" y2="162" stroke="white" strokeWidth="0.5"/>
        <line x1="242" y1="148" x2="230" y2="162" stroke="white" strokeWidth="0.5"/>
      </svg>
    </div>
  )
}

export default function CTA() {
  return (
    <section
      id="cta-banner"
      className="relative py-20 sm:py-28 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #1268B8 0%, #1062B3 45%, #0D56A3 100%)' }}
      aria-labelledby="cta-headline"
    >
      {/* Depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 60%),' +
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,0,0,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Blueprint grid */}
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

      {/* Background word */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display whitespace-nowrap pointer-events-none select-none leading-none"
        style={{ fontSize: 'clamp(8rem, 28vw, 26rem)', color: 'rgba(255,255,255,0.028)', letterSpacing: '0.01em' }}
        aria-hidden="true"
      >
        READY
      </div>

      <EnterpriseBlueprint />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 text-center">
        <p
          className="text-[0.65rem] sm:text-[0.68rem] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-4 sm:mb-5"
          style={{ fontFamily: 'Courier Prime, monospace', color: 'rgba(212,233,255,0.55)' }}
        >
          Get Started
        </p>

        <h2
          id="cta-headline"
          className="font-display leading-[0.9] mb-5 sm:mb-6 max-w-[14ch] mx-auto"
          style={{ fontSize: 'clamp(2.4rem, 7vw, 5.8rem)', color: '#F4F1EB' }}
        >
          Ready to Modernize Your Business?
        </h2>

        <p
          className="text-[0.9rem] sm:text-[1rem] leading-[1.75] max-w-[40ch] mx-auto mb-8 sm:mb-12 font-light px-2 sm:px-0"
          style={{ color: 'rgba(212,233,255,0.7)', fontFamily: 'DM Sans, sans-serif' }}
        >
          Partner with experts in cloud infrastructure, AI solutions, enterprise hardware, and workforce transformation.
        </p>

        {/* CTA */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <a
            href="#consultation"
            id="cta-primary"
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 text-[0.8rem] font-bold tracking-[0.12em] uppercase bg-[#F4F1EB] text-[#1062B3] border-2 border-[#F4F1EB] hover:bg-white hover:text-[#0057FF] hover:border-white focus:bg-white focus:text-[#0057FF] focus:outline-none active:bg-[#E8EFF9] transition-all duration-300"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            Book a Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Contact */}
        <div
          className="flex items-center justify-center gap-2 text-[0.78rem] sm:text-[0.8rem]"
          style={{ color: 'rgba(212,233,255,0.5)', fontFamily: 'DM Sans, sans-serif' }}
        >
          <Mail size={13} />
          <a
            href="mailto:connect@inventlix.com"
            className="hover:text-[#F4F1EB] transition-colors duration-200"
            style={{ color: 'inherit' }}
          >
            connect@inventlix.com
          </a>
        </div>
      </div>
    </section>
  )
}
