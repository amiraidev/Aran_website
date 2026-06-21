import { useState, useEffect } from 'react'
import { navLinks } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="logo">
        <span>A</span>ran
      </a>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {navLinks.map((l) => (
          <li key={l.id}>
            <a href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div
        className={`hamburger ${open ? 'open' : ''}`}
        onClick={() => setOpen((o) => !o)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}
