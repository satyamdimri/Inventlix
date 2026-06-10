const steps = [
  {
    num: '01',
    title: 'Discover',
    description:
      'We start by understanding your business goals, current infrastructure, and pain points through a structured technical assessment.',
  },
  {
    num: '02',
    title: 'Design',
    description:
      'Our architects create a tailored solution blueprint — covering technology stack, integrations, timelines, and cost projections.',
  },
  {
    num: '03',
    title: 'Deploy',
    description:
      'Our engineers implement the solution with minimal disruption, following enterprise change management and zero-downtime practices.',
  },
  {
    num: '04',
    title: 'Optimize',
    description:
      'Post-launch, we continuously monitor performance, reduce costs, and iterate to keep your systems running at peak efficiency.',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[#0A0A0F] py-16 sm:py-24 lg:py-32"
      aria-labelledby="process-headline"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="max-w-xl mb-10 sm:mb-16">
          <p
            className="text-[0.7rem] font-bold tracking-[0.25em] uppercase text-[#0057FF] mb-3"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            How We Work
          </p>
          <h2
            id="process-headline"
            className="font-display text-[clamp(2rem,5vw,3.6rem)] text-[#F4F1EB] leading-none"
          >
            A Proven Engagement Process
          </h2>
          <p className="mt-4 text-[0.88rem] sm:text-[0.9rem] leading-[1.7] text-[#5A6478] font-light">
            Four clear phases designed to deliver value quickly and maintain it over time.
          </p>
        </div>

        {/* Steps — 1 col mobile, 2 col sm, 4 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#1e1e2a]">
          {steps.map(step => (
            <div
              key={step.num}
              className="border-r border-b border-[#1e1e2a] p-6 sm:p-8 group hover:bg-[#0057FF]/5 transition-colors duration-300"
            >
              <div className="font-display text-[4rem] sm:text-[5rem] leading-none text-[#0057FF] opacity-[0.18] mb-4 sm:mb-5 select-none">
                {step.num}
              </div>
              <h3 className="font-display text-[1.3rem] sm:text-[1.5rem] tracking-[0.04em] text-[#F4F1EB] leading-none mb-3">
                {step.title}
              </h3>
              <p className="text-[0.84rem] sm:text-[0.85rem] leading-[1.65] text-[#5A6478] font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
