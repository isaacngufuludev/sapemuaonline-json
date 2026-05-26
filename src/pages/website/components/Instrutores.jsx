import Titile from "../../../components/ui/Title";
import Subtitle from "../../../components/ui/Subtitle";
import InstrutoresItem from "./InstrutoresItem";
import { FiUser } from "react-icons/fi";
import Professores from "./Professores";

const data = [
  {
    name: "------------",
    img: <FiUser />,
    cargo: "Director Geral",
  },
  {
    name: "------------",
    img: <FiUser />,
    cargo: "Sub-Director Pedagógico",
  },
  {
    name: "------------",
    img: <FiUser />,
    cargo: "Coordenador",
  },
];

function Instrutores() {
  return (
    <section className="border-stone-200 border-t-[0.1px] py-28 dark:border-stone-900">
      <div className="container  ">
        <div>
          <Subtitle type="center">Nossos orgãos</Subtitle>
          <Titile type="center">Nossos Instrutores</Titile>
        </div>
        <div className="mb-7">
          <Subtitle type="gray">Direcção Executiva</Subtitle>
        </div>
        <ul className="grid overflow-x-scroll grid-cols-[0.5fr_0.5fr_0.5fr] items-center gap-8 xl:gap-28 no-scrollbar">
          {data.map((item, i) => (
            <InstrutoresItem item={item} key={i} />
          ))}
        </ul>
      </div>
      <Professores />
    </section>
  );
}

export default Instrutores;
