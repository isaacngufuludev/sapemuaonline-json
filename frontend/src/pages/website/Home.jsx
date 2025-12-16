import Header from "../../components/layout/Header";
import Cursos from "./components/Cursos";
import Hero from "./components/Hero";
import Noticias from "./components/Noticias";
import Testimonial from "./components/Testimonial";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Noticias />
      <Cursos />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
