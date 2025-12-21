import Title3 from "../../../../components/ui/Title3";
import AdminButton from "../AdminButton";
import AdminHeading from "../AdminHeading";
import AdminNewsLayout from "./AdminNewsLayout";
import AdminNewsList from "./AdminNewsList";
import AdminAddHeader from "../AdminAddHeader";
import Title4 from "../../../../components/ui/Title4";
import NewsModal from "./NewsModal";
import Overlay from "../../../../components/shared/Overlay";

import { HiOutlinePlus } from "react-icons/hi";
import { useModal } from "../../../../contexts/ModalContext";
import ModalRemoveNews from "./ModalRemoveNews";

function AdminNews() {
  const { isNewsModal, toggleNewsModal, isRemoveNewsModal } = useModal();

  return (
    <div>
      <AdminHeading>
        <Title3>Noticias e Avisos</Title3>
        <AdminButton type="primary" onClick={() => toggleNewsModal()}>
          <p>
            <HiOutlinePlus />
          </p>
          <p>Noticia</p>
        </AdminButton>
      </AdminHeading>
      <AdminNewsLayout>
        <AdminAddHeader type="turma">
          <Title4>Atualizaçóes sobre a instituiçáo</Title4>
        </AdminAddHeader>
        <AdminNewsList />
      </AdminNewsLayout>

      {isNewsModal ? (
        <div>
          <NewsModal />
          <Overlay />
        </div>
      ) : (
        ""
      )}

      {isRemoveNewsModal ? (
        <div>
          <ModalRemoveNews />
          <Overlay />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminNews;
