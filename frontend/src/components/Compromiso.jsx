const Compromiso = () => {
  const compromisos = [
    {
      titulo: "Trazabilidad",
      descripcion: "Seguimiento completo desde la semilla hasta el consumidor final con códigos QR y certificaciones digitales.",
      icono: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      titulo: "Control de Calidad",
      descripcion: "Laboratorios especializados y certificaciones internacionales que garantizan la excelencia en cada producto.",
      icono: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      titulo: "Uso Responsable del Agua",
      descripcion: "Sistemas de riego inteligente y técnicas de conservación que reducen el consumo de agua en un 40%.",
      icono: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1" />
        </svg>
      )
    },
    {
      titulo: "Agricultura Sustentable",
      descripcion: "Prácticas orgánicas y regenerativas que preservan la biodiversidad y mejoran la calidad del suelo.",
      icono: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      titulo: "Comercio Justo",
      descripcion: "Precios justos para productores y condiciones laborales dignas que fortalecen las comunidades rurales.",
      icono: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      titulo: "Innovación Tecnológica",
      descripcion: "Inversión constante en tecnología de vanguardia para optimizar procesos y reducir impacto ambiental.",
      icono: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ]

  return (
    <section id="compromiso" className="py-20 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#305122]/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#122C19] mb-6">
            Nuestro <span className="text-[#DBB75F]">Compromiso</span>
          </h2>
          <p className="text-lg text-[#65776B] max-w-3xl mx-auto leading-relaxed">
            Más que exportar verduras, construimos un futuro sustentable para la agricultura mexicana 
            con responsabilidad social y ambiental en cada decisión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {compromisos.map((compromiso, index) => (
            <div 
              key={index}
              className="group bg-[#305122]/10 backdrop-blur-md border border-[#305122]/20 rounded-2xl p-8 hover:bg-[#305122]/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#DBB75F] rounded-full flex items-center justify-center mb-6 text-[#122C19] group-hover:scale-110 transition-transform duration-300">
                  {compromiso.icono}
                </div>
                
                <h3 className="text-2xl font-bold text-[#122C19] mb-4 group-hover:text-[#305122] transition-colors duration-300">
                  {compromiso.titulo}
                </h3>
                
                <p className="text-[#65776B] leading-relaxed">
                  {compromiso.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#DBB75F] mb-2">100%</div>
              <div className="text-[#65776B]">Trazabilidad</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#DBB75F] mb-2">40%</div>
              <div className="text-[#65776B]">Menos agua</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#DBB75F] mb-2">25+</div>
              <div className="text-[#65776B]">Certificaciones</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#DBB75F] mb-2">500+</div>
              <div className="text-[#65776B]">Familias beneficiadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compromiso
