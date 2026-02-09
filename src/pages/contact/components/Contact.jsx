import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoTatuaje: "",
    fecha: "",
    mensaje: ""
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construir mensaje para WhatsApp
    const mensaje = `
🎨 *Nueva Solicitud de Cita*

👤 *Nombre:* ${formData.nombre}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.telefono}
🖊️ *Tipo de Tatuaje:* ${formData.tipoTatuaje}
📅 *Fecha Preferida:* ${formData.fecha}
💬 *Mensaje:* ${formData.mensaje}
    `.trim();

    const whatsappURL = `https://wa.me/+12133278565?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappURL, '_blank');
    
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
    
    // Limpiar formulario
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      tipoTatuaje: "",
      fecha: "",
      mensaje: ""
    });
  };

  const redesSociales = [
    {
      nombre: "Instagram",
      icono: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: "https://instagram.com/tattooart",
      color: "hover:text-pink-500"
    },
    {
      nombre: "Facebook",
      icono: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: "https://facebook.com/tattooart",
      color: "hover:text-blue-500"
    },
    {
      nombre: "TikTok",
      icono: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      url: "https://tiktok.com/@tattooart",
      color: "hover:text-black"
    },
    {
      nombre: "WhatsApp",
      icono: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      url: "https://wa.me/+12133278565",
      color: "hover:text-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-widest mb-4 drop-shadow-[0_0_20px_rgba(139,0,0,0.5)]">
            Contáctanos
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#8B0000] to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos listos para hacer realidad tu próximo tatuaje. Agenda tu cita y comencemos a crear arte juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* FORMULARIO */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-[#8B0000]/30 rounded-lg p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-[#8B0000]">📋</span>
              Agenda tu Cita
            </h2>
            
            {enviado && (
              <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg mb-6 animate-pulse">
                ✓ Solicitud enviada. Te contactaremos pronto por WhatsApp.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">
                    Tipo de Tatuaje *
                  </label>
                  <select
                    name="tipoTatuaje"
                    value={formData.tipoTatuaje}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                  >
                    <option value="">Selecciona...</option>
                    <option value="Realismo">Realismo</option>
                    <option value="Traditional">Traditional</option>
                    <option value="Blackwork">Blackwork</option>
                    <option value="Minimalista">Minimalista</option>
                    <option value="Color">Color</option>
                    <option value="Cover-up">Cover-up</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">
                    Fecha Preferida *
                  </label>
                  <input
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-2">
                  Cuéntanos tu idea *
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#8B0000] transition-colors resize-none"
                  placeholder="Describe el tatuaje que deseas, tamaño, ubicación, referencias..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#8B0000] to-red-700 text-white font-bold py-4 rounded-lg uppercase tracking-wide hover:shadow-[0_0_30px_rgba(139,0,0,0.6)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Enviar por WhatsApp
              </button>
            </form>
          </div>

          {/* INFO Y MAPA */}
          <div className="space-y-8">
            
            {/* INFORMACIÓN */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#8B0000]/30 rounded-lg p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#8B0000]">📍</span>
                Encuéntranos
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#8B0000]/20 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Dirección</h3>
                    <p className="text-gray-400">617 n center<br />ST joliet</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#8B0000]/20 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Horarios</h3>
                    <p className="text-gray-400">
                      Lun - Lun: 08:00 AM - 10:00 PM<br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#8B0000]/20 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Teléfono</h3>
                    <a href="tel:+12133278565" className="text-gray-400 hover:text-[#8B0000] transition-colors">
                      +1 (213) 327-8565
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* MAPA */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#8B0000]/30 rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2986.557428898758!2d-88.09445492494717!3d41.535526371281506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e612d62b320bf%3A0x69827e8f76c28479!2s617%20N%20Center%20St%2C%20Joliet%2C%20IL%2060435%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1770596624329!5m2!1ses!2sco"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Ubicación Tattoo Art"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>

            {/* REDES SOCIALES */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#8B0000]/30 rounded-lg p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#8B0000]">🔗</span>
                Síguenos
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                {redesSociales.map((red) => (
                  <a 
                    key={red.nombre}
                    href={red.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 bg-black/50 border border-gray-700 px-4 py-3 rounded-lg transition-all duration-300 hover:border-[#8B0000] hover:scale-105 ${red.color} group`}
                  >
                    <span className="text-white group-hover:scale-110 transition-transform">
                      {red.icono}
                    </span>
                    <span className="text-white font-semibold">{red.nombre}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;