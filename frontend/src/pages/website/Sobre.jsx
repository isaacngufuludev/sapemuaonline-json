import Header from "../../components/layout/Header";
import History from "./components/History";
import Numbers from "./components/Numbers";
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
      <History />
      <Numbers />
      <Instrutores />
      <ChatBtn />
      {isChatModal ? <ChatBoot /> : ""}
      <Footer />
    </div>
  );
}

export default Sobre;
