import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Escritorio (desde 1024): la página escala para ocupar justo el ancho visible (ver index.css).
// Hasta 1366 se escala el XD laptop y desde 1367 el de 1920; en 1366 y 1920 exactos queda tal cual el XD
function updatePageZoom() {
  const viewport = window.innerWidth
  const width = document.documentElement.clientWidth
  const design = viewport <= 1366 ? 1366 : 1920
  const zoom = viewport < 1024 || viewport === 1366 || viewport === 1920 ? 1 : width / design
  document.documentElement.style.setProperty('--page-zoom', String(zoom))
}
updatePageZoom()
// También cuando aparece o se va la barra de scroll, que cambia el ancho visible sin disparar resize
new ResizeObserver(updatePageZoom).observe(document.documentElement)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
