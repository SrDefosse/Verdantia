import Navbar from './components/layout/Navbar'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Productos from './components/Productos'
import Proceso from './components/Proceso'
import Compromiso from './components/Compromiso'
import Contacto from './components/Contacto'
import Footer from './components/layout/Footer'
import WAButton from './components/layout/WAButton'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Navbar />
      <Hero />
      <Nosotros />
      <Productos />
      <Proceso />
      <Compromiso />
      <Contacto />
      <Footer />
      <WAButton />
    </div>
  )
}

export default App
