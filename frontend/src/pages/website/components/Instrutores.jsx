import Titile from "../../../components/ui/Title";
import Subtitle from "../../../components/ui/Subtitle";
import InstrutoresItem from "./InstrutoresItem";
import { FiUser } from "react-icons/fi";

const data = [
  {
    name: "Director Dorivaldo",
    img: <FiUser />,
    cargo: "Director Geral",
  },
  {
    name: "Henriques",
    img: <FiUser />,
    cargo: "Sub-Director Administrativo",
  },
  {
    name: "Luzia",
    img: <FiUser />,
    cargo: "Sub-Director Pedagogico",
  },
];

function Instrutores() {
  return (
    <section className="border-stone-200 border-t-[0.1px] py-28 dark:border-stone-900">
      <div className="container">
        <div>
          <Subtitle type="center">Nossos orgãos</Subtitle>
          <Titile type="center">Nossos Instrutores</Titile>
        </div>
        <div className="mb-7">
          <Subtitle type="gray">Direcção Executiva</Subtitle>
        </div>
        <ul className="grid grid-cols-[0.5fr_0.5fr_0.5fr] items-center gap-28">
          {data.map((item) => (
            <InstrutoresItem item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Instrutores;
