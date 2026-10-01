import bannerBukele from '../../assets/bukele/banner-bukele.webp'
import fondoMobile from '../../assets/bukele/fondo-mobile.webp'
import textoMobile from '../../assets/bukele/texto-mobile.webp'
import personas from '../../assets/bukele/personas.webp'
import './PlanBukele.css'

function PlanBukele() {
  return (
    <section className="bukele">
      {/* En mobile el XD usa un fondo vertical y el texto del banner va aparte */}
      <picture>
        <source media="(max-width: 767px)" srcSet={fondoMobile} />
        <img
          className="bukele__bg"
          loading="lazy"
          src={bannerBukele}
          alt="Plan Bukele: para hacer de Surquillo un lugar más seguro para todos"
        />
      </picture>
      <img className="bukele__text" src={textoMobile} loading="lazy" alt="" aria-hidden="true" />
      <img className="bukele__people" src={personas} loading="lazy" alt="Techi Maestre junto a su equipo" />
    </section>
  )
}

export default PlanBukele
