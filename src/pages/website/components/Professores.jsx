import Subtitle from "../../../components/ui/Subtitle";
import { FiUser } from "react-icons/fi";
import ProfessoresItem from "./ProfessoresItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useModal } from "../../../contexts/ModalContext";

const data = [
  {
    id: "1",
    name: "---------------",
    img: <FiUser />,
    cargo: "Professor",
  },
  {
    id: "2",
    name: "---------------",
    img: <FiUser />,
    cargo: "Secretario ",
  },
  {
    id: "4",
    name: "---------------",
    img: <FiUser />,
    cargo: "Professor",
  },
  {
    id: "5",
    name: "---------------",
    img: <FiUser />,
    cargo: "Professor",
  },
  {
    id: "6",
    name: "---------------",
    img: <FiUser />,
    cargo: "Professor",
  },
  {
    id: "7",
    name: "---------------",
    img: <FiUser />,
    cargo: "Secretario ",
  },
  {
    id: "8",
    name: "Luzia",
    img: <FiUser />,
    cargo: "Coordenador",
  },
  {
    id: "9",
    name: "---------------",
    img: <FiUser />,
    cargo: "Professor",
  },
  {
    id: "10",
    name: "---------------",
    img: <FiUser />,
    cargo: "Professor",
  },
];

function Professores() {
  const { isShowTeachers, toggleTeachers } = useModal();

  return (
    <div className="mt-10 mx-auto my-0 sm:max-w-[1800px] xl:px-6 px-4 ">
      {isShowTeachers ? (
        <div>
          <div className="mb-7">
            <Subtitle type="gray">Outras Entidades</Subtitle>
          </div>
          {/* Mobile & Tablet: Grid with scroll */}
          <ul className="lg:hidden grid overflow-x-scroll grid-cols-[0.5fr_0.5fr_0.5fr_0.5fr_0.5fr_0.5fr_0.5fr_0.5fr_0.5fr_0.5fr] items-center gap-20 no-scrollbar">
            {data.map((item) => (
              <ProfessoresItem item={item} key={item.id} />
            ))}
          </ul>

          {/* Desktop (lg+): Swiper */}
          <div className="hidden lg:block">
            <Swiper
              slidesPerView={4}
              spaceBetween={60}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                },
                1300: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="h-80"
            >
              {data.map((item) => (
                <SwiperSlide key={item.id} className="h-full">
                  <ProfessoresItem item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        ""
      )}
      <button
        onClick={toggleTeachers}
        className="text-sm text-blue-700 text-center  font-semibold flex justify-center w-full mt-5 underline duration-300 hover:text-gray-800 dark:hover:text-gray-600"
      >
        <p>{isShowTeachers ? "Ver menos" : "Ver mais"}</p>
      </button>
    </div>
  );
}

export default Professores;
