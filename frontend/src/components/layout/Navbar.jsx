import { useState, useRef, useEffect } from 'react'
import Button2 from './Button2'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <nav ref={menuRef} className="fixed top-0 left-0 right-0 z-50 bg-[#122C19]/90 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/verdantia-logo.png" 
              alt="Verdantia" 
              className="h-24 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#nosotros" className="text-white hover:text-[#DBB75F] transition-colors duration-300 px-3 py-2 text-sm font-medium">
                Nosotros
              </a>
              <a href="#productos" className="text-white hover:text-[#DBB75F] transition-colors duration-300 px-3 py-2 text-sm font-medium">
                Productos
              </a>
              <a href="#proceso" className="text-white hover:text-[#DBB75F] transition-colors duration-300 px-3 py-2 text-sm font-medium">
                Proceso
              </a>
              <a href="#compromiso" className="text-white hover:text-[#DBB75F] transition-colors duration-300 px-3 py-2 text-sm font-medium">
                Compromiso
              </a>
              <a href="#contacto" className="text-white hover:text-[#DBB75F] transition-colors duration-300 px-3 py-2 text-sm font-medium">
                Contacto
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button2 href="#contacto">
              Contáctanos
            </Button2>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-[#DBB75F] transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              <svg 
                className={`h-6 w-6 transform transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible rounded-lg' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-6 space-y-1 bg-[#122C19]/95 backdrop-blur-md border-t border-white/10 rounded-lg shadow-lg mt-4">
            <a 
              href="#nosotros" 
              onClick={closeMenu}
              className="block text-white hover:text-[#DBB75F] hover:bg-white/10 transition-all duration-300 px-3 py-2 text-base font-medium rounded-lg"
            >
              Nosotros
            </a>
            <a 
              href="#productos" 
              onClick={closeMenu}
              className="block text-white hover:text-[#DBB75F] hover:bg-white/10 transition-all duration-300 px-3 py-2 text-base font-medium rounded-lg"
            >
              Productos
            </a>
            <a 
              href="#proceso" 
              onClick={closeMenu}
              className="block text-white hover:text-[#DBB75F] hover:bg-white/10 transition-all duration-300 px-3 py-2 text-base font-medium rounded-lg"
            >
              Proceso
            </a>
            <a 
              href="#compromiso" 
              onClick={closeMenu}
              className="block text-white hover:text-[#DBB75F] hover:bg-white/10 transition-all duration-300 px-3 py-2 text-base font-medium rounded-lg"
            >
              Compromiso
            </a>
            <a 
              href="#contacto" 
              onClick={closeMenu}
              className="block text-white hover:text-[#DBB75F] hover:bg-white/10 transition-all duration-300 px-3 py-2 text-base font-medium rounded-lg"
            >
              Contacto
            </a>
            <div className="pt-4 px-3">
              <Button2 href="#contacto" onClick={closeMenu}>
                Contáctanos
              </Button2>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
