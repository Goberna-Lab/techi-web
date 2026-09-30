import { useSyncExternalStore } from 'react'
import type { CSSProperties, FormEvent } from 'react'
import Brand from '../Brand/Brand'
import techiFooter from '../../assets/footer/techi-footer.webp'
import arc from '../../assets/footer/arc.svg'
import socialFb from '../../assets/footer/social-fb.svg'
import socialIg from '../../assets/footer/social-ig.svg'
import socialTt from '../../assets/footer/social-tt.svg'
import btnArrow from '../../assets/footer/btn-arrow.svg'
import './Footer.css'

const SOCIALS = [
  {
    icon: socialFb,
    label: 'Facebook',
    handle: '@TechiMaestreSURQUILLO',
    href: 'https://www.facebook.com/TechiMaestreSURQUILLO',
  },
  {
    icon: socialIg,
    label: 'Instagram',
    handle: '@TechiMaestreSurquillo',
    href: 'https://www.instagram.com/techimaestresurquillo',
  },
  {
    icon: socialTt,
    label: 'TikTok',
    handle: '@teresamaestresurquillo',
    /* El XD mobile (430) muestra este usuario */
    phoneHandle: '@TechiMaestreOficial',
    href: 'https://www.tiktok.com/@teresamaestresurquillo',
  },
]

/* Posiciones XD relativas a la tarjeta del formulario:
   --x: inicio de la línea, --dx: desplazamiento del texto respecto a la línea,
   --dy: desplazamiento vertical del label, --gap: label → texto */
type FieldStyle = CSSProperties & Record<`--${string}`, string>

function fieldStyle(x: number, dx: number, gap: number, dy = 0): FieldStyle {
  return { '--x': `${x}px`, '--dx': `${dx}px`, '--gap': `${gap}px`, '--dy': `${dy}px` }
}

/* Mobile del XD 430 (hasta 767px): el teléfono de ejemplo va sin el +51, como en ese XD */
const PHONE_QUERY = '(max-width: 767px)'

function useIsPhone() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia(PHONE_QUERY)
      query.addEventListener('change', onChange)
      return () => query.removeEventListener('change', onChange)
    },
    () => window.matchMedia(PHONE_QUERY).matches,
    () => false,
  )
}

function Footer() {
  const isPhone = useIsPhone()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <footer className="footer" id="sumate">
      <img className="footer__arc" src={arc} width="765.75" height="383" alt="" aria-hidden="true" />
      <img className="footer__photo" src={techiFooter} width="875" height="665" alt="Techi Maestre" />

      <div className="footer__info">
        <Brand variant="dark" />
        <ul className="footer__socials">
          {SOCIALS.map((social) => (
            <li key={social.handle}>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} width="36" height="36" alt={social.label} />
                <span>{isPhone && social.phoneHandle ? social.phoneHandle : social.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <form className="footer__form" onSubmit={handleSubmit}>
        <div className="footer__row footer__row--first">
          <div className="footer__field" style={fieldStyle(36.45, -2.45, 13.15)}>
            <label htmlFor="f-nombres">Nombres</label>
            <input id="f-nombres" name="nombres" type="text" placeholder="Tu nombre" />
          </div>
          <div className="footer__field" style={fieldStyle(18.92, 0.82, 12.15, 1)}>
            <label htmlFor="f-apellidos">Apellidos</label>
            <input id="f-apellidos" name="apellidos" type="text" placeholder="Tus apellidos" />
          </div>
        </div>

        <div className="footer__row">
          <div className="footer__field" style={fieldStyle(36.45, -0.38, 15.66)}>
            <label htmlFor="f-provincia">Provincia</label>
            <input id="f-provincia" name="provincia" type="text" placeholder="Mi provincia" />
          </div>
          <div className="footer__field" style={fieldStyle(18.92, 0.37, 15.66)}>
            <label htmlFor="f-distrito">Distrito&nbsp; de residencia</label>
            <input id="f-distrito" name="distrito" type="text" placeholder="Mi distrito" />
          </div>
        </div>

        <div className="footer__row">
          <div className="footer__field" style={fieldStyle(31, 0.38, 15.65)}>
            <label htmlFor="f-telefono">Teléfono</label>
            <input id="f-telefono" name="telefono" type="tel" placeholder={isPhone ? '000 000 000' : '+51 000 000 000'} />
          </div>
          <div className="footer__field" style={fieldStyle(25.19, 0.38, 15.65)}>
            <label htmlFor="f-correo">Correo</label>
            <input id="f-correo" name="correo" type="email" placeholder="tu@correo.com" />
          </div>
        </div>

        <div className="footer__row">
          <div className="footer__field footer__field--select" style={fieldStyle(31.38, -0.38, 15.64)}>
            <label htmlFor="f-tipo">Tipo de participación</label>
            <select id="f-tipo" name="tipo" defaultValue="">
              <option value="" disabled>
                Seleccione
              </option>
            </select>
          </div>
        </div>

        <div className="footer__row">
          <div className="footer__field footer__field--message" style={fieldStyle(31.38, -0.38, 15.64)}>
            <label htmlFor="f-mensaje">Mensaje opcional</label>
            <textarea id="f-mensaje" name="mensaje" rows={1} placeholder="Cuéntamos cómo te gustaría sumarte" />
          </div>
        </div>

        <button className="footer__submit" type="submit">
          QUIERO SUMARME
          <img src={btnArrow} width="12.5" height="10.25" alt="" />
        </button>
      </form>
    </footer>
  )
}

export default Footer
