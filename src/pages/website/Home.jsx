import Header from "../../components/layout/Header";
import Cursos from "./components/Cursos";
import Hero from "./components/Hero";
import Noticias from "./components/Noticias";
import Testimonial from "./components/Testimonial";
import Footer from "../../components/layout/Footer";
import ChatBtn from "./components/ChatBtn";
import ChatBoot from "./components/ChatBoot";
import { useModal } from "../../contexts/ModalContext";
import { useEffect } from "react";

function Home() {
  const { isChatModal, toggle } = useModal();

  useEffect(function () {
    toggle();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Noticias />
      <Cursos />
      <Testimonial />
      <ChatBtn />
      {isChatModal ? <ChatBoot /> : ""}
      <Footer />
    </div>
  );
}

export default Home;
