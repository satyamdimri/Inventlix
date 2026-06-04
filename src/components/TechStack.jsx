// NEW SECTION: Trusted Technologies
// Displays wordmarks/logos for major tech partners using clean SVG text
// No fake images — editorial wordmark approach, similar to how IBMs etc do it

const TECH_STACK = [
  {
    name: 'Amazon Web Services',
    abbr: 'AWS',
    sub: 'Amazon Web Services',
    color: '#FF9900',
  },
  {
    name: 'Microsoft Azure',
    abbr: 'Azure',
    sub: 'Microsoft',
    color: '#0078D4',
  },
  {
    name: 'Google Cloud',
    abbr: 'Google Cloud',
    sub: 'Platform',
    color: '#4285F4',
  },
  {
    name: 'Docker',
    abbr: 'Docker',
    sub: 'Containers',
    color: '#2496ED',
  },
  {
    name: 'Kubernetes',
    abbr: 'K8s',
    sub: 'Kubernetes',
    color: '#326CE5',
  },
  {
    name: 'OpenAI',
    abbr: 'OpenAI',
    sub: 'GPT Platform',
    color: '#10A37F',
  },
  {
    name: 'Anthropic',
    abbr: 'Claude',
    sub: 'Anthropic',
    color: '#CC785C',
  },
  {
    name: 'Meta Llama',
    abbr: 'Llama',
    sub: 'Meta AI',
    color: '#0866FF',
  },
]

function TechCard({ abbr, sub, color, name }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-8 px-6 border border-[#D0CDC6] hover:border-[#0057FF]/40 transition-all duration-200 group bg-[#F4F1EB] hover:bg-white"
      title={name}
    >
      <span
        className="font-display text-[1.5rem] leading-none tracking-[0.04em] mb-1.5 transition-colors duration-200"
        style={{ color }}
        aria-hidden="true"
      >
        {abbr}
      </span>
      <span
        className="text-[0.65rem] tracking-[0.12em] uppercase text-[#5A6478] group-hover:text-[#0057FF] transition-colors duration-200"
        style={{ fontFamily: 'Courier Prime, monospace' }}
      >
        {sub}
      </span>
    </div>
  )
}

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="bg-[#F4F1EB] py-20 lg:py-28 border-t border-[#D0CDC6]"
      aria-labelledby="tech-headline"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-2">Technology Partners</p>
            <h2
              id="tech-headline"
              className="font-display text-[clamp(2rem,3.5vw,3rem)] text-[#0A0A0F] leading-none"
            >
              Trusted Technologies
            </h2>
          </div>
          <p className="text-[0.88rem] text-[#5A6478] leading-[1.7] max-w-[40ch] font-light">
            We build and deploy on the platforms that enterprise teams already trust — from cloud providers to AI model vendors.
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-[1px] bg-[#D0CDC6] border border-[#D0CDC6]">
          {TECH_STACK.map(tech => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>

      </div>
    </section>
  )
}
