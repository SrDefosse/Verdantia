const Nosotros = () => {
  return (
    <section id="nosotros" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#122C19] mb-6">
            Sobre <span className="text-[#DBB75F]">Verdantia</span>
          </h2>
          <p className="text-lg text-[#65776B] max-w-3xl mx-auto leading-relaxed">
            Somos una empresa mexicana especializada en la exportación de verduras frescas de la más alta calidad, 
            comprometidos con prácticas sustentables y el desarrollo de nuestras comunidades rurales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#DBB75F] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#122C19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#122C19]">Nuestra Misión</h3>
              </div>
              <p className="text-[#65776B] leading-relaxed">
                Conectar los mejores productos del campo mexicano con mercados internacionales, 
                manteniendo los más altos estándares de calidad y trazabilidad.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#DBB75F] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#122C19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#122C19]">Nuestra Visión</h3>
              </div>
              <p className="text-[#65776B] leading-relaxed">
                Ser la empresa líder en exportación de verduras mexicanas, reconocida por su 
                compromiso con la sustentabilidad y la excelencia operacional.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Campo de verduras mexicanas" 
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#DBB75F]">15+</div>
                  <div className="text-sm text-[#65776B]">Años de experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#DBB75F]">25+</div>
                  <div className="text-sm text-[#65776B]">Países alcanzados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#DBB75F]">100%</div>
                  <div className="text-sm text-[#65776B]">Trazabilidad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros
