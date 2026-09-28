import techiArco from '../../assets/about/techi-maestre-arco.webp'
import iconArrow from '../../assets/about/icon-arrow.svg'
import statHome from '../../assets/about/stat-home.svg'
import statWork from '../../assets/about/stat-work.svg'
import './AboutTechi.css'

function AboutTechi() {
  return (
    <section className="about" id="conoce-a-techi">
      <div className="about__media">
        <img src={techiArco} alt="María Teresa Maestre" />
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
          María Teresa Maestre Mejía ha construido aquí su familia, su trayectoria y su compromiso con
          <br />
          las personas.
          <br />
          <br />
          Con más de 30 años de experiencia profesional, hoy decide poner su capacidad de gestión al
          <br />
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
