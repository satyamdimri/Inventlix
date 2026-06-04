import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'cloud',
    num: '01',
    label: 'Cloud Infrastructure & DevOps',
    description:
      'End-to-end cloud migration and management across AWS, Azure, and GCP—delivered with enterprise reliability and FinOps discipline.',
    features: [
      'Cloud migration & modernization',
      'AWS, Azure & GCP management',
      'Cost optimization & FinOps',
      'DevOps pipeline automation',
      '24/7 monitoring & incident response',
    ],
  },
  {
    id: 'ai',
    num: '02',
    label: 'AI Agent Development',
    description:
      'Custom AI agents and automation systems built to streamline operations, customer engagement, and internal knowledge workflows.',
    features: [
      'Customer support AI agents',
      'Internal workflow automation',
      'RAG & LLM integrations',
      'Knowledge assistant bots',
      'Custom enterprise AI solutions',
    ],
  },
  {
    id: 'hardware',
    num: '03',
    label: 'IT Hardware Solutions',
    description:
      'Reliable enterprise hardware procurement, deployment, and lifecycle management—tailored to operational needs at scale.',
    features: [
      'Laptops & workstations',
      'Server infrastructure',
      'Networking equipment',
      'Enterprise procurement',
      'Asset lifecycle management',
    ],
  },
  {
    id: 'training',
    num: '04',
    label: 'AI Training Programs',
    description:
      'Structured AI adoption programs that empower employees to integrate AI tools into their daily work with measurable confidence.',
    features: [
      'Employee AI adoption tracks',
      'Productivity & tools workshops',
      'Corporate AI literacy programs',
      'Hands-on implementation labs',
      'Department-specific training',
    ],
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#F4F1EB] py-24 lg:py-32"
      aria-labelledby="services-headline"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="section-label mb-3">Our Services</p>
            <h2
              id="services-headline"
              className="font-display text-[clamp(2.4rem,4vw,3.6rem)] text-[#0A0A0F] leading-none"
            >
              Everything Your Enterprise Needs to Stay Ahead
            </h2>
          </div>
          <p className="text-[0.9rem] text-[#5A6478] leading-[1.7] max-w-[38ch] font-light">
            From cloud migrations to AI deployments — end-to-end technology services with measurable outcomes.
          </p>
        </div>

        {/* Service cards — bordered grid */}
        <div className="grid md:grid-cols-2 gap-[1px] bg-[#D0CDC6] border border-[#D0CDC6]">
          {services.map(svc => (
            <div
              key={svc.id}
              id={`service-${svc.id}`}
              className="bg-[#F4F1EB] p-10 relative overflow-hidden group transition-all duration-300 hover:bg-white"
            >
              {/* Bottom accent */}
              <span
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0057FF] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"
                aria-hidden="true"
              />

              {/* Step number */}
              <div className="font-display text-[5rem] leading-none text-[#0057FF] opacity-[0.12] absolute top-4 right-6 select-none pointer-events-none">
                {svc.num}
              </div>

              <h3 className="font-display text-[1.6rem] tracking-[0.03em] text-[#0A0A0F] leading-none mb-3">
                {svc.label}
              </h3>
              <p className="text-[0.88rem] leading-[1.65] text-[#5A6478] mb-6 font-light max-w-[46ch]">
                {svc.description}
              </p>

              <ul className="space-y-2 mb-7" role="list">
                {svc.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.83rem] text-[#5A6478]">
                    <span className="text-[#0057FF] mt-[2px] shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#consultation"
                className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-[#0057FF] link-underline border-[#0057FF] pb-px"
                aria-label={`Learn more about ${svc.label}`}
              >
                Learn more <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
