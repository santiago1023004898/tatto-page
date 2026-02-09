import icon2 from "/icons/icon2.png";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 border-t border-[#8B0000]/40">
      
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        
        {/* Marca + mensaje */}
        <div className="flex flex-col">
          <span className="text-white font-bold tracking-wide">
            keaf_tattoo
          </span>
          <span className="text-sm">
            © 2026 · Arte en la piel
          </span>
        </div>

        {/* Icono */}
        <img
          src={icon2}
          alt="icon"
          className="w-[62px] h-[58px] opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>

    </footer>
  );
};

export default Footer;
