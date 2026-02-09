import qrImg from "/icons/qr.jpeg";

const QRCode = () => {
  return (
    <div className="fixed bottom-10 right-10 z-10 group">
      <img
        src={qrImg}
        alt="QR Code - Escanea para contactar"
        className="w-36 h-36 md:w-44 md:h-44 p-4 bg-black/80 rounded-3xl border-2 border-[#ff3333] shadow-[0_10px_40px_rgba(255,51,51,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_15px_50px_rgba(255,51,51,0.6)]"
      />
      <p className="text-white text-xs text-center mt-3 [text-shadow:0_2px_10px_rgb(0_0_0_/_80%)]">
        Escanea aquí
      </p>
    </div>
  );
};

export default QRCode;
