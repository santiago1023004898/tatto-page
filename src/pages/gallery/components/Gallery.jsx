import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedImage, setSelectedImage] = useState(null);

  // Categorías de tatuajes
  const categorias = [
    "Todos",
    "Realismo",
    "Traditional",
    "Blackwork",
    "Minimalista",
    "Color",
    "Geométrico",
  ];

  // Array de imágenes (aquí colocas tus imágenes reales)
  const tatuajes = [
    {
      id: 1,
      categoria: "Realismo",
      imagen:"/tattoos/tattoo-1.jpg",
      titulo: "Retrato Realista",
      artista: "Keaf",
    },
    {
      id: 2,
      categoria: "Traditional",
      imagen:"/tattoos/tattoo-2.jpg",
      titulo: "Retrato Tradicional",
      artista: "Keaf",
    },
    {
      id: 3,
      categoria: "Blackwork",
      imagen:"/tattoos/tattoo-3.jpg",
      titulo: "Retrato Blackwork",
      artista: "Keaf",
    },
    {
      id: 4,
      categoria: "Minimalista",
      imagen:"/tattoos/tattoo-4.jpg",
      titulo: "Retrato Minimalista",
      artista: "Keaf",
    },
    {
      id: 5,
      categoria: "Color",
      imagen:"/tattoos/tattoo-5.jpg",
      titulo: "Retrato Colorido",
      artista: "Keaf",
    },
    {
      id: 6,
      categoria: "Geométrico",
      imagen:"/tattoos/tattoo-6.jpg",
      titulo: "Retrato Geométrico",
      artista: "Keaf",
    },
    {
      id: 7,
      categoria: "Realismo",
      imagen:"/tattoos/tattoo-7.jpg",
      titulo: "Retrato Realista",
      artista: "Keaf",
    },
    {
      id: 8,
      categoria: "Traditional",
      imagen:"/tattoos/tattoo-8.jpg",
      titulo: "Retrato Tradicional",
      artista: "Keaf",
    },
    {
      id: 9,
      categoria: "Blackwork",
      imagen:"/tattoos/tattoo-9.jpg",
      titulo: "Retrato Blackwork",
      artista: "Keaf",
    },
    {
      id: 10,
      categoria: "Color",
      imagen:"/tattoos/tattoo-10.jpg",
      titulo: "Retrato Colorido",
      artista: "Keaf",
    },
    {
      id: 11,
      categoria: "Minimalista",
      imagen:"/tattoos/tattoo-11.jpg",
      titulo: "Retrato Minimalista",
      artista: "Keaf",
    },
    {
      id: 12,
      categoria: "Geométrico",
      imagen:"/tattoos/tattoo-12.jpg",
      titulo: "Retrato Geométrico",
      artista: "Keaf",
    },
    {
      id: 13,
      categoria: "Geométrico",
      imagen:"/tattoos/tattoo-13.jpg",
      titulo: "Retrato Geométrico",
      artista: "Keaf",
    },
    {
      id: 14,
      categoria: "Geométrico",
      imagen:"/tattoos/tattoo-14.jpg",
      titulo: "Retrato Geométrico",
      artista: "Keaf",
    },
    {
      id: 15,
      categoria: "Geométrico",
      imagen:"/tattoos/tattoo-15.jpg",
      titulo: "Retrato Geométrico",
      artista: "Keaf",
    },
    {
      id: 16,
      categoria: "Geométrico",
      imagen:"/tattoos/tattoo-16.jpg",
      titulo: "Retrato Geométrico",
      artista: "Keaf",
    },
    {
      id: 17,
      categoria: "Geométrico",
      imagen:"/tattoos/tattoo-17.jpg",
      titulo: "Retrato Geométrico",
      artista: "Keaf",
    },
    {
      id: 18,
      categoria: "Geométrico",
      imagen:"/tattoos/tattoo-18.jpg",
      titulo: "Retrato Geométrico",
      artista: "Keaf",
    },
    {
      id: 19,
      categoria: "Geométrico",
      imagen:"/tattoos/tattoo-19.jpg",
      titulo: "Retrato Geométrico",
      artista: "Keaf",
    },
    {
      id: 20,
      categoria: "Geométrico",
      imagen:"/tattoos/tattoo-20.jpg",
      titulo: "Retrato Geométrico",
      artista: "Keaf",
    },
    {
      id: 21,
      categoria: "Geométrico",
      imagen:"/tattoos/tattoo-21.jpg",
      titulo: "Retrato Geométrico",
      artista: "Keaf",
    },
    {
      id: 22,
      categoria: "Geométrico",
      imagen:"/tattoos/tattoo-22.jpg",
      titulo: "Retrato Geométrico",
      artista: "Keaf",
    },
  ];

  // Filtrar tatuajes por categoría
  const tatuajesFiltrados =
    selectedCategory === "Todos"
      ? tatuajes
      : tatuajes.filter((t) => t.categoria === selectedCategory);

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-widest mb-4 drop-shadow-[0_0_20px_rgba(139,0,0,0.5)]">
            Nuestra Galería
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#8B0000] to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explora nuestros mejores trabajos y estilos. Cada tatuaje cuenta una
            historia única.
          </p>
        </motion.div>

        {/* FILTROS DE CATEGORÍAS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categorias.map((categoria) => (
            <motion.button
              key={categoria}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(categoria)}
              className={`
                px-6 py-2.5 rounded-full font-bold uppercase tracking-wide text-sm
                transition-all duration-300
                ${
                  selectedCategory === categoria
                    ? "bg-gradient-to-r from-[#8B0000] to-red-700 text-white shadow-[0_0_20px_rgba(139,0,0,0.5)]"
                    : "bg-gray-900 text-gray-400 border border-gray-700 hover:border-[#8B0000] hover:text-white"
                }
              `}
            >
              {categoria}
            </motion.button>
          ))}
        </motion.div>

        {/* GRID DE IMÁGENES */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {tatuajesFiltrados.map((tatuaje, index) => (
              <motion.div
                key={tatuaje.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-gray-900"
                onClick={() => setSelectedImage(tatuaje)}
              >
                {/* IMAGEN */}
                <motion.img
                  src={tatuaje.imagen}
                  alt={tatuaje.titulo}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* OVERLAY CON INFO */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-white font-bold text-lg mb-1">
                      {tatuaje.titulo}
                    </h3>
                    <p className="text-[#8B0000] text-sm font-semibold mb-2">
                      {tatuaje.categoria}
                    </p>
                    <p className="text-gray-400 text-xs">
                      Por: {tatuaje.artista}
                    </p>
                  </motion.div>
                </div>

                {/* BADGE DE CATEGORÍA */}
                <div className="absolute top-3 right-3 bg-[#8B0000]/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-bold uppercase">
                    {tatuaje.categoria}
                  </span>
                </div>

                {/* EFECTO DE BRILLO */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* MENSAJE SI NO HAY RESULTADOS */}
        {tatuajesFiltrados.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-xl">
              No hay tatuajes en esta categoría todavía.
            </p>
          </motion.div>
        )}

        {/* MODAL DE IMAGEN EXPANDIDA */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* BOTÓN CERRAR */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-[#8B0000] transition-colors"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="bg-gradient-to-br from-gray-900 to-black border border-[#8B0000]/30 rounded-lg overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* IMAGEN */}
                    <div className="relative aspect-square lg:aspect-auto">
                      <img
                        src={selectedImage.imagen}
                        alt={selectedImage.titulo}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* INFO */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="inline-block bg-[#8B0000] text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-4">
                          {selectedImage.categoria}
                        </span>
                      </div>

                      <h2 className="text-4xl font-black text-white mb-3">
                        {selectedImage.titulo}
                      </h2>

                      <p className="text-gray-400 mb-6">
                        Artista:{" "}
                        <span className="text-[#8B0000] font-bold">
                          {selectedImage.artista}
                        </span>
                      </p>

                      <div className="border-t border-gray-700 pt-6 mb-6">
                        <p className="text-gray-300 leading-relaxed">
                          Este diseño representa lo mejor de nuestro trabajo en
                          estilo {selectedImage.categoria.toLowerCase()}. Cada
                          detalle ha sido cuidadosamente ejecutado para crear
                          una pieza de arte permanente única.
                        </p>
                      </div>

                      <a
                        href="https://wa.me/+12133278565?text=Hola! Me interesa un tatuaje similar al que vi en la galería"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center justify-center gap-3
                          bg-gradient-to-r from-[#8B0000] to-red-700 
                          text-white font-bold py-4 px-6 rounded-lg 
                          uppercase tracking-wide
                          hover:shadow-[0_0_30px_rgba(139,0,0,0.6)] 
                          transition-all duration-300 
                          hover:scale-105
                        "
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Agenda tu tatuaje
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
