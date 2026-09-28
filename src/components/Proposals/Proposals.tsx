import { useState } from 'react'
import surquilloSeguro from '../../assets/proposals/surquillo-seguro.webp'
import surquilloPreparado from '../../assets/proposals/surquillo-preparado.webp'
import surquilloLimpio from '../../assets/proposals/surquillo-limpio.webp'
import surquilloOrdenado from '../../assets/proposals/surquillo-ordenado.webp'
import surquilloPetFriendly from '../../assets/proposals/surquillo-pet-friendly.webp'
import surquilloOportunidades from '../../assets/proposals/surquillo-oportunidades.webp'
import surquilloEspacios from '../../assets/proposals/surquillo-espacios.webp'
import surquilloFuturo from '../../assets/proposals/surquillo-futuro.webp'
import cardLimpio from '../../assets/proposals/card-limpio.webp'
import cardOrdenado from '../../assets/proposals/card-ordenado.webp'
import cardPetFriendly from '../../assets/proposals/card-pet-friendly.webp'
import cardOportunidades from '../../assets/proposals/card-oportunidades.webp'
import cardEspacios from '../../assets/proposals/card-espacios.webp'
import cardFuturo from '../../assets/proposals/card-futuro.webp'
import checkIcon from '../../assets/proposals/check.svg'
import cardArrow from '../../assets/proposals/card-arrow.svg'
import './Proposals.css'

type Measure = {
  title: string
  text: string
  bullets?: string[]
}

type Proposal = {
  number: string
  /** Rótulo de la tarjeta, en dos renglones como en XD */
  card: [string, string]
  /** La tarjeta 07 va en 12px en XD porque su rótulo es más largo */
  cardSmall?: boolean
  title: string[]
  /** Solo la 08 lleva el número grande sobre el título */
  showNumber?: boolean
  subtitle: string
  text: string[]
  /** La 08 no tiene medidas: su párrafo es una lista a 38px de interlínea */
  textLoose?: boolean
  measures: Measure[]
  image: string
  alt: string
  /** Posición de la foto dentro de la máscara 737x660, tal cual cada artboard de XD */
  crop: { x: number; y: number; w: number; h: number }
  /** x del párrafo respecto del título (0 o 6px según el artboard) */
  textX: number
  /** y del párrafo y de la lista en el artboard (la sección empieza en 3859) */
  textTop: number
  listTop?: number
  /** Fotos de las 4 tarjetas visibles cuando esta propuesta está activa, tal cual su artboard */
  thumbs: [string, string, string, string]
  /** Tarjetas (0–3) cuyo número y rótulo van 19px más abajo en este artboard */
  lowCards?: number[]
  /** En los artboards 05–07 la tarjeta 08 dice «Surquillo Ordenado» */
  lastCard?: [string, string]
}

const PROPOSALS: Proposal[] = [
  {
    number: '01',
    card: ['Surquillo', 'Seguro'],
    title: ['Surquillo seguro'],
    subtitle: 'Más seguridad y tranquilidad para nuestras familias',
    text: [
      'La seguridad de nuestros vecinos será una prioridad. Trabajaremos para recuperar la tranquilidad en nuestras calles con mayor prevención, tecnología y coordinación.',
    ],
    measures: [
      {
        title: 'Más serenazgo en las calles:',
        text: 'Duplicaremos la presencia de serenazgo para fortalecer la vigilancia y brindar una respuesta más rápida ante cualquier emergencia.',
      },
      {
        title: 'Patrullaje integrado con la Policía Nacional:',
        text: 'Implementaremos un trabajo coordinado entre serenazgo y policía para reforzar la seguridad en todo el distrito.',
      },
      {
        title: 'Serenos mejor preparados:',
        text: 'Capacitaremos a nuestros agentes en preparación física, defensa personal y manejo seguro de situaciones de riesgo.',
      },
      {
        title: 'Más iluminación para calles seguras:',
        text: 'Instalaremos iluminación LED en las zonas con menor iluminación para recuperar espacios públicos.',
      },
      {
        title: 'Cámaras con inteligencia artificial:',
        text: 'Implementaremos tecnología de monitoreo inteligente para prevenir y detectar hechos delictivos.',
      },
    ],
    image: surquilloSeguro,
    alt: 'Central de video vigilancia de Surquillo con serenazgo',
    crop: { x: -115, y: -3, w: 1023, h: 682 },
    textX: 0,
    textTop: 4164,
    listTop: 4268,
    thumbs: [surquilloSeguro, surquilloPreparado, cardLimpio, surquilloSeguro],
  },
  {
    number: '02',
    card: ['Surquillo', 'Preparado'],
    title: ['Surquillo preparado'],
    subtitle: 'Un distrito listo ante cualquier emergencia',
    text: [
      'Surquillo debe estar preparado para responder rápidamente frente a terremotos u otras situaciones de emergencia.',
    ],
    measures: [
      {
        title: 'Almacenes subterráneos de emergencia:',
        text: 'Crearemos puntos estratégicos de abastecimiento en lugares como el estadio municipal, parques y canchitas.',
      },
      {
        title: 'Equipamiento para emergencias:',
        text: 'Estos espacios contarán con alimentos no perecibles, agua, botiquines y herramientas de rescate para atender rápidamente a nuestros vecinos.',
      },
    ],
    image: surquilloPreparado,
    alt: 'Enfermera tomando la presión a una vecina adulta mayor',
    crop: { x: -193, y: -21, w: 1051, h: 681 },
    textX: 6,
    textTop: 4164,
    listTop: 4266,
    thumbs: [surquilloSeguro, surquilloPreparado, cardLimpio, surquilloSeguro],
  },
  {
    number: '03',
    card: ['Surquillo', 'Limpio'],
    title: ['Surquillo limpio'],
    subtitle: 'Calles limpias y espacios públicos recuperados',
    text: ['Trabajaremos por un distrito más limpio, ordenado y saludable para todos.'],
    measures: [
      {
        title: 'Contenedores subterráneos de residuos:',
        text: 'Instalaremos contenedores de basura subterráneos en puntos estratégicos para mejorar la limpieza urbana.',
      },
      {
        title: 'Recojo especial para comercios:',
        text: 'Implementaremos horarios diferenciados para establecimientos que generan residuos fuera del horario tradicional.',
      },
      {
        title: 'Lavado periódico de calles:',
        text: 'Realizaremos jornadas de lavado de calles con camión cisterna para mantener espacios públicos en mejores condiciones.',
      },
    ],
    image: surquilloLimpio,
    alt: 'Personal de limpieza lavando una calle de Surquillo',
    crop: { x: -163, y: 0, w: 990, h: 660 },
    textX: 0,
    textTop: 4164,
    listTop: 4238,
    thumbs: [surquilloSeguro, surquilloPreparado, cardLimpio, surquilloSeguro],
  },
  {
    number: '04',
    card: ['Surquillo', 'Ordenado'],
    title: ['Surquillo ordenado'],
    subtitle: 'Mejor tránsito y recuperación del espacio público',
    text: ['Ordenaremos las calles para que vecinos y visitantes puedan movilizarse mejor.'],
    measures: [
      {
        title: 'Mayor fiscalización del tránsito:',
        text: 'Reforzaremos la presencia de fiscalizadores en los puntos de mayor congestión.',
      },
      {
        title: 'Ordenamiento del transporte público:',
        text: 'Controlaremos paraderos y maniobras indebidas que generan tráfico y desorden.',
      },
      {
        title: 'Estacionamientos subterráneos en concesión:',
        text: 'Impulsaremos alternativas para liberar las calles de vehículos estacionados y mejorar la circulación.',
      },
    ],
    image: surquilloOrdenado,
    alt: 'Parque ordenado con glorieta y bancas en Surquillo',
    crop: { x: -325, y: 10, w: 1155, h: 650 },
    textX: 6,
    textTop: 4164,
    listTop: 4266,
    thumbs: [surquilloSeguro, surquilloSeguro, surquilloSeguro, cardOrdenado],
  },
  {
    number: '05',
    card: ['Surquillo pet', 'Friendly'],
    title: ['Surquillo pet friendly'],
    subtitle: 'Un distrito que también cuida a sus mascotas',
    text: ['Nuestros animales de compañía también forman parte de nuestras familias.'],
    measures: [
      {
        title: 'Veterinaria Municipal 24 horas:',
        text: 'Implementaremos atención veterinaria permanente para nuestras mascotas.',
      },
      {
        title: 'Registro municipal de mascotas:',
        text: 'Realizaremos un censo con identificación mediante microchip para ayudar a encontrar mascotas extraviadas.',
      },
    ],
    image: surquilloPetFriendly,
    alt: 'Vecina con su perro en una campaña veterinaria de Surquillo',
    crop: { x: -192, y: 0, w: 990, h: 660 },
    textX: 6,
    textTop: 4164,
    listTop: 4238,
    thumbs: [cardPetFriendly, surquilloSeguro, cardEspacios, surquilloSeguro],
    lowCards: [2, 3],
    lastCard: ['Surquillo', 'Ordenado'],
  },
  {
    number: '06',
    card: ['Surquillo con', 'Oportunidades'],
    title: ['Surquillo con oportunidades'],
    subtitle: 'Más apoyo para emprendedores, jóvenes y trabajadores',
    text: [
      'Impulsaremos un distrito donde las personas puedan crecer y generar nuevas oportunidades.',
    ],
    measures: [
      {
        title: 'Ordenamiento del comercio ambulatorio:',
        text: 'Trabajaremos para organizar el comercio informal sin quitar la fuente de ingreso de quienes buscan salir adelante.',
      },
      {
        title: 'Municipalidad digital:',
        text: 'Digitalizaremos los trámites para facilitar procesos, ahorrar tiempo y reducir espacios para la corrupción.',
      },
      {
        title: 'Capacitación para emprendedores y comerciantes:',
        text: 'Brindaremos herramientas para mejorar negocios y fortalecer la economía local.',
      },
      {
        title: 'Programa para jóvenes emprendedores:',
        text: 'Capacitaremos a nuestros jóvenes para que puedan desarrollar proyectos y nuevas oportunidades.',
      },
    ],
    image: surquilloOportunidades,
    alt: 'Emprendedores de Surquillo reunidos en un taller',
    crop: { x: -169, y: 0, w: 990, h: 660 },
    textX: 6,
    textTop: 4164,
    listTop: 4238,
    thumbs: [surquilloSeguro, cardOportunidades, cardEspacios, surquilloSeguro],
    lowCards: [0, 1, 2, 3],
    lastCard: ['Surquillo', 'Ordenado'],
  },
  {
    number: '07',
    card: ['Surquillo con', 'Espacios para todos'],
    cardSmall: true,
    title: ['Surquillo con espacios', 'para todos'],
    subtitle: 'Recuperemos nuestros espacios para la comunidad',
    text: [
      'Nuestros espacios públicos deben volver a ser lugares de encuentro, aprendizaje y desarrollo.',
    ],
    measures: [
      {
        title: 'Recuperación del Estadio Municipal',
        text: 'Transformaremos el estadio municipal en un espacio al servicio de los vecinos con:',
        bullets: [
          '-Talleres deportivos gratuitos.',
          '-Actividades culturales.',
          '-Programas de capacitación.',
          '-Espacios de integración para niños, jóvenes y adultos',
        ],
      },
    ],
    image: surquilloEspacios,
    alt: 'Niños jugando en una losa deportiva de Surquillo',
    crop: { x: -157, y: -16, w: 1014, h: 676 },
    textX: 0,
    textTop: 4204,
    listTop: 4278,
    thumbs: [surquilloSeguro, surquilloSeguro, cardEspacios, surquilloSeguro],
    lowCards: [0, 1, 2, 3],
    lastCard: ['Surquillo', 'Ordenado'],
  },
  {
    number: '08',
    card: ['Surquillo tiene', 'Futuro'],
    title: ['Surquillo tiene futuro'],
    showNumber: true,
    subtitle: 'Una gestión cercana, moderna y al servicio de sus vecinos',
    text: [
      'Trabajaremos por un distrito más:',
      '-Seguro',
      '-limpio',
      '-Ordenado',
      '-Oportunidades para todas las familias.',
    ],
    textLoose: true,
    measures: [],
    image: surquilloFuturo,
    alt: 'Vista aérea de Surquillo',
    crop: { x: -227, y: -11, w: 1192, h: 671 },
    textX: 0,
    textTop: 4256,
    thumbs: [surquilloSeguro, surquilloSeguro, cardEspacios, cardFuturo],
    lowCards: [2],
  },
]

const PAGE_SIZE = 4
/** y de la columna de texto en el artboard: los párrafos y listas se ubican desde acá */
const INFO_TOP = 4056

function ArrowIcon({ direction }: { direction: 'prev' | 'next' }) {
  return (
    <svg
      viewBox="50.92 55.115 10.5 8.75"
      width="19.39"
      height="16.19"
      aria-hidden="true"
      style={direction === 'prev' ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path
        d="M 51.01 59.378 C 51.01 59.749 51.312 60.051 51.684 60.051 L 59.034 60.051 L 56.594 62.492 C 56.322 62.746 56.307 63.172 56.56 63.444 C 56.813 63.716 57.239 63.731 57.511 63.477 C 57.523 63.467 57.534 63.455 57.545 63.444 L 61.135 59.853 C 61.398 59.591 61.398 59.165 61.135 58.902 L 57.545 55.312 C 57.273 55.058 56.847 55.073 56.594 55.345 C 56.353 55.604 56.353 56.004 56.594 56.263 L 59.034 58.704 L 51.684 58.704 C 51.312 58.704 51.01 59.006 51.01 59.378"
        fill="currentColor"
      />
    </svg>
  )
}

function Proposals() {
  const [active, setActive] = useState(0)
  const proposal = PROPOSALS[active]
  const pageStart = Math.floor(active / PAGE_SIZE) * PAGE_SIZE
  const pageCards = PROPOSALS.slice(pageStart, pageStart + PAGE_SIZE)

  const go = (step: number) => setActive((current) => (current + step + PROPOSALS.length) % PROPOSALS.length)

  return (
    <section className="proposals" id="propuestas">
      <p className="proposals__eyebrow">Nuestras propuestas</p>

      <div className="proposals__main">
        <div className="proposals__info" key={proposal.number}>
          <div
            className={`proposals__intro${proposal.title.length > 1 || proposal.showNumber ? ' proposals__intro--tall' : ''}`}
          >
            {proposal.showNumber && <p className="proposals__number">{proposal.number}</p>}
            <h2 className="proposals__heading">
              {proposal.title.map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
            <p className="proposals__subtitle">{proposal.subtitle}</p>
            <p
              className={`proposals__text${proposal.textLoose ? ' proposals__text--loose' : ''}`}
              style={{ top: proposal.textTop - INFO_TOP, left: proposal.textX }}
            >
              {proposal.text.map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
          </div>

          {proposal.measures.length > 0 && (
            <ul className="proposals__list" style={{ top: (proposal.listTop ?? 0) - INFO_TOP }}>
              {proposal.measures.map((measure) => (
                <li key={measure.title} className="proposals__item">
                  <img src={checkIcon} width="24" height="24" alt="" />
                  <p>
                    <strong>{measure.title}</strong>
                    <br />
                    {measure.text}
                    {measure.bullets?.map((bullet) => (
                      <span key={bullet} className="proposals__bullet">
                        {bullet}
                      </span>
                    ))}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="proposals__media">
          <img
            key={proposal.number}
            src={proposal.image}
            alt={proposal.alt}
            style={{
              left: proposal.crop.x,
              top: proposal.crop.y,
              width: proposal.crop.w,
              height: proposal.crop.h,
            }}
          />
        </div>
      </div>

      <div className="proposals__nav">
        <button
          type="button"
          className="proposals__arrow proposals__arrow--prev"
          aria-label="Propuesta anterior"
          onClick={() => go(-1)}
        >
          <ArrowIcon direction="prev" />
        </button>

        <div className="proposals__cards">
          {pageCards.map((card, slot) => {
            const index = PROPOSALS.indexOf(card)
            const isActive = index === active
            const label = slot === PAGE_SIZE - 1 && proposal.lastCard ? proposal.lastCard : card.card
            return (
              <button
                key={card.number}
                type="button"
                className={`proposal-card${isActive ? ' proposal-card--active' : ''}${proposal.lowCards?.includes(slot) ? ' proposal-card--low' : ''}`}
                aria-pressed={isActive}
                onClick={() => setActive(index)}
              >
                <span className="proposal-card__body">
                  <span className="proposal-card__number">{card.number}</span>
                  <span
                    className={`proposal-card__title${card.cardSmall ? ' proposal-card__title--small' : ''}`}
                  >
                    {label[0]}
                    <br />
                    {label[1]}
                  </span>
                  <span className="proposal-card__arrow">
                    <img src={cardArrow} width="9.46" height="7.9" alt="" />
                  </span>
                </span>
                <span className="proposal-card__media">
                  <img src={proposal.thumbs[slot]} alt="" loading="lazy" />
                </span>
              </button>
            )
          })}
        </div>

        <button
          type="button"
          className="proposals__arrow proposals__arrow--next"
          aria-label="Propuesta siguiente"
          onClick={() => go(1)}
        >
          <ArrowIcon direction="next" />
        </button>
      </div>
    </section>
  )
}

export default Proposals
