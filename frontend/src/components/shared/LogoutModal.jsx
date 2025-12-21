import { MdOutlineDone } from "react-icons/md";
import { BsX } from "react-icons/bs";
import { useModal } from "../../contexts/ModalContext";
import { useNavigate } from "react-router-dom";

import BtnCloseModal from "./BtnCloseModal";
import Modal from "./Modal";
import Title3 from "../ui/Title3";
import BtnModal from "./BtnModal";

function LogoutModal() {
  const { toggle } = useModal();
  const navigate = useNavigate();

  const init = () => {
    toggle();
    navigate("/login");
  };

  return (
    <Modal>
      <BtnCloseModal />
      <Title3>Terminar Sessão</Title3>
      <p className="text-sm mb-5">Tens a Certeza que queres terminar sessão?</p>
      <div className="flex gap-2 justify-end">
        <BtnModal type="smallSecondary" onClick={toggle}>
          <p className="text-lg">
            <BsX />
          </p>
          <p>Não</p>
        </BtnModal>
        <BtnModal type="smallPrimary" onClick={init}>
          <p className="text-lg">
            <MdOutlineDone />
          </p>
          <p>Sim</p>
        </BtnModal>
      </div>
    </Modal>
  );
}

export default LogoutModal;
