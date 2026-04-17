import { BsX } from "react-icons/bs";
import { useModal } from "../../contexts/ModalContext";

function BtnCloseModal({ onClick }) {
  const { toggle } = useModal();

  function handleClick() {
    if (onClick) {
      onClick();
      return;
    }
    toggle();
  }

  return (
    <button className="flex w-full justify-end" onClick={handleClick}>
      <p className="text-2xl">
        <BsX />
      </p>
    </button>
  );
}

export default BtnCloseModal;
