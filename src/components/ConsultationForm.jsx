import { useState } from 'react'

/* ── Field component ─────────────────────────────────────────── */
function Field({ id, label, required, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[#0A0A0F]"
        style={{ fontFamily: 'Courier Prime, monospace' }}
      >
        {label}
        {required && <span className="text-[#0057FF] ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-[0.72rem] text-[#c0392b] font-light" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass =
  'w-full bg-white border border-[#D0CDC6] px-4 py-3 text-[0.88rem] text-[#0A0A0F] font-light placeholder-[#9C9587] ' +
  'focus:outline-none focus:border-[#0057FF] transition-colors duration-200'

/* ── Success state ───────────────────────────────────────────── */
function SuccessState() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-8">
      <div className="w-14 h-14 rounded-full border-2 border-[#0057FF] flex items-center justify-center mb-6">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0057FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      </div>
      <h3 className="font-display text-[1.8rem] text-[#0A0A0F] leading-none mb-3">
        Request Received
      </h3>
      <p className="text-[0.92rem] text-[#5A6478] leading-[1.7] font-light max-w-[36ch]">
        Thank you. Our team will contact you shortly.
      </p>
    </div>
  )
}

/* ── Main form ───────────────────────────────────────────────── */
export default function ConsultationForm() {
  const [form, setForm]       = useState({ name: '', designation: '', company: '', companySize: '', email: '', message: '' })
  const [errors, setErrors]   = useState({})
  const [status, setStatus]   = useState('idle') // idle | submitting | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim())        e.name        = 'Full name is required.'
    if (!form.designation.trim()) e.designation = 'Designation is required.'
    if (!form.company.trim())     e.company     = 'Company name is required.'
    if (!form.companySize)        e.companySize = 'Please select a company size.'
    if (!form.email.trim()) {
      e.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = 'Please enter a valid email address.'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    // Clear inline error as user types
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')

    try {
      const res = await fetch('https://formsubmit.co/ajax/connect@inventlix.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          'Full Name':    form.name.trim(),
          'Designation':  form.designation.trim(),
          'Company':      form.company.trim(),
          'Company Size': form.companySize,
          'Email':        form.email.trim(),
          'Message':      form.message.trim() || '—',
          _subject:       `Consultation Request — ${form.name.trim()}`,
          _captcha:       'false',
          _template:      'table',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="consultation"
      className="bg-[#F4F1EB] py-24 lg:py-32 border-t border-[#D0CDC6]"
      aria-labelledby="form-headline"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">

          {/* ── Left — context ── */}
          <div className="lg:sticky lg:top-28">
            <p className="section-label mb-3">Contact Us</p>
            <h2
              id="form-headline"
              className="font-display text-[clamp(2.4rem,4vw,3.6rem)] text-[#0A0A0F] leading-none mb-5"
            >
              Book a Consultation
            </h2>
            <p className="text-[0.95rem] leading-[1.75] text-[#5A6478] font-light max-w-[38ch] mb-10">
              Tell us about your requirements and our team will get in touch with you.
            </p>

            {/* Trust points */}
            <ul className="space-y-4">
              {[
                'Response within one business day',
                'Free initial discovery call',
                'No commitment required',
                'Tailored to your business needs',
              ].map(pt => (
                <li key={pt} className="flex items-start gap-3">
                  <span className="mt-[3px] text-[#0057FF] shrink-0 font-mono-inv text-[0.85rem]">—</span>
                  <span className="text-[0.85rem] text-[#5A6478] font-light leading-[1.6]">{pt}</span>
                </li>
              ))}
            </ul>

            {/* Contact fallback */}
            <div className="mt-10 pt-8 border-t border-[#D0CDC6]">
              <p
                className="text-[0.65rem] tracking-[0.18em] uppercase text-[#5A6478] mb-2"
                style={{ fontFamily: 'Courier Prime, monospace' }}
              >
                Or reach us directly
              </p>
              <a
                href="mailto:connect@inventlix.com"
                className="text-[0.88rem] text-[#0057FF] hover:text-[#003DB5] transition-colors duration-200 font-light"
              >
                connect@inventlix.com
              </a>
            </div>
          </div>

          {/* ── Right — form ── */}
          <div className="bg-white border border-[#D0CDC6] p-8 lg:p-10">
            {status === 'success' ? (
              <SuccessState />
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">

                  {/* Full Name */}
                  <Field id="name" label="Full Name" required error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={`${inputClass} ${errors.name ? 'border-[#c0392b]' : ''}`}
                    />
                  </Field>

                  {/* Designation */}
                  <Field id="designation" label="Designation" required error={errors.designation}>
                    <input
                      id="designation"
                      name="designation"
                      type="text"
                      autoComplete="organization-title"
                      placeholder="CTO, VP Engineering…"
                      value={form.designation}
                      onChange={handleChange}
                      className={`${inputClass} ${errors.designation ? 'border-[#c0392b]' : ''}`}
                    />
                  </Field>

                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">

                  {/* Company Name — required */}
                  <Field id="company" label="Company Name" required error={errors.company}>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={handleChange}
                      className={`${inputClass} ${errors.company ? 'border-[#c0392b]' : ''}`}
                    />
                  </Field>

                  {/* Company Size — required dropdown */}
                  <Field id="companySize" label="Company Size" required error={errors.companySize}>
                    <select
                      id="companySize"
                      name="companySize"
                      value={form.companySize}
                      onChange={handleChange}
                      className={`${inputClass} ${errors.companySize ? 'border-[#c0392b]' : ''} appearance-none bg-no-repeat pr-10`}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235A6478' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundPosition: 'right 14px center',
                      }}
                    >
                      <option value="" disabled>Select company size</option>
                      <option value="1-10 Employees">1–10 Employees</option>
                      <option value="11-50 Employees">11–50 Employees</option>
                      <option value="51-200 Employees">51–200 Employees</option>
                      <option value="201-500 Employees">201–500 Employees</option>
                      <option value="501-1000 Employees">501–1,000 Employees</option>
                      <option value="1000+ Employees">1,000+ Employees</option>
                    </select>
                  </Field>

                </div>

                {/* Email */}
                <div className="mb-6">
                  <Field id="email" label="Email Address" required error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className={`${inputClass} ${errors.email ? 'border-[#c0392b]' : ''}`}
                    />
                  </Field>
                </div>

                {/* Message — optional */}
                <div className="mb-8">
                  <Field id="message" label="Message" required={false} error={errors.message}>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Briefly describe your requirements or the challenge you'd like to solve…"
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </Field>
                </div>

                {/* Error banner */}
                {status === 'error' && (
                  <div className="mb-6 px-4 py-3 border border-[#c0392b]/30 bg-[#fdf2f2]">
                    <p className="text-[0.82rem] text-[#c0392b] font-light">
                      Something went wrong. Please try again or email us at{' '}
                      <a href="mailto:connect@inventlix.com" className="underline">connect@inventlix.com</a>.
                    </p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  id="form-submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 text-[0.8rem] font-bold tracking-[0.12em] uppercase text-white bg-[#0057FF] border-2 border-[#0057FF] hover:bg-white hover:text-[#0057FF] focus:bg-white focus:text-[#0057FF] focus:outline-none focus:ring-2 focus:ring-[#0057FF] focus:ring-offset-2 active:bg-[#EEF4FF] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#0057FF] disabled:hover:text-white transition-all duration-300"
                  style={{ fontFamily: 'Courier Prime, monospace' }}
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Book Consultation
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </button>

                <p
                  className="mt-4 text-center text-[0.72rem] text-[#9C9587] font-light"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Fields marked <span className="text-[#0057FF]">*</span> are required. We never share your information.
                </p>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
