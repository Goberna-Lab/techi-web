import iconSurquillo from '../../assets/experience/icon-surquillo.svg'
import iconTrayectoria from '../../assets/experience/icon-trayectoria.svg'
import iconServicio from '../../assets/experience/icon-servicio.svg'
import { useState } from 'react'
import './Experience.css'

const ITEM_COUNT = 3

/* Flecha de los botones del carrusel (solo mobile): la misma del botón "Saber más" */
function ArrowGlyph({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="32 47.9955 19.1996 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M 50.965 56.562 L 43.765 63.761 C 43.453 64.074 42.946 64.074 42.633 63.761 C 42.321 63.449 42.321 62.942 42.633 62.629 L 48.468 56.796 L 32.8 56.796 C 32.358 56.796 32 56.437 32 55.996 C 32 55.554 32.358 55.196 32.8 55.196 L 48.468 55.196 L 42.633 49.362 C 42.321 49.049 42.321 48.543 42.633 48.23 C 42.946 47.917 43.453 47.917 43.765 48.23 L 50.965 55.43 C 51.115 55.58 51.2 55.783 51.2 55.996 C 51.2 56.208 51.115 56.411 50.965 56.562 Z"
      />
    </svg>
  )
}

function Experience() {
  /* En mobile los ítems van en carrusel, de a uno; en escritorio se ven los tres y esto no se usa */
  const [active, setActive] = useState(0)
  const go = (step: number) => setActive((current) => (current + step + ITEM_COUNT) % ITEM_COUNT)
  const itemClass = (index: number, name: string) =>
    `experience__item experience__item--${name}${index === active ? ' experience__item--active' : ''}`

  return (
    <section className="experience">
      <div className="experience__card">
        <h2 className="experience__title">
          Experiencia que nace
          <br />
          <span className="experience__title-accent">del compromiso</span>
        </h2>

        <div className="experience__items">
          <article className={itemClass(0, 'surquillo')}>
            <img className="experience__icon" src={iconSurquillo} width="140" height="140" alt="" />
            <h3 className="experience__item-title">Surquillo</h3>
            <p className="experience__item-text">
              Su llegada al distrito, familia y{' '}
              <br className="br-laptop" />
              vínculo con{' '}
              <br className="br-wide" />
              Surquillo
            </p>
          </article>

          <article className={itemClass(1, 'trayectoria')}>
            <img className="experience__icon" src={iconTrayectoria} width="140" height="140" alt="" />
            <h3 className="experience__item-title">Trayectoria</h3>
            <p className="experience__item-text experience__item-text--light">
              <strong>Profesional en</strong> Marketing y{' '}
              <br className="br-laptop" />
              Coaching, con{' '}
              <br className="br-wide" />
              más de 30 años de{' '}
              <br className="br-laptop" />
              experiencia en el sector{' '}
              <br className="br-wide" />
              comercial.
            </p>
          </article>

          <article className={itemClass(2, 'servicio')}>
            <img className="experience__icon" src={iconServicio} width="140" height="140" alt="" />
            <h3 className="experience__item-title">Servicio</h3>
            <p className="experience__item-text experience__item-text--light experience__item-text--tall">
              <strong>Vocación de ayuda,</strong>{' '}
              <br className="br-laptop" />
              acompañamiento a{' '}
              <br className="br-wide" />
              personas y{' '}
              <br className="br-laptop" />
              compromiso con la comunidad.
            </p>
          </article>
        </div>

        <button type="button" className="experience__arrow experience__arrow--prev" aria-label="Anterior" onClick={() => go(-1)}>
          <ArrowGlyph className="experience__arrow-glyph" />
        </button>
        <button type="button" className="experience__arrow experience__arrow--next" aria-label="Siguiente" onClick={() => go(1)}>
          <ArrowGlyph className="experience__arrow-glyph" />
        </button>
      </div>
    </section>
  )
}

export default Experience
