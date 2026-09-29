import arc from '../../assets/vision/arc.svg'
import prin from '../../assets/common/prin.webp'
import './Vision.css'

function Vision() {
  return (
    <section className="vision">
      <img className="vision__arc" src={arc} width="130.5" height="260.75" alt="" aria-hidden="true" />

      <div className="vision__content">
        <h2 className="vision__title">
          <span className="vision__title-accent">Un nuevo Surquillo:</span>
          <br />
          más seguro, ordenado y con
          <br />
          oportunidades para todos
        </h2>
        <p className="vision__text">
          Conoce nuestras principales propuestas para construir{' '}
          <br className="br-laptop" />
          un distrito{' '}
          <br className="br-wide" />
          moderno, humano y preparado para los{' '}
          <br className="br-laptop" />
          desafíos del futuro.
        </p>
      </div>

      <div className="vision__brand">
        <img src={prin} width="174" height="174" alt="PRIN" />
        <p className="vision__brand-name">
          <span className="vision__brand-top">TECHI</span>
          <span className="vision__brand-bottom">MAESTRE</span>
        </p>
      </div>
    </section>
  )
}

export default Vision
