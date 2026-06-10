import { ArrowRight } from 'lucide-react'
import { useCountUp, useInView } from '../hooks/useCountUp'

const STATS = [
  { target: 60,  suffix: '%+', label: 'Average Cost\nOptimization' },
  { target: 24,  suffix: '/7', label: 'DevOps\nSupport'            },
  { target: 100, suffix: '+',  label: 'Successful\nDeployments'    },
  { target: 95,  suffix: '%',  label: 'Training\nAdoption Rate'    },
]

function StatCell({ target, suffix, label, inView, idx }) {
  const count = useCountUp(target, inView, 1800)
  // On mobile (2-col grid) only add padding on sm+ breakpoint
  const padClass = idx === 0 ? 'sm:pr-6 lg:pr-8' : idx === STATS.length - 1 ? 'sm:pl-6 lg:pl-8' : 'sm:px-6 lg:px-8'

  return (
    <div className={`flex flex-col items-center py-5 sm:py-4 ${padClass}`}>
      <div className="font-display text-[2.2rem] sm:text-[2.6rem] leading-none text-[#0057FF] mb-1 tabular-nums">
        {count}{suffix}
      </div>
      <div
        className="text-[0.63rem] tracking-[0.07em] uppercase text-[#5A6478] text-center leading-[1.5] font-light whitespace-pre-line"
        style={{ fontFamily: 'DM Sans, sans-serif' }}
      >
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  const [statsRef, statsInView] = useInView(0.3)

  return (
    <section
      id="hero"
      className="relative bg-[#F4F1EB] min-h-screen flex flex-col items-center justify-center pt-[68px] overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,87,255,0.045) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(0,87,255,0.045) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%', left: '50%',
          transform: 'translateX(-50%)',
          width: '900px', height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(0,87,255,0.07) 0%, transparent 70%)',
          filter: 'blur(2px)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-16 py-12 sm:py-16 text-center flex flex-col items-center">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 sm:gap-4 mb-7 sm:mb-10">
          <span className="block w-6 sm:w-10 h-[1.5px] bg-[#0057FF]" aria-hidden="true" />
          <span
            className="text-[0.6rem] sm:text-[0.68rem] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#0057FF]"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            Enterprise Technology Services
          </span>
          <span className="block w-6 sm:w-10 h-[1.5px] bg-[#0057FF]" aria-hidden="true" />
        </div>

        {/* Headline — clamp from 2.8rem (iPhone SE) up to 9rem */}
        <h1
          id="hero-headline"
          className="font-display text-[#0A0A0F] leading-[0.9] tracking-[0.01em] mb-6 sm:mb-8"
          style={{ fontSize: 'clamp(2.8rem, 8.5vw, 9rem)' }}
        >
          Accelerate Growth
          <br />
          with{' '}
          <span className="text-[#0057FF]">Cloud, AI</span>
          <br />
          &amp; Enterprise
          <br />
          Technology
        </h1>

        {/* Rule */}
        <div className="w-12 sm:w-16 h-[2px] bg-[#D0CDC6] mb-6 sm:mb-8" aria-hidden="true" />

        {/* Subheadline */}
        <p
          className="text-[0.95rem] sm:text-[1.05rem] leading-[1.75] text-[#5A6478] max-w-[42ch] mb-8 sm:mb-10 font-light px-2 sm:px-0"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          We help businesses reduce infrastructure costs, deploy AI solutions,
          modernize IT operations, and upskill teams for the future.
        </p>

        {/* CTAs — stack on mobile, row on sm+ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full mb-10 sm:mb-14">
          <a
            href="#consultation"
            id="hero-primary-cta"
            className="w-full sm:w-auto text-center inline-block px-8 py-4 text-[0.8rem] font-bold tracking-[0.12em] uppercase text-white bg-[#0057FF] border-2 border-[#0057FF] hover:bg-white hover:text-[#0057FF] focus:bg-white focus:text-[#0057FF] focus:outline-none focus:ring-2 focus:ring-[#0057FF] focus:ring-offset-2 active:bg-[#EEF4FF] transition-all duration-300"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            Book a Consultation
          </a>
          <a
            href="#services"
            id="hero-secondary-cta"
            className="flex items-center gap-2 text-[0.88rem] text-[#5A6478] hover:text-[#0057FF] border-b border-transparent hover:border-[#0057FF] transition-all duration-200 pb-0.5"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Explore Services <ArrowRight size={14} />
          </a>
        </div>

        {/* Stats — 2-col on mobile, 4-col on sm+ */}
        <div ref={statsRef} className="w-full border-t border-[#D0CDC6] pt-6 sm:pt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[#D0CDC6] max-w-3xl mx-auto">
            {STATS.map((s, i) => (
              <StatCell key={s.label} {...s} inView={statsInView} idx={i} />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(244,241,235,0.6))' }}
        aria-hidden="true"
      />
    </section>
  )
}
