import Subtitle from "../../../components/ui/Subtitle";
import Title from "../../../components/ui/Title";
import GalleryItem from "./GalleryItem";
import Overlay from "../../../components/shared/Overlay";
import BtnCloseModal from "../../../components/shared/BtnCloseModal";
import GalleryImgBox from "./GalleryImgBox";
import BtnPagination from "../../../components/ui/BtnPagination";

import { useModal } from "../../../contexts/ModalContext";
import { usePagination } from "../../../hooks/UsePagination";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

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
  const {
    currentData,
    currentPage,
    totalPages,
    handlerPrevPage,
    handlerNextPage,
  } = usePagination(gallery, 12);

  return (
    <section className="py-28">
      <div className="container">
        <Subtitle type="left">galeria</Subtitle>
        <Title type="left">Um Olhar, Muitas Histórias</Title>
        <ul className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 xl:gap-x-3 gap-y-3 xl:gap-y-3">
          {currentData.map((item, i) => (
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
              className="relative bg-white dark:bg-gray-800 xl:p-[15px] pt-1 p-[10px] rounded-lg shadow-xl  pointer-events-auto "
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
