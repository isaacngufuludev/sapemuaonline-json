import Header from "../../components/layout/Header";
import History from "./components/History";
import Numbers from "./components/Numbers";
import PagesContent from "./components/PagesContent";
import Footer from "../../components/layout/Footer";
import Instrutores from "./components/Instrutores";
import ChatBtn from "./components/ChatBtn";
import ChatBoot from "./components/ChatBoot";

import { useModal } from "../../contexts/ModalContext";
import { useEffect } from "react";

function Sobre() {
  const { isChatModal, toggle } = useModal();

  useEffect(function () {
    toggle();
  }, []);

  return (
    <div>
      <Header />
      <PagesContent>
        <History />
        <Numbers />
        <Instrutores />
        <ChatBtn />
        {isChatModal ? <ChatBoot /> : ""}
      </PagesContent>
      <Footer />
    </div>
  );
}

export default Sobre;
