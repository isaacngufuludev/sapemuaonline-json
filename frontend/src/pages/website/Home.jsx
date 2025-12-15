import Header from "../../components/layout/Header";
import Cursos from "./components/Cursos";
import Hero from "./components/Hero";
import Noticias from "./components/Noticias";
import Testimonial from "./components/Testimonial";
import Footer from "../../components/layout/Footer";
import TopButton from "./components/TopButton";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Noticias />
      <Cursos />
      <Testimonial />
      <Footer />
      <TopButton />
    </div>
  );
}

export default Home;
