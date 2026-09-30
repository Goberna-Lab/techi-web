import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// La página escala para ocupar justo el ancho visible (ver index.css). Mobile (hasta 767) escala el XD
// de 430, de 1024 a 1366 el XD laptop y desde 1367 el de 1920; en 430, 1366 y 1920 exactos queda tal cual.
// Tablet (768–1023) no tiene XD y va en flujo, sin escalar
function updatePageZoom() {
  const viewport = window.innerWidth
  const width = document.documentElement.clientWidth
  let zoom = 1
  if (viewport < 768) zoom = viewport === 430 ? 1 : width / 430
  else if (viewport >= 1024 && viewport !== 1366 && viewport !== 1920) zoom = width / (viewport <= 1366 ? 1366 : 1920)
  document.documentElement.style.setProperty('--page-zoom', String(zoom))
}
updatePageZoom()
// También cuando aparece o se va la barra de scroll, que cambia el ancho visible sin disparar resize
new ResizeObserver(updatePageZoom).observe(document.documentElement)

// iPhone agranda la página al tocar un campo con letra menor a 16px (el formulario del XD mobile usa 14).
// maximum-scale lo evita, y en iOS no bloquea el zoom con los dedos. Solo en iOS: en Android sí lo bloquearía
if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
  document.querySelector('meta[name="viewport"]')?.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
