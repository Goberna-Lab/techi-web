import iconSurquillo from '../../assets/experience/icon-surquillo.svg'
import iconTrayectoria from '../../assets/experience/icon-trayectoria.svg'
import iconServicio from '../../assets/experience/icon-servicio.svg'
import './Experience.css'

function Experience() {
  return (
    <section className="experience">
      <div className="experience__card">
        <h2 className="experience__title">
          Experiencia que nace
          <br />
          <span className="experience__title-accent">del compromiso</span>
        </h2>

        <div className="experience__items">
          <article className="experience__item experience__item--surquillo">
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

          <article className="experience__item experience__item--trayectoria">
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

          <article className="experience__item experience__item--servicio">
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
      </div>
    </section>
  )
}

export default Experience
