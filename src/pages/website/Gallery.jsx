import Header from "../../components/layout/Header";
import GalleryList from "./components/GalleryList";
import PagesContent from "./components/PagesContent";
import Footer from "../../components/layout/Footer";
import { useEffect } from "react";
import { useModal } from "../../contexts/ModalContext";
import ChatBoot from "./components/ChatBoot";
import ChatBtn from "./components/ChatBtn";

function Gallery() {
  const { isChatModal, toggle } = useModal();

  useEffect(function () {
    toggle();
  }, []);

  return (
    <div>
      <Header />
      <PagesContent>
        <GalleryList />
        <ChatBtn />
        {isChatModal ? <ChatBoot /> : ""}
      </PagesContent>

      <Footer />
    </div>
  );
}

export default Gallery;
