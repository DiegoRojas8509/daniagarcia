'use client'
import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '#bio',           label: 'Bio' },
  { href: '#cortometrajes', label: 'Film' },
  { href: '#eventos',       label: 'Eventos' },
  { href: '#arte',          label: 'Arte' },
  { href: '#contacto',      label: 'Contacto' },
]

export default function NavBar() {
  const [dark, setDark] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const lightSections = document.querySelectorAll('.section-light, .hero, .contacto')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setDark(true)
        })
        const anyLight = [...entries].some(e => e.isIntersecting)
        if (!anyLight) setDark(false)
      },
      { threshold: 0.3 }
    )

    lightSections.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav ref={navRef} className={`nav ${dark ? 'nav-dark' : ''}`}>
      <span className="nav-logo font-mono">Art Design ✶ DAN</span>
      <ul className="nav-links">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} data-hover>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
