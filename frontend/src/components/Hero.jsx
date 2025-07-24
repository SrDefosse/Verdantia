import Button1 from './layout/Button1'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#122C19]/80 to-[#305122]/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80')`
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-[#DBB75F]">Verduras Mexicanas</span>
            <br />
            de Calidad Mundial
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Exportamos los mejores productos del campo mexicano con trazabilidad completa y compromiso sustentable
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button1 href="#productos" size="lg">
              Conoce Nuestros Productos
            </Button1>
            <button className="text-white border border-white/30 px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Ver Video
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
