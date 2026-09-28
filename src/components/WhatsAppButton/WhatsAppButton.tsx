import whatsappIcon from '../../assets/common/whatsapp.svg'
import './WhatsAppButton.css'

/* Botón flotante: en XD es un elemento fijo (x 1656, y 996 en el viewport de 1080) */
function WhatsAppButton() {
  return (
    <a className="whatsapp-button" href="#whatsapp" aria-label="Escríbenos por WhatsApp">
      <img src={whatsappIcon} width="63.75" height="63.75" alt="" />
    </a>
  )
}

export default WhatsAppButton
