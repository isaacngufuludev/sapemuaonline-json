import { useModal } from "../../../contexts/ModalContext";

function GalleryItem({ item }) {
  const { toggleGalleryModal, setGalleryImage } = useModal();

  function handlerClick() {
    setGalleryImage(item);
    toggleGalleryModal();
  }

  return (
    <li className="overflow-hidden cursor-pointer " onClick={handlerClick}>
      <div
        className="h-60 w-full bg-cover bg-center hover:scale-110 duration-300 "
        style={{ backgroundImage: `url(${item})` }}
      ></div>
    </li>
  );
}

export default GalleryItem;
