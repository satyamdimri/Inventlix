const highlights = [
  {
    metric: '60%',
    metricSub: 'avg. reduction',
    title: 'Cloud Optimization',
    description: 'Reduce cloud costs through intelligent architecture, reserved instances, and FinOps best practices.',
  },
  {
    metric: '10×',
    metricSub: 'faster resolution',
    title: 'AI Automation',
    description: 'Custom AI agents for operations and customer support that integrate into your existing workflows.',
  },
  {
    metric: '24/7',
    metricSub: 'hardware support',
    title: 'Enterprise Hardware',
    description: 'Reliable IT infrastructure and hardware procurement with enterprise warranty and lifecycle management.',
  },
  {
    metric: '95%',
    metricSub: 'adoption rate',
    title: 'AI Workforce Enablement',
    description: 'Practical AI training programs that equip employees to confidently leverage AI tools at scale.',
  },
]

export default function ValueProps() {
  return (
    <section
      id="value-props"
      className="bg-[#E8EFF9] py-24 lg:py-32"
      aria-labelledby="value-headline"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="section-label mb-3">Why Inventlix</p>
          <h2
            id="value-headline"
            className="font-display text-[clamp(2.4rem,4vw,3.6rem)] text-[#0A0A0F] leading-none"
          >
            Technology Solutions Built for Modern Businesses
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#D0CDC6] border border-[#D0CDC6]">
          {highlights.map(item => (
            <div
              key={item.title}
              className="bg-[#F4F1EB] p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
            >
              {/* Bottom accent bar */}
              <span
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0057FF] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"
                aria-hidden="true"
              />

              <div className="mb-4">
                <span className="font-display text-[3.2rem] text-[#0057FF] leading-none">{item.metric}</span>
                <span
                  className="block text-[0.68rem] tracking-[0.09em] uppercase text-[#5A6478] mt-0.5"
                  style={{ fontFamily: 'Courier Prime, monospace' }}
                >
                  {item.metricSub}
                </span>
              </div>

              <h3 className="font-display text-[1.25rem] tracking-[0.03em] text-[#0A0A0F] mb-2 leading-none">
                {item.title}
              </h3>
              <p className="text-[0.88rem] leading-[1.65] text-[#5A6478] font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
