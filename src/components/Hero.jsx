import { ArrowRight } from 'lucide-react'
import { useCountUp, useInView } from '../hooks/useCountUp'

/* ── Stat config — numeric target + display suffix ── */
const STATS = [
  { target: 60,  suffix: '%+', label: 'Average Cost\nOptimization' },
  { target: 24,  suffix: '/7', label: 'DevOps\nSupport'            },
  { target: 100, suffix: '+',  label: 'Successful\nDeployments'    },
  { target: 95,  suffix: '%',  label: 'Training\nAdoption Rate'    },
]

/* ── Animated counter cell ── */
function StatCell({ target, suffix, label, inView, idx }) {
  const count = useCountUp(target, inView, 1800)
  const padClass = idx === 0 ? 'sm:pr-8' : idx === STATS.length - 1 ? 'sm:pl-8' : 'sm:px-8'

  return (
    <div className={`flex flex-col items-center py-4 ${padClass}`}>
      <div className="font-display text-[2.6rem] leading-none text-[#0057FF] mb-1 tabular-nums">
        {count}{suffix}
      </div>
      <div
        className="text-[0.66rem] tracking-[0.08em] uppercase text-[#5A6478] text-center leading-[1.5] font-light whitespace-pre-line"
        style={{ fontFamily: 'DM Sans, sans-serif' }}
      >
        {label}
      </div>
    </div>
  )
}

export default function Hero() {
  const [statsRef, statsInView] = useInView(0.4)

  return (
    <section
      id="hero"
      className="relative bg-[#F4F1EB] min-h-screen flex flex-col items-center justify-center pt-[68px] overflow-hidden"
      aria-labelledby="hero-headline"
    >

      {/* ── Background layers ── */}

      {/* Blueprint grid — extremely low opacity */}
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

      {/* Soft radial blue glow — centered */}
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

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-16 py-16 text-center flex flex-col items-center">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-10">
          <span className="block w-10 h-[1.5px] bg-[#0057FF]" aria-hidden="true" />
          <span
            className="text-[0.68rem] font-bold tracking-[0.25em] uppercase text-[#0057FF]"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            Enterprise Technology Services
          </span>
          <span className="block w-10 h-[1.5px] bg-[#0057FF]" aria-hidden="true" />
        </div>

        {/* Main headline */}
        <h1
          id="hero-headline"
          className="font-display text-[#0A0A0F] leading-[0.88] tracking-[0.01em] text-balance mb-8"
          style={{ fontSize: 'clamp(3.8rem, 8.5vw, 9rem)' }}
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

        {/* Thin rule */}
        <div className="w-16 h-[2px] bg-[#D0CDC6] mb-8" aria-hidden="true" />

        {/* Subheadline */}
        <p
          className="text-[1.05rem] leading-[1.75] text-[#5A6478] max-w-[50ch] mb-10 font-light"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          We help businesses reduce infrastructure costs, deploy AI solutions,
          modernize IT operations, and upskill teams for the future.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-14">
          <a
            href="#consultation"
            id="hero-primary-cta"
            className="relative inline-block overflow-hidden group"
          >
            <span
              className="absolute inset-0 bg-[#0A0A0F] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
              aria-hidden="true"
            />
            <span
              className="relative block px-10 py-4 text-[#F4F1EB] bg-[#0057FF] text-[0.8rem] font-bold tracking-[0.12em] uppercase border-2 border-[#0057FF]"
              style={{ fontFamily: 'Courier Prime, monospace' }}
            >
              Book a Consultation
            </span>
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

        {/* ── Animated stats row ── */}
        <div ref={statsRef} className="w-full border-t border-[#D0CDC6] pt-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D0CDC6] max-w-3xl mx-auto">
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
