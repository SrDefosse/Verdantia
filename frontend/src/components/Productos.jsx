const Productos = () => {
  const productos = [
    {
      nombre: "Limón",
      imagen: "https://images.pexels.com/photos/2363347/pexels-photo-2363347.jpeg",
      descripcion: "Limones frescos y aromáticos con alto contenido de jugo, perfectos para la industria alimentaria y bebidas."
    },
    {
      nombre: "Chile Morrón",
      imagen: "https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg",
      descripcion: "Chiles morrones dulces y crujientes en variedad de colores, ideales para ensaladas y platillos gourmet."
    },
    {
      nombre: "Chile Jalapeño",
      imagen: "https://images.pexels.com/photos/2893540/pexels-photo-2893540.jpeg",
      descripcion: "Chiles jalapeños con el picor perfecto, ideales para dar sabor auténtico mexicano a cualquier platillo."
    },
    {
      nombre: "Aguacate",
      imagen: "https://images.pexels.com/photos/849683/pexels-photo-849683.jpeg",
      descripcion: "Aguacates premium con consistencia cremosa y sabor excepcional, cultivados en las mejores tierras volcánicas."
    },
    {
      nombre: "Limón Persa",
      imagen: "https://plus.unsplash.com/premium_photo-1675237625086-995637f2b112?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descripcion: "Limón persa sin semillas, de piel fina y alto rendimiento de jugo, preferido por chefs internacionales."
    },
    {
      nombre: "Jitomate (todos los tipos)",
      imagen: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg",
      descripcion: "Amplia variedad de jitomates: cherry, bola, roma y saladette, cultivados con técnicas de agricultura sustentable."
    },
    {
      nombre: "Mango",
      imagen: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg",
      descripcion: "Mangos tropicales dulces y jugosos, cosechados en su punto óptimo de maduración para exportación mundial."
    }
  ]

  return (
    <section id="productos" className="py-20 bg-gradient-to-b from-[#FEFEFE] to-[#65776B]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#122C19] mb-6">
            Nuestros <span className="text-[#DBB75F]">Productos</span>
          </h2>
          <p className="text-lg text-[#65776B] max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una amplia variedad de verduras mexicanas de exportación, 
            cada una seleccionada y procesada con los más altos estándares de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122C19]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#122C19] mb-3 group-hover:text-[#DBB75F] transition-colors duration-300">
                  {producto.nombre}
                </h3>
                <p className="text-[#65776B] leading-relaxed">
                  {producto.descripcion}
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-[#DBB75F] font-medium">Exportación Premium</span>
                  <div className="w-8 h-8 bg-[#DBB75F] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-[#122C19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Productos
