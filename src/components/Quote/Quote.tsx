import quoteBg from '../../assets/quote/quote-bg.webp'
import './Quote.css'

function Quote() {
  return (
    <section className="quote">
      <img className="quote__bg" src={quoteBg} alt="" aria-hidden="true" />
      <div className="quote__overlay" aria-hidden="true" />

      <blockquote className="quote__content">
        <p className="quote__title">
          <span className="quote__line quote__line--md">No vengo a prometer</span>
          <span className="quote__line quote__line--xl">lo imposible</span>
          <span className="quote__line quote__line--md quote__line--last">ni a improvisar;</span>
        </p>

        <p className="quote__text">
          vengo como madre y vecina a{' '}
          <br className="br-wide" />
          trabajar sin{' '}
          <br className="br-laptop" />
          descanso para devolverle{' '}
          <br className="br-wide" />
          la paz y el orgullo{' '}
          <br className="br-laptop" />a Surquillo.
        </p>

        <footer className="quote__author">Techi Maestre</footer>
      </blockquote>
    </section>
  )
}

export default Quote
