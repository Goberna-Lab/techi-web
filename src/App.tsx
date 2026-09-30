import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import AboutTechi from './components/AboutTechi/AboutTechi'
import Experience from './components/Experience/Experience'
import Quote from './components/Quote/Quote'
import Vision from './components/Vision/Vision'
import Proposals from './components/Proposals/Proposals'
import Gallery from './components/Gallery/Gallery'
import VoteCta from './components/VoteCta/VoteCta'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutTechi />
        <Experience />
        <Quote />
        <Vision />
        <Proposals />
        <Gallery />
        <VoteCta />
      </main>
      <Footer />
    </>
  )
}

export default App
