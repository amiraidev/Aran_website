import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data'

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="skills" className="section">
      <h2 className="section-title">
        مهارت‌های <span>تدریس</span>
      </h2>
      <p className="section-sub">
        تمرکز من روی مهارت‌هایی است که بیشترین تأثیر را در پیشرفت زبان‌آموز دارند.
      </p>

      <div className="skills-wrap" ref={ref}>
        {skills.map((s, i) => (
          <div className="skill" key={s.name}>
            <div className="skill-head">
              <span>{s.name}</span>
              <span className="en">{s.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{
                  width: inView ? `${s.level}%` : 0,
                  transitionDelay: `${i * 0.15}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
