import { motion } from 'framer-motion'
import { courses } from '../data'

export default function Courses() {
  return (
    <section id="courses" className="section">
      <h2 className="section-title">
        دوره‌های <span>آموزشی</span>
      </h2>
      <p className="section-sub">
        برنامه‌ای برای هر هدف و هر سطح؛ از اولین قدم‌ها تا تسلط کامل.
      </p>

      <div className="courses-grid">
        {courses.map((c, i) => (
          <motion.div
            className="course-card"
            key={c.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
          >
            {c.tag && <span className="course-tag">{c.tag}</span>}
            <div className="course-icon">{c.icon}</div>
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
