import type { CSSProperties } from 'react'
import surquilloSeguro from '../../assets/proposals/surquillo-seguro.webp'
import checkIcon from '../../assets/proposals/check.svg'
import cardArrow from '../../assets/proposals/card-arrow.svg'
import './Proposals.css'

const MEASURES = [
  {
    title: 'Más serenazgo en las calles:',
    lines: [
      'Duplicaremos la presencia de serenazgo para fortalecer la vigilancia y',
      'brindar una respuesta más rápida ante cualquier emergencia.',
    ],
  },
  {
    title: 'Patrullaje integrado con la Policía Nacional:',
    lines: [
      'Implementaremos un trabajo coordinado entre serenazgo y policía para',
      'reforzar la seguridad en todo el distrito.',
    ],
  },
  {
    title: 'Serenos mejor preparados:',
    lines: [
      'Capacitaremos a nuestros agentes en preparación física, defensa personal y',
      'manejo seguro de situaciones de riesgo.',
    ],
  },
  {
    title: 'Más iluminación para calles seguras:',
    lines: [
      'Instalaremos iluminación LED en las zonas con menor iluminación para',
      'recuperar espacios públicos.',
    ],
  },
  {
    title: 'Cámaras con inteligencia artificial:',
    lines: [
      'Implementaremos tecnología de monitoreo inteligente para prevenir y',
      'detectar hechos delictivos.',
    ],
  },
]

/* Offsets por tarjeta tal como están en XD (el número y el círculo no están alineados igual en las 4) */
const CARDS = [
  { number: '01', label: 'Seguro', numberX: 16, arrowY: 10.78, active: true },
  { number: '02', label: 'Preparado', numberX: 14, arrowY: 6.78 },
  { number: '03', label: 'Limpio', numberX: 14, arrowY: 10.78 },
  { number: '04', label: 'Ordenado', numberX: 13, arrowY: 10.78 },
]

function Proposals() {
  return (
    <section className="proposals" id="propuestas">
      <p className="proposals__eyebrow">Nuestras propuestas</p>

      <div className="proposals__main">
        <div className="proposals__info">
          <p className="proposals__kicker">Surquillo seguro</p>
          <h2 className="proposals__heading">
            Más seguridad y tranquilidad para
            <br />
            nuestras familias
          </h2>
          <p className="proposals__text">
            La seguridad de nuestros vecinos será una prioridad. Trabajaremos para recuperar
            <br />
            la tranquilidad en nuestras calles con mayor prevención, tecnología y coordinación.
          </p>

          <ul className="proposals__list">
            {MEASURES.map((measure, index) => (
              <li
                key={measure.title}
                className={`proposals__item${index === 0 ? ' proposals__item--first' : ''}`}
              >
                <img src={checkIcon} width="24" height="24" alt="" />
                <p>
                  <strong>{measure.title}</strong>
                  {measure.lines.map((line) => (
                    <span key={line}>
                      <br />
                      {line}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="proposals__media">
          <img src={surquilloSeguro} alt="Central de video vigilancia de Surquillo con serenazgo" />
        </div>
      </div>

      <div className="proposals__cards">
        {CARDS.map((card) => (
          <a
            key={card.number}
            className={`proposal-card${card.active ? ' proposal-card--active' : ''}`}
            href={`#propuesta-${card.number}`}
            style={{ '--number-x': `${card.numberX}px`, '--arrow-y': `${card.arrowY}px` } as CSSProperties}
          >
            <span className="proposal-card__body">
              <span className="proposal-card__number">{card.number}</span>
              <span className="proposal-card__title">
                Surquillo
                <br />
                {card.label}
              </span>
              <span className="proposal-card__arrow">
                <img src={cardArrow} width="10.5" height="8.75" alt="" />
              </span>
            </span>
            <span className="proposal-card__media">
              <img src={surquilloSeguro} alt="" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Proposals
