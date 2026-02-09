import Hero from "./components/Hero";
import QRCode from "./components/QRCode";
import Socials from "./components/Socials";

function Home() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed relative overflow-hidden"
        style={{ backgroundImage: "url(/fondos/Fondo.jpg)" }}
      >
        <Hero />
        <QRCode />
      </div>
      <Socials />
    </>
  );
}

export default Home;
