export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <span>A</span>ran
      </div>
      <p style={{ color: 'var(--gray)', maxWidth: 480, margin: '0 auto' }}>
        با هم زبان انگلیسی را به یک مهارت واقعی و کاربردی تبدیل می‌کنیم.
      </p>
      <div className="socials">
        <a href="#" aria-label="Instagram">📷</a>
        <a href="#" aria-label="Telegram">✈️</a>
        <a href="#" aria-label="WhatsApp">💬</a>
        <a href="#" aria-label="Email">✉️</a>
      </div>
      <div className="copyright">
        © ۱۴۰۳ آران — تمامی حقوق محفوظ است.
      </div>
    </footer>
  )
}
