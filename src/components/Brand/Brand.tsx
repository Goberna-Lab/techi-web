import logoPrin from '../../assets/common/logo-prin.webp'
import './Brand.css'

type BrandProps = {
  variant?: 'light' | 'dark'
}

/* Logo PRIN (imagen recortada en círculo de 70px) + "TECHI / MAESTRE" en Raleway Black */
function Brand({ variant = 'light' }: BrandProps) {
  return (
    <a className={`brand brand--${variant}`} href="#inicio" aria-label="Techi Maestre — inicio">
      <span className="brand__mark">
        <img src={logoPrin} width="296" height="79" alt="" />
      </span>
      <span className="brand__name">
        <span className="brand__name-top">TECHI</span>
        <span className="brand__name-bottom">MAESTRE</span>
      </span>
    </a>
  )
}

export default Brand
