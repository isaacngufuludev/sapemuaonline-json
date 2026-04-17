import { useModal } from "../../contexts/ModalContext";

function Overlay({ onClose }) {
  const { toggle } = useModal();
  function handleClose() {
    toggle();
    if (onClose) onClose();
  }

  return (
    <div
      className="fixed left-0 top-0 z-40 h-screen w-full bg-black/30 backdrop-blur-sm"
      onClick={handleClose}
    ></div>
  );
}

export default Overlay;
