const TICKER_ITEMS = [
  'Cloud Migration',
  'AWS · Azure · GCP',
  'AI Agent Development',
  'DevOps Automation',
  'IT Hardware Procurement',
  'AI Workforce Training',
  'Zero Downtime Deployments',
  'Enterprise Security',
]

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div
      className="bg-[#0057FF] py-2.5 overflow-hidden whitespace-nowrap"
      aria-hidden="true"
    >
      <div
        className="inline-flex"
        style={{ animation: 'ticker-scroll 28s linear infinite' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="px-6 sm:px-10 text-[0.68rem] sm:text-[0.72rem] font-bold tracking-[0.12em] sm:tracking-[0.14em] uppercase text-[#F4F1EB]"
            style={{ fontFamily: 'Courier Prime, monospace' }}
          >
            {item}
            <span className="ml-6 sm:ml-10 opacity-40">·</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
