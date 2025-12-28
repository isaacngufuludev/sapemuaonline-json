import Subtitle from "../../../components/ui/Subtitle";
import { FiUser } from "react-icons/fi";
import ProfessoresItem from "./ProfessoresItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useModal } from "../../../contexts/ModalContext";

const data = [
  {
    id: "1",
    name: "Director Dorivaldo",
    img: <FiUser />,
    cargo: "Director Geral",
  },
  {
    id: "2",
    name: "Henriques",
    img: <FiUser />,
    cargo: "Sub-Director Administrativo",
  },
  {
    id: "3",
    name: "Luzia",
    img: <FiUser />,
    cargo: "Sub-Director Pedagogico",
  },
  {
    id: "4",
    name: "Luzia",
    img: <FiUser />,
    cargo: "Sub-Director Pedagogico",
  },
  {
    id: "5",
    name: "Luzia",
    img: <FiUser />,
    cargo: "Sub-Director Pedagogico",
  },
  {
    id: "6",
    name: "Luzia",
    img: <FiUser />,
    cargo: "Sub-Director Pedagogico",
  },
  {
    id: "7",
    name: "Luzia",
    img: <FiUser />,
    cargo: "Sub-Director Pedagogico",
  },
  {
    id: "8",
    name: "Luzia",
    img: <FiUser />,
    cargo: "Sub-Director Pedagogico",
  },
  {
    id: "9",
    name: "Luzia",
    img: <FiUser />,
    cargo: "Sub-Director Pedagogico",
  },
  {
    id: "10",
    name: "Luzia",
    img: <FiUser />,
    cargo: "Sub-Director Pedagogico",
  },
];

function Professores() {
  const { isShowTeachers, toggleTeachers } = useModal();

  return (
    <div className="mt-10 mx-auto my-0 max-w-[1800px] px-6">
      {isShowTeachers ? (
        <div>
          <div className="mb-7">
            <Subtitle type="gray">Outras Entidades</Subtitle>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={80}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="h-80"
          >
            <ul className="h-full">
              {data.map((item) => (
                <SwiperSlide key={item.id} className="h-full">
                  <ProfessoresItem item={item} />
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>
        </div>
      ) : (
        ""
      )}
      <button
        onClick={toggleTeachers}
        className="text-sm text-blue-700 text-center font-semibold flex justify-center w-full mt-5 underline duration-300 hover:text-gray-800 dark:hover:text-gray-600"
      >
        <p>{isShowTeachers ? "Ver menos" : "Ver mais"}</p>
      </button>
    </div>
  );
}

export default Professores;
