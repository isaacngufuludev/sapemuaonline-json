import Title from "../../../components/ui/Title";
import Subtitle from "../../../components/ui/Subtitle";
import { FiEye, FiStar, FiTarget } from "react-icons/fi";
import MissionItem from "./MissionItem";

const mission = [
  {
    icon: <FiTarget />,
    title: "Missão",
    conteudo:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi  recusandae tempore id vero illo quas non, praesentium ab a iuredeleniti nemo ut eveniet ea explicabo! Nemo architecto at deleniti. ",
  },
  {
    icon: <FiEye />,
    title: "Visão",
    conteudo:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi  recusandae tempore id vero illo quas non, praesentium ab a iuredeleniti nemo ut eveniet ea explicabo! Nemo architecto at deleniti. ",
  },
  {
    icon: <FiStar />,
    title: "Valores",
    conteudo:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi  recusandae tempore id vero illo quas non, praesentium ab a iuredeleniti nemo ut eveniet ea explicabo! Nemo architecto at deleniti. ",
  },
];

function Mission() {
  return (
    <div className="py-20">
      <Subtitle type="center">Missão, Visão e Valores</Subtitle>
      <Title type="center">Educar com proposito para um futuro melhor</Title>
      <ul className="grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-3 gap-x-2 xl:gap-x-5 ">
        {mission.map((item, i) => (
          <MissionItem item={item} key={i} />
        ))}
      </ul>
    </div>
  );
}

export default Mission;
