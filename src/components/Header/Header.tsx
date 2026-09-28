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
  return (
    <header className="header">
      <div className="header__brand">
        <Brand />
      </div>

      <nav className="header__nav" aria-label="Principal">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <a className="header__cta" href="#sumate">
        Súmate
      </a>
    </header>
  )
}

export default Header
