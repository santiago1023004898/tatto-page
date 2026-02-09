import { NavLink } from "react-router-dom";
import icon1 from "/icons/icon1.png";

const Navbar = () => {
  const links = [
    { nombre: "Inicio", ruta: "/" },
    { nombre: "Galería", ruta: "/galeria" },  // Sin acento
    { nombre: "Contacto", ruta: "/contacto" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-b from-black via-black to-black/95 backdrop-blur-sm px-6 md:px-12 py-4 flex justify-between items-center z-50 shadow-2xl border-b border-[#8B0000]/30">

      {/* LOGO */}
      <div className="flex items-center gap-4">
        <div className="relative group">
          <div className="absolute inset-0 bg-[#8B0000] blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          <img
            src={icon1}
            alt="Tattoo Art Icon"
            className="relative w-12 h-12 object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest font-[Impact] drop-shadow-[0_0_10px_rgba(139,0,0,0.5)]">
             Keaf Tattoo
          </h1>
          <span className="text-[#8B0000] text-xs font-semibold tracking-wider uppercase">
            Ink Studio
          </span>
        </div>
      </div>

      {/* MENÚ */}
      <ul className="hidden md:flex gap-8 lg:gap-12 list-none m-0 p-0">
        {links.map((item) => (
          <li key={item.nombre} className="group">
            <NavLink
              to={item.ruta}
              className={({ isActive }) =>
                `text-white text-base lg:text-lg font-bold uppercase tracking-wide 
                 relative py-2 px-1 transition-all duration-300
                 hover:text-[#8B0000]
                 ${isActive ? "text-[#8B0000]" : ""}`
              }
            >
              {item.nombre}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#8B0000] to-red-600 transition-all duration-300 group-hover:w-full`}
                    style={{ width: '0%' }}>
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* BOTÓN WHATSAPP */}
      <a
        href="https://wa.me/+12133278565"
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative overflow-hidden
          px-6 md:px-8 py-2.5 md:py-3
          bg-gradient-to-r from-[#8B0000] to-red-700
          border-2 border-white/20
          text-white font-bold uppercase text-sm md:text-base tracking-wide
          shadow-[0_0_20px_rgba(139,0,0,0.4)]
          transition-all duration-300
          hover:shadow-[0_0_30px_rgba(139,0,0,0.6)]
          hover:border-white
          hover:scale-105
          group
        "
      >
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
        <span className="relative flex items-center gap-2">
          <svg 
            className="w-5 h-5 animate-pulse" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Agenda Ya
        </span>
      </a>

      {/* MENÚ MÓVIL (opcional - botón hamburguesa) */}
      <button className="md:hidden text-white text-2xl">
        ☰
      </button>
    </nav>
  );
};

export default Navbar;