import { useModal } from "../../contexts/ModalContext";

function Overlay({ onClose }) {
  const { toggle } = useModal();
  function handleClose() {
    toggle();
    onClose();
  }

  return (
    <div
      className="fixed top-0 left-0 backdrop-blur-sm h-screen bg-black/30 w-full z-10"
      onClick={handleClose}
    ></div>
  );
}

export default Overlay;
