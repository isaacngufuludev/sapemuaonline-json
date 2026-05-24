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
  {
    src: "/imgs/galeria/patio-1.png",
    description: "Patio EScolar",
  },
  {
    src: "/imgs/galeria/secretaria-2.png",
    description: "Secretaria",
  },
  {
    src: "/imgs/galeria/sala_de_coordenacao-2.png",
    description: "Sala de Coordenação",
  },
  {
    src: "/imgs/galeria/informatica-4.jpeg",
    description: "Laboratório de Informática",
  },
  {
    src: "/imgs/galeria/sala_de_coordenacao-1",
    description: "Sala de Coordenação",
  },
  {
    src: "/imgs/galeria/electronica_1.jpg",
    description: "Laboratório de Eletrônica",
  },
  {
    src: "/imgs/galeria/secretaria-1.jpg",
    description: "Secretaria",
  },
  {
    src: "/imgs/galeria/eletronica_2.jpg",
    description: "Laboratório de Eletrônica",
  },
  {
    src: "/imgs/galeria/corredor.png",
    description: "Corredor",
  },
  {
    src: "/imgs/galeria/escola-3.jpg",
    description: "Polos 3 do Instituto",
  },
  {
    src: "/imgs/galeria/informatica-1.jpeg",
    description: "Laboratório de Informática",
  },
  {
    src: "/imgs/galeria/patio-3.png",
    description: "Patio Escolar",
  },
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
          <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center p-3 sm:p-4">
            <div
              className="pointer-events-auto relative max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-[10px] pt-1 shadow-xl dark:bg-gray-800 sm:max-h-[calc(100dvh-2rem)] xl:p-[15px]"
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
