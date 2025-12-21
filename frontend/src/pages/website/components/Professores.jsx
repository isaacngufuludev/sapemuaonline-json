import Subtitle from "../../../components/ui/Subtitle";
import { FiUser } from "react-icons/fi";
import ProfessoresItem from "./ProfessoresItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
];

function Professores() {
  return (
    <div className="mt-10 mx-auto my-0 max-w-[1800px] px-6;">
      <div className="mb-7">
        <Subtitle type="gray">Outras Entidades</Subtitle>
      </div>
      <ul className="grid grid-cols-4 items-center gap-8 ">
        {data.map((item) => (
          <SwiperSlide>
            <li className="border-stone-200 border-[0.1px] p-6 flex flex-col rounded-md dark:border-stone-900">
              <div className="place-items-center mb-6 text-center ">
                <p className="p-5 inline-block text-white text-[150px] bg-blue-700 rounded-full">
                  {item.img}
                </p>
              </div>
              <div className="text-sm font-semibold">
                <p>Nome: {item.name}</p>
                <p>
                  Cargo: <span className="text-blue-700">{item.cargo}</span>
                </p>
              </div>
            </li>
          </SwiperSlide>
        ))}
      </ul>
    </div>
  );
}

export default Professores;
