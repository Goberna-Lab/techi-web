import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import type { CSSProperties } from 'react'
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
import { CHECK_SIZE, LAYOUT } from './proposalsLayout'
import type { Board, Card, Line, Nav, Rule } from './proposalsLayout'
import { PROPOSALS } from './proposalsContent'
import './Proposals.css'

const IMAGES: Record<string, string> = {
  'surquillo-seguro': surquilloSeguro,
  'surquillo-preparado': surquilloPreparado,
  'surquillo-limpio': surquilloLimpio,
  'surquillo-ordenado': surquilloOrdenado,
  'surquillo-pet-friendly': surquilloPetFriendly,
  'surquillo-oportunidades': surquilloOportunidades,
  'surquillo-espacios': surquilloEspacios,
  'surquillo-futuro': surquilloFuturo,
  'card-limpio': cardLimpio,
  'card-ordenado': cardOrdenado,
  'card-pet-friendly': cardPetFriendly,
  'card-oportunidades': cardOportunidades,
  'card-espacios': cardEspacios,
  'card-futuro': cardFuturo,
}

const ALTS: Record<string, string> = {
  'surquillo-seguro': 'Central de video vigilancia de Surquillo con serenazgo',
  'surquillo-preparado': 'Enfermera tomando la presión a una vecina adulta mayor',
  'surquillo-limpio': 'Personal de limpieza lavando una calle de Surquillo',
  'surquillo-ordenado': 'Parque ordenado con glorieta y bancas en Surquillo',
  'surquillo-pet-friendly': 'Vecina con su perro en una campaña veterinaria de Surquillo',
  'surquillo-oportunidades': 'Emprendedores de Surquillo reunidos en un taller',
  'surquillo-espacios': 'Niños jugando en una losa deportiva de Surquillo',
  'surquillo-futuro': 'Vista aérea de Surquillo',
}

const PROPOSAL_COUNT = 8

/* Ascendente y descendente de cada fuente (en em): ubican cada renglón en la misma línea base que en XD */
const ASCENT: Record<string, number> = {
  Poppins: 1.05,
  Nunito: 1.011,
  Inter: 0.969,
  Raleway: 0.94,
  Montserrat: 0.968,
  'Open Sans': 1.069,
}
const DESCENT: Record<string, number> = {
  Poppins: 0.35,
  Nunito: 0.353,
  Inter: 0.241,
  Raleway: 0.234,
  Montserrat: 0.251,
  'Open Sans': 0.293,
}

/* Laptop 1366: su propio XD (1366x620). Tablet (768–1023): versión en flujo, sin XD.
   Mobile (hasta 767): acordeón del XD 430 */
const LAPTOP_QUERY = '(min-width: 1024px) and (max-width: 1366px)'
const MOBILE_QUERY = '(max-width: 1023px)'
const PHONE_QUERY = '(max-width: 767px)'

function useMediaQuery(media: string) {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia(media)
      query.addEventListener('change', onChange)
      return () => query.removeEventListener('change', onChange)
    },
    () => window.matchMedia(media).matches,
    () => false,
  )
}

function ArrowIcon({ direction, style }: { direction: 'prev' | 'next'; style: CSSProperties }) {
  return (
    <svg
      viewBox="50.92 55.115 10.5 8.75"
      aria-hidden="true"
      style={direction === 'prev' ? { ...style, transform: 'scaleX(-1)' } : style}
    >
      <path
        d="M 51.01 59.378 C 51.01 59.749 51.312 60.051 51.684 60.051 L 59.034 60.051 L 56.594 62.492 C 56.322 62.746 56.307 63.172 56.56 63.444 C 56.813 63.716 57.239 63.731 57.511 63.477 C 57.523 63.467 57.534 63.455 57.545 63.444 L 61.135 59.853 C 61.398 59.591 61.398 59.165 61.135 58.902 L 57.545 55.312 C 57.273 55.058 56.847 55.073 56.594 55.345 C 56.353 55.604 56.353 56.004 56.594 56.263 L 59.034 58.704 L 51.684 58.704 C 51.312 58.704 51.01 59.006 51.01 59.378"
        fill="currentColor"
      />
    </svg>
  )
}

/* Un renglón de XD: posición absoluta con su línea base exacta; cada tramo con su estilo */
function TextLine({ line, heading }: { line: Line; heading?: boolean }) {
  const first = line.runs[0]
  const ascent = ASCENT[first.f] ?? 1
  const descent = DESCENT[first.f] ?? 0.3
  return (
    <span
      className="proposals__line"
      role={heading ? 'heading' : undefined}
      aria-level={heading ? 2 : undefined}
      style={{
        left: line.x,
        top: line.base - ascent * first.s,
        lineHeight: `${(ascent + descent) * first.s}px`,
      }}
    >
      {line.runs.map((run, index) => (
        <span
          key={index}
          className={run.f === 'Inter' ? 'proposals__run proposals__run--inter' : 'proposals__run'}
          style={{
            fontFamily: `'${run.f}', sans-serif`,
            fontWeight: run.w,
            fontSize: run.s,
            color: run.c,
            letterSpacing: run.ls || undefined,
          }}
        >
          {run.t}
        </span>
      ))}
    </span>
  )
}

function RuleBar({ rule }: { rule: Rule }) {
  return (
    <span
      className="proposals__rule"
      style={{ left: rule.x, top: rule.y, width: rule.w, height: rule.h, background: rule.c }}
    />
  )
}

function NavButton({ nav, direction, onClick }: { nav: Nav; direction: 'prev' | 'next'; onClick: () => void }) {
  return (
    <button
      type="button"
      className={`proposals__arrow${nav.shadow ? ' proposals__arrow--shadow' : ''}`}
      aria-label={direction === 'prev' ? 'Propuesta anterior' : 'Propuesta siguiente'}
      onClick={onClick}
      style={{
        left: nav.x,
        top: nav.y,
        width: nav.d,
        height: nav.d,
        background: nav.red ? '#e10803' : '#ffffff',
        color: nav.glyph.c,
      }}
    >
      <ArrowIcon
        direction={direction}
        style={{ left: nav.glyph.x, top: nav.glyph.y, width: nav.glyph.w, height: nav.glyph.h }}
      />
    </button>
  )
}

function ProposalCard({
  card,
  offsetX,
  offsetY,
  isActive,
  onSelect,
}: {
  card: Card
  offsetX: number
  offsetY: number
  isActive: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      className={`proposal-card${card.bg ? ' proposal-card--bg' : ''}`}
      aria-pressed={isActive}
      aria-label={card.lines
        .slice(1)
        .map((line) => line.runs.map((run) => run.t).join(''))
        .join(' ')}
      onClick={onSelect}
      style={{ left: card.x - offsetX, top: card.y - offsetY }}
    >
      {card.thumb && (
        <span className="proposal-card__media" style={{ left: card.thumb.clipX, width: card.thumb.clipW }}>
          <img
            src={IMAGES[card.thumb.src]}
            alt=""
            style={{ left: card.thumb.x, top: card.thumb.y, width: card.thumb.w, height: card.thumb.h }}
          />
        </span>
      )}
      {card.lines.map((line, index) => (
        <TextLine key={index} line={line} />
      ))}
      {card.rule && <RuleBar rule={card.rule} />}
      {card.arrowAt && (
        <span
          className="proposal-card__arrow"
          style={{ left: card.arrowAt.x, top: card.arrowAt.y, width: card.arrowAt.d, height: card.arrowAt.d }}
        >
          <img src={cardArrow} width="9.46" height="7.9" alt="" />
        </span>
      )}
    </button>
  )
}

/* Mobile: foto y textos en una columna; las 8 tarjetas en una fila que se desliza con el dedo */
function ProposalsMobile() {
  const [active, setActive] = useState(0)
  const cardsRef = useRef<HTMLDivElement>(null)
  const proposal = PROPOSALS[active]

  const go = (step: number) => setActive((current) => (current + step + PROPOSAL_COUNT) % PROPOSAL_COUNT)

  /* La tarjeta activa queda a la vista dentro de la fila */
  useEffect(() => {
    const row = cardsRef.current
    const card = row?.children[active] as HTMLElement | undefined
    if (row && card) {
      const padding = parseFloat(getComputedStyle(row).paddingLeft)
      row.scrollTo({ left: card.offsetLeft - row.offsetLeft - padding, behavior: 'smooth' })
    }
  }, [active])

  return (
    <section className="proposals-m" id="propuestas">
      <p className="proposals-m__eyebrow">Nuestras propuestas</p>

      <div className="proposals-m__intro" key={proposal.number}>
        <p className="proposals-m__number">{proposal.number}</p>
        <h2 className="proposals-m__title">{proposal.title.join(' ')}</h2>
        <p className="proposals-m__subtitle">{proposal.subtitle}</p>
      </div>

      <div className="proposals-m__media">
        <img key={proposal.image} src={IMAGES[proposal.image]} alt={proposal.alt} />
      </div>

      <div className="proposals-m__body">
        {proposal.text.map((line) => (
          <p key={line} className="proposals-m__text">
            {line}
          </p>
        ))}

        {proposal.measures.length > 0 && (
          <ul className="proposals-m__list">
            {proposal.measures.map((measure) => (
              <li key={measure.title} className="proposals-m__item">
                <img src={checkIcon} width="20" height="20" alt="" />
                <p>
                  <strong>{measure.title}</strong>
                  <br />
                  {measure.text}
                  {measure.bullets?.map((bullet) => (
                    <span key={bullet} className="proposals-m__bullet">
                      {bullet}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="proposals-m__cards" ref={cardsRef}>
        {PROPOSALS.map((card, index) => (
          <button
            key={card.number}
            type="button"
            className={`proposals-m__card${index === active ? ' proposals-m__card--active' : ''}`}
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          >
            <span className="proposals-m__card-body">
              <span className="proposals-m__card-number">{card.number}</span>
              <span className="proposals-m__card-title">
                {card.card[0]}
                <br />
                {card.card[1]}
              </span>
            </span>
            <span className="proposals-m__card-media">
              <img src={IMAGES[card.cardImage]} alt="" loading="lazy" />
            </span>
          </button>
        ))}
      </div>

      <div className="proposals-m__nav">
        <button
          type="button"
          className="proposals-m__arrow proposals-m__arrow--prev"
          aria-label="Propuesta anterior"
          onClick={() => go(-1)}
        >
          <ArrowIcon direction="prev" style={{ width: 16, height: 13.36 }} />
        </button>
        <span className="proposals-m__count">
          {proposal.number} / 0{PROPOSAL_COUNT}
        </span>
        <button
          type="button"
          className="proposals-m__arrow proposals-m__arrow--next"
          aria-label="Propuesta siguiente"
          onClick={() => go(1)}
        >
          <ArrowIcon direction="next" style={{ width: 16, height: 13.36 }} />
        </button>
      </div>
    </section>
  )
}

/* Flecha del acordeón (XD mobile: 17.5x10.2, hacia abajo; gira cuando la propuesta está abierta) */
function Chevron() {
  return (
    <svg className="proposals-a__chevron" viewBox="20.85 985.22 17.48 10.22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M 29.608 995.439 C 29.993 995.436 30.362 995.283 30.636 995.013 L 37.748 987.901 C 38.329 987.323 38.331 986.384 37.753 985.804 C 37.175 985.223 36.236 985.221 35.655 985.799 L 29.59 991.865 L 23.524 985.799 C 22.944 985.221 22.005 985.223 21.427 985.804 C 20.849 986.384 20.851 987.323 21.432 987.901 L 28.544 995.013 C 28.827 995.292 29.211 995.446 29.608 995.439 Z"
      />
    </svg>
  )
}

/* Encuadre de cada foto dentro de su máscara 398x230 (XD mobile): x, y, ancho y alto de la imagen */
const ACCORDION_CROPS: Record<string, [number, number, number, number]> = {
  '01': [0, -17.9, 398, 265.3],
  '02': [-16, -11.9, 430, 278.5],
  '03': [-32, 0, 446, 297],
  '04': [-16, -26, 455, 256],
  '05': [-16, -18, 414, 276],
  '06': [-16, -18, 430, 287],
  '07': [-16, -18, 430, 287],
  '08': [-16, -10, 426, 240],
}

/* Títulos que el XD mobile escribe distinto (la 01 va como "Surquillo, de cerca") */
const ACCORDION_TITLES: Record<string, string[]> = {
  '01': ['Surquillo, de cerca'],
}

/* Mobile (hasta 767): acordeón del XD 430. Arranca con la 01 abierta; tocar una la abre y tocar la abierta la cierra */
function ProposalsAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="proposals-a" id="propuestas">
      <p className="proposals-a__eyebrow">Nuestras propuestas</p>

      <ul className="proposals-a__list">
        {PROPOSALS.map((proposal, index) => {
          const isOpen = index === open
          return (
            <li
              key={proposal.number}
              className={`proposals-a__item${isOpen ? ' proposals-a__item--open' : ''}`}
              data-number={proposal.number}
            >
              <button
                type="button"
                className="proposals-a__header"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="proposals-a__number">{proposal.number}</span>
                <span className="proposals-a__title">
                  {(ACCORDION_TITLES[proposal.number] ?? proposal.title).map((line, lineIndex) => (
                    <span key={line}>
                      {lineIndex > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </span>
                <Chevron />
              </button>

              {isOpen && (
                <div className="proposals-a__panel">
                  <p className="proposals-a__subtitle">{proposal.subtitle}</p>

                  <div className={`proposals-a__text${proposal.measures.length ? '' : ' proposals-a__text--list'}`}>
                    {proposal.text.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>

                  {proposal.measures.length > 0 && (
                    <ul className="proposals-a__measures">
                      {proposal.measures.map((measure) => (
                        <li key={measure.title} className="proposals-a__measure">
                          <img src={checkIcon} width="19.4" height="19.4" alt="" />
                          <p>
                            <strong>{measure.title}</strong>
                            <br />
                            {measure.text}
                          </p>
                          {measure.bullets?.map((bullet) => (
                            <p key={bullet} className="proposals-a__bullet">
                              {bullet}
                            </p>
                          ))}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="proposals-a__media">
                    <img
                      src={IMAGES[proposal.image]}
                      alt={proposal.alt}
                      style={(([left, top, width, height]) => ({ left, top, width, height }))(ACCORDION_CROPS[proposal.number])}
                    />
                  </div>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function Proposals() {
  const isMobile = useMediaQuery(MOBILE_QUERY)
  const isPhone = useMediaQuery(PHONE_QUERY)
  if (isPhone) return <ProposalsAccordion />
  return isMobile ? <ProposalsMobile /> : <ProposalsDesktop />
}

/* Miniatura de cada tarjeta: la del artboard donde esa tarjeta está activa. En varios artboards del XD
   quedaron miniaturas copiadas de otra propuesta (p. ej. 02 y 03 con la foto de 01 cuando la activa es 04) */
const THUMBS = {
  wide: thumbsByCard(LAYOUT.wide),
  laptop: thumbsByCard(LAYOUT.laptop),
}

function thumbsByCard(boards: Board[]) {
  const thumbs: Record<string, Card['thumb']> = {}
  for (const board of boards) {
    const card = board.cards.find((item) => item.number === board.active)
    if (card?.thumb) thumbs[card.number] = card.thumb
  }
  return thumbs
}

function ProposalsDesktop() {
  const isLaptop = useMediaQuery(LAPTOP_QUERY)
  const [active, setActive] = useState(0)
  const variant = isLaptop ? 'laptop' : 'wide'
  const board: Board = LAYOUT[variant][active]
  const checkSize = CHECK_SIZE[variant]
  const [prevNav, nextNav] = board.nav
  const strip = board.strip
  const cardsTop = board.cards[0]?.y ?? 0

  const go = (step: number) => setActive((current) => (current + step + PROPOSAL_COUNT) % PROPOSAL_COUNT)

  /* El título es el renglón de 32/40px en ExtraBold que no es el número */
  const isHeading = (line: Line) =>
    line.runs[0].w === 800 && line.runs[0].s >= 32 && !/^0\d$/.test(line.runs[0].t)

  /* En 1366 las tarjetas van dentro de la tira (recortada al ancho visible); en 1920, sueltas en la sección */
  const offsetX = strip ? strip.x : 0
  const offsetY = strip ? cardsTop : 0

  const cards = (
    <>
      {board.cards.map((card) => (
        <ProposalCard
          key={card.number}
          card={{ ...card, thumb: THUMBS[variant][card.number] ?? card.thumb }}
          offsetX={offsetX}
          offsetY={offsetY}
          isActive={card.number === board.active}
          onSelect={() => setActive(Number(card.number) - 1)}
        />
      ))}
      {board.activeAt && (
        <span
          className="proposal-card__outline"
          style={{ left: board.activeAt.x - offsetX, top: board.activeAt.y - offsetY }}
        />
      )}
    </>
  )

  return (
    <section className={`proposals proposals--${variant}`} id="propuestas" style={{ height: board.height }}>
      {board.lines.map((line, index) => (
        <TextLine key={`${active}-${index}`} line={line} heading={isHeading(line)} />
      ))}
      {board.rules.map((rule, index) => (
        <RuleBar key={index} rule={rule} />
      ))}
      {board.checks.map((check, index) => (
        <img
          key={index}
          className="proposals__check"
          src={checkIcon}
          alt=""
          style={{ left: check.x, top: check.y, width: checkSize, height: checkSize }}
        />
      ))}

      <div
        className="proposals__media"
        style={{
          left: board.media.clip[0],
          top: board.media.clip[1],
          width: board.media.clip[2],
          height: board.media.clip[3],
          borderRadius: board.media.clip[4],
        }}
      >
        <img
          key={board.media.src}
          src={IMAGES[board.media.src]}
          alt={ALTS[board.media.src]}
          style={{ left: board.media.x, top: board.media.y, width: board.media.w, height: board.media.h }}
        />
      </div>

      {prevNav && <NavButton nav={prevNav} direction="prev" onClick={() => go(-1)} />}
      {nextNav && <NavButton nav={nextNav} direction="next" onClick={() => go(1)} />}

      {strip ? (
        <div className="proposals__strip" style={{ left: strip.x, top: cardsTop, width: strip.w }}>
          {cards}
        </div>
      ) : (
        cards
      )}
    </section>
  )
}

export default Proposals
