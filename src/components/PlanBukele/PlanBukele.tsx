import bannerBukele from '../../assets/bukele/banner-bukele.webp'
import personas from '../../assets/bukele/personas.webp'
import './PlanBukele.css'

function PlanBukele() {
  return (
    <section className="bukele">
      <img
        className="bukele__bg"
        loading="lazy"
        src={bannerBukele}
        alt="Plan Bukele: para hacer de Surquillo un lugar más seguro para todos"
      />
      <img className="bukele__people" src={personas} loading="lazy" alt="Techi Maestre junto a su equipo" />
    </section>
  )
}

export default PlanBukele
