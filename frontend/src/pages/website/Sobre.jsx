import Header from "../../components/layout/Header";
import History from "./components/History";
import Numbers from "./components/Numbers";
import PagesContent from "./components/PagesContent";
import Footer from "../../components/layout/Footer";
import TopButton from "./components/TopButton";
import Instrutores from "./components/Instrutores";

function Sobre() {
  return (
    <div>
      <Header />
      <PagesContent>
        <History />
        <Numbers />
        <Instrutores />
        <Footer />
      </PagesContent>
    </div>
  );
}

export default Sobre;
