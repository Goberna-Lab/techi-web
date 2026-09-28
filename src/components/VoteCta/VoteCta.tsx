import prin from '../../assets/common/prin.webp'
import voteX from '../../assets/vote/vote-x.svg'
import './VoteCta.css'

function VoteCta() {
  return (
    <section className="vote">
      <div className="vote__content">
        <h2 className="vote__title">Surquillo Valiente:</h2>
        <p className="vote__subtitle">
          Este 4 de octubre, vota
          <br />
          seguro y con convicción.
        </p>
      </div>

      <div className="vote__ballot">
        <p className="vote__ballot-label">¡Marca el PRIN!</p>
        <div className="vote__ballot-box">
          <img className="vote__ballot-logo" src={prin} width="186" height="186" alt="PRIN" />
          <img className="vote__ballot-x" src={voteX} width="220.5" height="220.5" alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export default VoteCta
