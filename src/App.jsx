import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import './App.css'
import './fonts/Santio/SantioBold.ttf'
import './fonts/Santio/SantioBoldline.ttf'
import './fonts/Santio/SantioRegular.ttf'
import Work from "./components/Work"
import Card from "./components/Card"
import Footer from "./components/Footer"



function App() {


  return (
    <>
    <video autoPlay muted loop className="bg-video">
      <source src="/bg-apocalipstick.webm" type="video/webm" />
    </video>
    <Navbar />
    <Hero />
    <About />
    <Work />
    <Card />
    <Footer />
    </>
  )
}

export default App
