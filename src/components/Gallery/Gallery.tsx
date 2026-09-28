import galleryMain from '../../assets/gallery/gallery-main.webp'
import gallery1 from '../../assets/gallery/gallery-1.webp'
import gallery2 from '../../assets/gallery/gallery-2.webp'
import gallery3 from '../../assets/gallery/gallery-3.webp'
import gallery4 from '../../assets/gallery/gallery-4.webp'
import './Gallery.css'

const PHOTOS = [gallery1, gallery2, gallery3, gallery4]

function Gallery() {
  return (
    <section className="gallery" id="galeria">
      <p className="gallery__eyebrow">Nuestras propuestas</p>
      <h2 className="gallery__title">Surquillo, de cerca</h2>
      <p className="gallery__text">
        Recorridos, encuentros momentos compartidos con los vecinos en distintos espacios del distrito.
      </p>

      <div className="gallery__grid">
        <div className="gallery__main">
          <img src={galleryMain} alt="Techi Maestre hablando con los vecinos" />
        </div>
        <div className="gallery__photos">
          {PHOTOS.map((photo) => (
            <img key={photo} src={photo} alt="Techi Maestre en actividades con vecinos de Surquillo" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
