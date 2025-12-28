import { useModal } from "../../contexts/ModalContext";

function Overlay() {
  const { toggle } = useModal();

  return (
    <div
      className="fixed top-0 left-0 backdrop-blur-sm h-screen bg-black/30 w-full z-20"
      onClick={toggle}
    ></div>
  );
}

export default Overlay;
