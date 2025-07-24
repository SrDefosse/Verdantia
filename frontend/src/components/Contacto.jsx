import Button1 from './layout/Button1'

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-[#FEFEFE] to-[#122C19]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#122C19] mb-6">
            Contáctanos <span className="text-[#DBB75F]">Hoy</span>
          </h2>
          <p className="text-lg text-[#65776B] max-w-3xl mx-auto leading-relaxed">
            Estamos listos para ser tu socio en exportación de verduras mexicanas. 
            Conecta con nosotros y descubre cómo podemos crecer juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#122C19] mb-6">Envíanos un mensaje</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-[#122C19] mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-[#DBB75F] focus:border-transparent outline-none transition-all duration-300 text-[#122C19] placeholder-[#65776B] shadow-lg hover:shadow-xl focus:shadow-xl"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-[#122C19] mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-[#DBB75F] focus:border-transparent outline-none transition-all duration-300 text-[#122C19] placeholder-[#65776B] shadow-lg hover:shadow-xl focus:shadow-xl"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#122C19] mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-[#DBB75F] focus:border-transparent outline-none transition-all duration-300 text-[#122C19] placeholder-[#65776B] shadow-lg hover:shadow-xl focus:shadow-xl"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-[#122C19] mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-[#DBB75F] focus:border-transparent outline-none transition-all duration-300 text-[#122C19] placeholder-[#65776B] shadow-lg hover:shadow-xl focus:shadow-xl"
                    placeholder="+52 123 456 7890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="pais" className="block text-sm font-medium text-[#122C19] mb-2">
                  País de Destino
                </label>
                <select
                  id="pais"
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-[#DBB75F] focus:border-transparent outline-none transition-all duration-300 text-[#122C19] shadow-lg hover:shadow-xl focus:shadow-xl"
                >
                  <option value="">Selecciona un país</option>
                  <option value="usa">Estados Unidos</option>
                  <option value="canada">Canadá</option>
                  <option value="uk">Reino Unido</option>
                  <option value="germany">Alemania</option>
                  <option value="japan">Japón</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="productos" className="block text-sm font-medium text-[#122C19] mb-2">
                  Productos de Interés
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Limón", "Chile morrón", "Chile jalapeño", "Aguacate", "Limón persa", "Jitomate (todos los tipos)", "Mango"].map((producto) => (
                    <label key={producto} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-white/30 text-[#DBB75F] focus:ring-[#DBB75F] focus:ring-offset-0 bg-white/10 shadow-md"
                      />
                      <span className="ml-2 text-sm text-[#122C19]">{producto}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-[#122C19] mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-[#DBB75F] focus:border-transparent outline-none transition-all duration-300 text-[#122C19] placeholder-[#65776B] resize-none shadow-lg hover:shadow-xl focus:shadow-xl"
                  placeholder="Cuéntanos sobre tus necesidades de importación..."
                ></textarea>
              </div>

              <Button1 className="w-full">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Enviar Mensaje
              </Button1>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#122C19] mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#DBB75F] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#122C19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#122C19] mb-1">Correo Electrónico</h4>
                    <p className="text-[#65776B]">ventas@verdantia.mx</p>
                    <p className="text-[#65776B]">exportaciones@verdantia.mx</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#DBB75F] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#122C19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#122C19] mb-1">Teléfono</h4>
                    <p className="text-[#65776B]">+52 (55) 1234-5678</p>
                    <p className="text-[#65776B]">+52 (55) 8765-4321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#DBB75F] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#122C19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#122C19] mb-1">Dirección</h4>
                    <p className="text-[#65776B]">Av. Reforma 123, Piso 10<br />Col. Centro, CDMX<br />México 06000</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#DBB75F] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#122C19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#122C19] mb-1">Horarios</h4>
                    <p className="text-[#65776B]">Lunes - Viernes: 8:00 - 18:00</p>
                    <p className="text-[#65776B]">Sábado: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#122C19] mb-6">Síguenos</h3>
              <div className="flex space-x-4">
                {[
                  { name: "LinkedIn", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                  { name: "Instagram", icon: "M12 0c-6.627 0-12 5.373-12 12 0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm0 18.5c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-10.5c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm6.5-4.5c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-12 h-12 bg-[#DBB75F] rounded-full flex items-center justify-center text-[#122C19] hover:scale-110 transition-transform duration-300"
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
