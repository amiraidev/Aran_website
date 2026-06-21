import { motion } from 'framer-motion'

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.7, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.span
        className="hero-badge"
        variants={fade}
        initial="hidden"
        animate="show"
        custom={0}
      >
        ✨ یادگیری زبان انگلیسی، حرفه‌ای و لذت‌بخش
      </motion.span>

      <motion.h1 variants={fade} initial="hidden" animate="show" custom={1}>
        با <span className="grad">آران</span> انگلیسی را
        <br />
        روان صحبت کن
      </motion.h1>

      <motion.p variants={fade} initial="hidden" animate="show" custom={2}>
        آموزگار زبان انگلیسی با هشت سال تجربه. از مکالمه‌ی روزمره تا آمادگی آیلتس،
        مسیر یادگیری‌ات را ساده، اصولی و انگیزه‌بخش می‌کنم.
      </motion.p>

      <motion.div
        className="hero-cta"
        variants={fade}
        initial="hidden"
        animate="show"
        custom={3}
      >
        <a href="#courses" className="btn-primary">
          مشاهده‌ی دوره‌ها
        </a>
        <a href="#contact" className="btn-ghost">
          رزرو جلسه‌ی رایگان
        </a>
      </motion.div>

      <div className="scroll-hint">
        <div className="mouse" />
        <span>اسکرول کنید</span>
      </div>
    </section>
  )
}
