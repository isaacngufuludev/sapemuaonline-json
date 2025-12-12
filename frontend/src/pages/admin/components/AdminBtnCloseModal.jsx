import { BsX } from "react-icons/bs";
import { useModal } from "../../../contexts/ModalContext";

function AdminBtnCloseModal() {
  const { toggle } = useModal();

  return (
    <button className="flex w-full justify-end" onClick={toggle}>
      <p className="text-lg">
        <BsX />
      </p>
    </button>
  );
}

export default AdminBtnCloseModal;
