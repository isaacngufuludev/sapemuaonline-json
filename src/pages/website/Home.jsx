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
import { useNews } from "../../hooks/useNews";

function Home() {
  const { isChatModal, toggle } = useModal();
  const { news } = useNews();

  useEffect(function () {
    toggle();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      {news.length > 0 ? <Noticias /> : ""}
      <Cursos />
      <Testimonial />
      <ChatBtn />
      {isChatModal ? <ChatBoot /> : ""}
      <Footer />
    </div>
  );
}

export default Home;
