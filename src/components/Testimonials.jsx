const testimonials = [
  {
    id: 1,
    quote:
      'Inventlix migrated our entire data infrastructure to AWS in under 3 months. Cloud costs dropped by 54% in the first quarter post-migration — far beyond what we expected.',
    author: 'Sarah Mitchell',
    title: 'VP of Infrastructure',
    initials: 'SM',
  },
  {
    id: 2,
    quote:
      'The AI agent built for our customer support team handles over 60% of tier-1 queries autonomously. Our team now focuses on complex issues that actually need human judgment.',
    author: 'Rajiv Anand',
    title: 'Chief Operations Officer',
    initials: 'RA',
  },
  {
    id: 3,
    quote:
      'Their corporate AI training program transformed how our 200-person team thinks about automation. Within 6 weeks, AI tool adoption jumped from 12% to 78% across departments.',
    author: 'Claire Hoffman',
    title: 'Head of Digital Transformation',
    initials: 'CH',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4 sm:mb-5" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#0057FF">
          <path d="M6 1l1.236 2.506L10 3.868l-2 1.95.472 2.752L6 7.27l-2.472 1.3L4 5.818 2 3.868l2.764-.362z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#D4E9FF] py-16 sm:py-24 lg:py-32"
      aria-labelledby="testimonials-headline"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">

        {/* Header */}
        <div className="max-w-xl mb-10 sm:mb-16">
          <p className="section-label mb-3">Client Stories</p>
          <h2
            id="testimonials-headline"
            className="font-display text-[clamp(2rem,5vw,3.6rem)] text-[#0A0A0F] leading-none"
          >
            Results That Speak
          </h2>
        </div>

        {/* Cards — 1 col mobile, 3 col md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#b8d4ef] border border-[#b8d4ef]">
          {testimonials.map(t => (
            <figure
              key={t.id}
              className="bg-[#F4F1EB] p-6 sm:p-8 relative overflow-hidden group hover:bg-white transition-colors duration-200"
            >
              {/* Large opening quote */}
              <span
                className="font-display text-[5rem] sm:text-[6rem] leading-none text-[#0057FF] opacity-[0.12] absolute top-2 left-4 sm:left-5 select-none pointer-events-none"
                aria-hidden="true"
              >
                "
              </span>

              <Stars />

              <blockquote className="relative mb-6 sm:mb-7">
                <p className="text-[0.88rem] sm:text-[0.92rem] leading-[1.72] text-[#0A0A0F] font-light">
                  "{t.quote}"
                </p>
              </blockquote>

              <figcaption className="border-t border-[#D0CDC6] pt-4 sm:pt-5 flex items-center gap-3">
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0057FF] flex items-center justify-center text-white text-[0.65rem] sm:text-[0.7rem] font-bold shrink-0"
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-display text-[0.95rem] sm:text-[1rem] tracking-[0.04em] text-[#0A0A0F] leading-none">
                    {t.author}
                  </div>
                  <div
                    className="text-[0.68rem] sm:text-[0.7rem] tracking-[0.07em] text-[#5A6478] mt-1"
                    style={{ fontFamily: 'Courier Prime, monospace' }}
                  >
                    {t.title}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  )
}
