import Subtitle from "../../../components/ui/Subtitle";
import Title from "../../../components/ui/Title";
import GalleryItem from "./GalleryItem";
import Overlay from "../../../components/shared/Overlay";
import BtnCloseModal from "../../../components/shared/BtnCloseModal";
import GalleryImgBox from "./GalleryImgBox";
import BtnPagination from "../../../components/ui/BtnPagination";
import { useModal } from "../../../contexts/ModalContext";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";

const gallery = [
  "/imgs/galeria/galeria_1.jpg",
  "/imgs/galeria/galeria_2.jpg",
  "/imgs/galeria/galeria_3.jpg",
  "/imgs/galeria/galeria_4.jpg",
  "/imgs/galeria/galeria_5.jpg",
  "/imgs/galeria/galeria_7.jpg",
  "/imgs/galeria/galeria_8.jpg",
  "/imgs/galeria/galeria_9.jpg",
  "/imgs/galeria/galeria_10.jpg",
  "/imgs/galeria/galeria_11.jpg",
  "/imgs/galeria/galeria_12.jpg",
  "/imgs/galeria/galeria_10.jpg",
  "/imgs/galeria/galeria_11.jpg",
  "/imgs/galeria/galeria_12.jpg",
  "/imgs/galeria/galeria_1.jpg",
  "/imgs/galeria/galeria_2.jpg",
  "/imgs/galeria/galeria_3.jpg",
  "/imgs/galeria/galeria_9.jpg",
  "/imgs/galeria/galeria_10.jpg",
  "/imgs/galeria/galeria_11.jpg",
  "/imgs/galeria/galeria_8.jpg",
  "/imgs/galeria/galeria_9.jpg",
  "/imgs/galeria/galeria_10.jpg",
  "/imgs/galeria/galeria_2.jpg",
];

function GalleryList() {
  const { isGalleryModal, selectedGalleryImg } = useModal();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(gallery.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGallery = gallery.slice(startIndex, endIndex);

  function handlerPrevPage() {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  }

  function handlerNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
    }
  }

  return (
    <section className="py-28">
      <div className="container">
        <Subtitle type="left">galeria</Subtitle>
        <Title type="left">Um Olhar, Muitas Histórias</Title>
        <ul className="grid grid-cols-4 gap-x-7 gap-y-5">
          {currentGallery.map((item, i) => (
            <GalleryItem item={item} key={i} />
          ))}
        </ul>
        <div className="flex gap-2 justify-end mt-3 items-center ">
          <BtnPagination onClick={handlerPrevPage} disabled={currentPage === 1}>
            <BsChevronLeft />
          </BtnPagination>
          <p>
            {currentPage} de {totalPages}
          </p>
          <BtnPagination
            onClick={handlerNextPage}
            disabled={currentPage === totalPages}
          >
            <BsChevronRight />
          </BtnPagination>
        </div>
      </div>

      {isGalleryModal ? (
        <>
          <Overlay />
          <div className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div
              className="relative bg-white dark:bg-gray-800 p-[15px] rounded-lg shadow-xl  pointer-events-auto "
              onClick={(e) => e.stopPropagation()}
            >
              <BtnCloseModal />
              <GalleryImgBox image={selectedGalleryImg} />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </section>
  );
}

export default GalleryList;
