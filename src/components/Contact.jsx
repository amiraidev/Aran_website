import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [msg, setMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setMsg('✅ درخواست شما ثبت شد! به‌زودی برای هماهنگی با شما تماس می‌گیریم.')
    e.target.reset()
    setTimeout(() => setMsg(''), 5000)
  }

  return (
    <section id="contact" className="section">
      <h2 className="section-title">
        رزرو <span>کلاس</span>
      </h2>
      <p className="section-sub">
        فرم زیر را پر کنید تا یک جلسه‌ی مشاوره‌ی رایگان برای تعیین سطح هماهنگ کنیم.
      </p>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <input type="text" placeholder="نام و نام خانوادگی" required />
        <input type="tel" placeholder="شماره تماس" required />
        <select required defaultValue="">
          <option value="" disabled>
            دوره‌ی موردنظر را انتخاب کنید
          </option>
          <option>مکالمه روزمره</option>
          <option>آمادگی IELTS</option>
          <option>گرامر کاربردی</option>
          <option>انگلیسی تجاری</option>
          <option>تلفظ و لهجه</option>
          <option>انگلیسی کودکان</option>
        </select>
        <textarea placeholder="توضیحات (اختیاری)"></textarea>
        <button type="submit" className="btn-primary">
          ارسال درخواست
        </button>
        <div className="form-msg">{msg}</div>
      </motion.form>
    </section>
  )
}
