const Proceso = () => {
  const pasos = [
    {
      numero: "01",
      titulo: "Selección de Productores",
      descripcion: "Trabajamos con productores certificados que cumplen nuestros estándares de calidad y sustentabilidad.",
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      numero: "02", 
      titulo: "Cultivo Controlado",
      descripcion: "Supervisamos cada etapa del cultivo con técnicas sustentables y monitoreo constante de calidad.",
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      numero: "03",
      titulo: "Cosecha Oportuna",
      descripcion: "Cosechamos en el momento óptimo de maduración para garantizar la máxima calidad y frescura.",
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      numero: "04",
      titulo: "Procesamiento y Empaque",
      descripcion: "Procesamos y empacamos con tecnología de punta en instalaciones certificadas internacionalmente.",
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 9h6" />
        </svg>
      )
    },
    {
      numero: "05",
      titulo: "Control de Calidad",
      descripcion: "Realizamos múltiples controles de calidad para asegurar que cada producto cumpla estándares internacionales.",
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      numero: "06",
      titulo: "Logística y Exportación",
      descripcion: "Gestionamos la logística completa hasta el destino final, manteniendo la cadena de frío y trazabilidad.",
      icono: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ]

  return (
    <section id="proceso" className="py-20 bg-[#122C19]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#122C19] mb-6">
            Nuestro <span className="text-[#DBB75F]">Proceso</span>
          </h2>
          <p className="text-lg text-[#65776B] max-w-3xl mx-auto leading-relaxed">
            Un proceso meticuloso que garantiza la más alta calidad desde el campo hasta tu mesa, 
            con trazabilidad completa en cada etapa.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DBB75F] to-[#305122] transform -translate-x-1/2"></div>
          
          {/* Timeline line for mobile */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DBB75F] to-[#305122]"></div>

          <div className="space-y-8 lg:space-y-12">
            {pasos.map((paso, index) => (
              <div 
                key={index}
                className={`relative flex items-start lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8 xl:pr-12' : 'lg:pl-8 xl:pl-12'} ml-16 lg:ml-0`}>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                      <div className="w-16 h-16 bg-[#DBB75F] rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 text-[#122C19] shadow-lg">
                        {paso.icono}
                      </div>
                      <div className="flex-1">
                        <span className="text-3xl lg:text-4xl font-bold text-[#DBB75F] block sm:inline">{paso.numero}</span>
                        <h3 className="text-xl lg:text-2xl font-bold text-[#122C19] mt-1 sm:mt-0 sm:ml-2">{paso.titulo}</h3>
                      </div>
                    </div>
                    <p className="text-[#65776B] leading-relaxed text-sm lg:text-base">
                      {paso.descripcion}
                    </p>
                  </div>
                </div>

                {/* Center dot for desktop */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#DBB75F] rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Timeline dot for mobile */}
                <div className="lg:hidden absolute left-3 transform -translate-x-1/2 w-6 h-6 bg-[#DBB75F] rounded-full border-4 border-white shadow-lg z-10 top-6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proceso
