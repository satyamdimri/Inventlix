import { useState, useEffect, useRef } from 'react'

/**
 * useCountUp — animates a number from 0 to `target` when `shouldStart` is true.
 * Respects prefers-reduced-motion. Fires once, never loops.
 *
 * @param {number}  target        — the number to count up to
 * @param {boolean} shouldStart   — trigger (from IntersectionObserver)
 * @param {number}  duration      — ms, default 1800
 * @returns {number} current animated value
 */
export function useCountUp(target, shouldStart, duration = 1800) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!shouldStart) return

    // Respect prefers-reduced-motion
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { setCount(target); return }

    let startTime = null

    const tick = (ts) => {
      if (!startTime) startTime = ts
      const elapsed = ts - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic — fast start, smooth landing
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setCount(target) // guarantee exact value at end
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [shouldStart, target, duration])

  return count
}

/**
 * useInView — fires once when the ref element enters the viewport.
 * @param {number} threshold — 0–1, portion visible before triggering
 * @returns [ref, boolean inView]
 */
export function useInView(threshold = 0.3) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return [ref, inView]
}
