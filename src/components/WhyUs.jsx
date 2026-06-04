import { useCountUp, useInView } from '../hooks/useCountUp'

// target=null means no animation (static text like "ENT.")
const stats = [
  { target: 60,   suffix: '%+', label: 'Average Cloud Cost Savings', description: 'Across cloud migration and FinOps engagements with enterprise clients.' },
  { target: 24,   suffix: '/7', label: 'DevOps Support',             description: 'Always-on monitoring and incident response — no downtime surprises.'   },
  { target: 100,  suffix: '+',  label: 'Successful Deployments',     description: 'Cloud, AI, and hardware projects delivered across multiple industries.'  },
  { target: null, suffix: '',   label: 'Security Standards',         description: 'SOC2-aligned practices, zero-trust architecture, and compliance support.' },
]

function StatCard({ target, suffix, label, description, inView }) {
  const count = useCountUp(target ?? 0, inView && target !== null, 1800)
  const display = target === null ? 'ENT.' : `${count}${suffix}`

  return (
    <div className="bg-[#0A0A0F] p-8 border border-[#1e1e2a] group hover:bg-[#0d0d14] transition-colors duration-200 relative overflow-hidden">
      {/* Blue left accent bar */}
      <span
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0057FF] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300"
        aria-hidden="true"
      />

      <div className="font-display text-[3rem] text-[#0057FF] leading-none mb-2 tabular-nums">
        {display}
      </div>
      <div
        className="text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#F4F1EB] mb-3"
        style={{ fontFamily: 'Courier Prime, monospace' }}
      >
        {label}
      </div>
      <p className="text-[0.82rem] leading-[1.6] text-[#5A6478] font-light">
        {description}
      </p>
    </div>
  )
}

export default function WhyUs() {
  const [gridRef, gridInView] = useInView(0.2)

  return (
    <section
      id="why-us"
      className="bg-[#0A0A0F] py-24 lg:py-32"
      aria-labelledby="why-us-headline"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <p
              className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-[#0057FF] mb-3"
              style={{ fontFamily: 'Courier Prime, monospace' }}
            >
              Results That Matter
            </p>
            <h2
              id="why-us-headline"
              className="font-display text-[clamp(2.4rem,4vw,3.6rem)] text-[#F4F1EB] leading-none"
            >
              Why Enterprises Choose Inventlix
            </h2>
          </div>
          <p className="text-[0.9rem] text-[#5A6478] leading-[1.7] max-w-[36ch] font-light">
            Consistent, measurable outcomes — delivered with transparency and enterprise-grade expertise.
          </p>
        </div>

        {/* Animated stats grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#1a1a22] border border-[#1a1a22]"
        >
          {stats.map(s => (
            <StatCard key={s.label} {...s} inView={gridInView} />
          ))}
        </div>

        {/* Industry strip */}
        <div className="mt-16 pt-10 border-t border-[#1e1e2a] flex flex-wrap items-center justify-between gap-6">
          <p
            className="text-[0.68rem] tracking-[0.2em] uppercase text-[#5A6478]"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            Industries served
          </p>
          <div className="flex flex-wrap gap-8">
            {['Manufacturing', 'Financial Services', 'Healthcare', 'Retail', 'Logistics'].map(ind => (
              <span
                key={ind}
                className="text-[0.78rem] tracking-[0.06em] uppercase text-[#3a3a48] font-light"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
