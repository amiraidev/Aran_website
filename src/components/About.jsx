import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="portrait-frame">
          <span className="portrait-letter">A</span>
        </div>

        <div className="about-text">
          <h3>سلام، من آران هستم 👋</h3>
          <p>
            بیش از هشت سال است که به نوجوانان و بزرگسالان زبان انگلیسی آموزش
            می‌دهم. باور دارم یادگیری زبان وقتی اتفاق می‌افتد که با موقعیت‌های
            واقعی و گفتگوی زنده همراه باشد، نه حفظ کردن لیست لغت.
          </p>
          <p>
            کلاس‌های من ترکیبی از تمرین مکالمه، گرامر کاربردی و بازخورد شخصی است
            تا هر زبان‌آموز با سرعت خودش پیشرفت کند و از مسیر یادگیری لذت ببرد.
          </p>
          <div className="tags">
            <span>TEFL Certified</span>
            <span>IELTS Trainer</span>
            <span>Business English</span>
            <span>کلاس آنلاین و حضوری</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
