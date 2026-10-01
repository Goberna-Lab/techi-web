import techiArco from '../../assets/about/techi-maestre-arco.webp'
import techi02 from '../../assets/about/techi-02.webp'
import iconArrow from '../../assets/about/icon-arrow.svg'
import statHome from '../../assets/about/stat-home.svg'
import statWork from '../../assets/about/stat-work.svg'
import './AboutTechi.css'

function AboutTechi() {
  return (
    <section className="about" id="conoce-a-techi">
      <div className="about__media">
        {/* Arco rojo del XD (trazo de 270 en 1920, 250 en 1366 y 155 en mobile), en coordenadas de la sección */}
        <svg className="about__arc about__arc--wide" viewBox="0 0 864 819" aria-hidden="true">
          <path
            transform="matrix(0.7431448 0.6691306 -0.6691306 0.7431448 558.2637 -193.0428)"
            d="M 0.5 0.5 C 273.0117 0.5 494.2955 221.7838 494.2955 494.2955 C 494.2955 766.8071 273.0117 988.0909 0.5 988.0909"
            strokeWidth="270"
          />
        </svg>
        <svg className="about__arc about__arc--laptop" viewBox="0 0 720 698" aria-hidden="true">
          <path
            transform="matrix(0.7431448 0.6691306 -0.6691306 0.7431448 404.9412 -160.174)"
            d="M 0 0 C 226.942 0 411.2226 184.2805 411.2226 411.2226 C 411.2226 638.1646 226.942 822.4451 0 822.4451"
            strokeWidth="250"
          />
        </svg>
        <svg className="about__arc about__arc--phone" viewBox="0 0 430 416" aria-hidden="true">
          <path
            transform="matrix(0.7431448 0.6691306 -0.6691306 0.7431448 241.8399 -95.6594)"
            d="M 0 0 C 135.5348 0 245.5912 110.0564 245.5912 245.5913 C 245.5912 381.1261 135.5348 491.1825 0 491.1825"
            strokeWidth="155"
          />
        </svg>
        <picture>
          <source media="(min-width: 1024px), (max-width: 767px)" srcSet={techi02} />
          <img src={techiArco} alt="María Teresa Maestre" />
        </picture>
      </div>

      <div className="about__content">
        <p className="about__eyebrow">Conoce a Techi</p>

        <h2 className="about__title">
          <span className="about__title-name">MARÍA TERESA</span>
          <span className="about__title-accent">MAESTRE</span>
        </h2>

        <p className="about__text">
          <strong>Una vecina con carácter y corazón al servicio de Surquillo</strong>
          <br />
          28 años haciendo de Surquillo su hogar.
          <br />
          María Teresa Maestre Mejía ha construido aquí su familia, su trayectoria y{' '}
          <br className="br-laptop" />
          su compromiso con{' '}
          <br className="br-wide" />
          las personas.
          <br />
          <br />
          Con más de 30 años de experiencia profesional, hoy decide poner su{' '}
          <br className="br-laptop" />
          capacidad de gestión al{' '}
          <br className="br-wide" />
          servicio del distrito que eligió para vivir.
        </p>

        <a className="about__btn" href="#saber-mas">
          Saber más
          <img src={iconArrow} width="19.2" height="16" alt="" />
        </a>

        <div className="about__stats">
          <div className="about__stat about__stat--years">
            <img className="about__stat-badge" src={statHome} width="60.33" height="60.33" alt="" />
            <div className="about__stat-body">
              <p className="about__stat-number">28</p>
              <p className="about__stat-label about__stat-label--sm">
                Años en
                <br />
                Surquillo
              </p>
            </div>
          </div>

          <span className="about__stats-divider" aria-hidden="true" />

          <div className="about__stat about__stat--experience">
            <img className="about__stat-badge" src={statWork} width="60.33" height="60.33" alt="" />
            <div className="about__stat-body">
              <p className="about__stat-number">
                30<span className="about__stat-plus">+</span>
              </p>
              <p className="about__stat-label about__stat-label--md">
                Años de experiencia
                <br />
                profesional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutTechi
