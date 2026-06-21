import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { stats } from '../data'

const toFa = (n) => n.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d])

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const duration = 1600
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="stat-num">
      {toFa(count)}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="section">
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label}>
            <Counter value={s.value} suffix={s.suffix} />
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
