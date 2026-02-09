import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-5">
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-[#8B0000]/30 z-[1]" />

      {/* Contenido Principal */}
      <div className="relative z-[2] text-center max-w-4xl [animation:fadeInUp_1s_ease-out]">
        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl pt-20 font-black text-white uppercase tracking-[0.5rem] mb-5 leading-tight [text-shadow:3px_3px_0_#8B0000,6px_6px_0_#660000,9px_9px_20px_rgba(0,0,0,0.9)]">
          Arte en la
          <span className="block bg-gradient-to-r from-[#ff3333] via-red-400 to-red-300 bg-clip-text text-transparent [animation:glow_2s_ease-in-out_infinite_alternate]">
            PIEL
          </span>
        </h1>

        {/* Línea decorativa */}
        <div className="w-52 h-1 bg-gradient-to-r from-transparent via-[#ff3333] to-transparent mx-auto my-8 shadow-[0_0_20px_rgba(255,51,51,0.6)]" />

        {/* Subtítulo */}
        <p className="text-lg md:text-2xl text-gray-200 font-light tracking-[0.2rem] mb-5 leading-relaxed [text-shadow:2px_2px_10px_rgba(0,0,0,0.8)]">
          Diseño de tatuajes personalizados con identidad
        </p>

        {/* Frase destacada */}
        <p className="text-base md:text-xl text-red-400 italic font-medium mb-12 [text-shadow:0_0_15px_rgb(255_51_51_/_50%)]">
          "Cada diseño es una historia marcada para toda la vida"
        </p>

        {/* Botones CTA */}
        <div className="flex gap-6 justify-center flex-wrap mb-16">
          <Link
            to="/galeria"
            className="px-11 py-4 bg-gradient-to-br from-[#8B0000] to-[#ff3333] border-2 border-[#ff3333] rounded-full text-white text-lg font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_8px_30px_rgba(255,51,51,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,51,51,0.6)]"
          >
            🎨 Ver Galería
          </Link>

          <a
            href="https://wa.me/+12133278565"
            target="_blank"
            rel="noopener noreferrer"
            className="px-11 py-4 bg-transparent border-2 border-white rounded-full text-white text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(255,255,255,0.3)]"
          >
            💬 Agenda tu Cita
          </a>
        </div>

        {/* Stats / Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { icon: "⚡", text: "Diseños Únicos" },
            { icon: "🏆", text: "+5 Años Exp." },
            { icon: "✨", text: "Higiene Total" },
            { icon: "🎯", text: "Personalizado" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-5 bg-black/50 border border-[#ff3333]/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:bg-[#8B0000]/30 hover:border-[#ff3333] hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="text-white text-sm font-semibold tracking-wide m-0">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] animate-bounce-slow">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full relative">
          <div className="w-1.5 h-2.5 bg-white rounded-sm absolute top-2 left-1/2 -translate-x-1/2 animate-scroll" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
