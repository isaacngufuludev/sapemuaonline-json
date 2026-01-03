import { BsX } from "react-icons/bs";
import { useModal } from "../../contexts/ModalContext";

function BtnCloseModal() {
  const { toggle } = useModal();

  return (
    <button className="flex w-full justify-end" onClick={toggle}>
      <p className="text-2xl">
        <BsX />
      </p>
    </button>
  );
}

export default BtnCloseModal;
