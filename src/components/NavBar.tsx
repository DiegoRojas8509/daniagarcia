'use client'
import { useEffect, useState } from 'react'

const links = [
  { href: '#quien-soy',     label: 'Quién soy' },
  { href: '#bio',           label: 'Bio' },
  { href: '#cortometrajes', label: 'Portafolio' },
  { href: '#eventos',       label: 'Eventos' },
  { href: '#arte',          label: 'Arte' },
  { href: '#contacto',      label: 'Contacto' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <a href="#hero" className="nav-logo font-mono" data-hover>Art Design ✶ DAN</a>
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
