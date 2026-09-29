import { useState } from 'react'
import Brand from '../Brand/Brand'
import './Header.css'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Conoce a Techi', href: '#conoce-a-techi' },
  { label: 'Propuestas', href: '#propuestas' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Blog', href: '#blog' },
]

function Header() {
  /* Menú desplegable: solo existe en mobile (en escritorio el botón no se muestra) */
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`header${menuOpen ? ' header--open' : ''}`}>
      <div className="header__brand">
        <Brand />
      </div>

      <nav className="header__nav" aria-label="Principal">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a className="header__cta" href="#sumate">
        Súmate
      </a>

      <button
        type="button"
        className="header__menu"
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

export default Header
