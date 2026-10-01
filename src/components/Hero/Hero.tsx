import heroBg from '../../assets/hero/hero-bg.webp'
import techiMaestre from '../../assets/hero/techi-maestre.webp'
import techi01 from '../../assets/hero/techi-01.webp'
import iconPropuestas from '../../assets/hero/icon-propuestas.svg'
import iconVoluntariado from '../../assets/hero/icon-voluntariado.svg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" aria-hidden="true">
        <img className="hero__bg-img hero__bg-img--left" src={heroBg} alt="" />
        <img className="hero__bg-img hero__bg-img--main" src={heroBg} alt="" />
      </div>

      <picture className="hero__portrait">
        <source media="(min-width: 1024px), (max-width: 767px)" srcSet={techi01} />
        <img src={techiMaestre} alt="Techi Maestre" />
      </picture>

      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-top">
            SE VIENE LO{' '}
            <br className="hero__title-br" />
            MEJOR PARA
          </span>
          <span className="hero__title-accent">SURQUILLO.</span>
        </h1>

        <p className="hero__text">
          <strong>
            Seguridad implacable, salud 24 horas y orden en nuestras{' '}
            <br />
            calles
          </strong>
          . Conoce el plan de Techi Maestre para recuperar la{' '}
          <br />
          tranquilidad de nuestras familias.
        </p>

        <div className="hero__actions">
          <a className="hero__btn hero__btn--primary" href="#propuestas">
            <img src={iconPropuestas} width="24" height="24" alt="" />
            Conoce mis propuestas
          </a>
          <a className="hero__btn hero__btn--outline" href="#voluntariado">
            <img src={iconVoluntariado} width="31.4" height="24" alt="" />
            Súmate al voluntariado
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
