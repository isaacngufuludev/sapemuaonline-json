import Title from "../../../components/ui/Title";
import Subtitle from "../../../components/ui/Subtitle";
import { FiEye, FiStar, FiTarget } from "react-icons/fi";
import MissionItem from "./MissionItem";

const mission = [
  {
    icon: <FiTarget />,
    title: "Missão",
    conteudo:
      "Promover uma formação académica e técnica de qualidade, baseada na inovação, disciplina e desenvolvimento de competências profissionais, preparando os estudantes para os desafios do mercado de trabalho e para o desenvolvimento da sociedade.. ",
  },
  {
    icon: <FiEye />,
    title: "Visão",
    conteudo:
      "Ser uma instituição de referência no ensino técnico e tecnológico em Angola, destacando-se pela excelência académica, modernização dos processos educativos e formação de profissionais qualificados, éticos e inovadores.",
  },
  {
    icon: <FiStar />,
    title: "Valores",
    conteudo:
      "Excelência académica, Ética e responsabilidade, Inovação tecnológica, Compromisso com a educação. Disciplina e profissionalismo. ea explicabo! Nemo architecto at deleniti Desenvolvimento contínuo, Criatividade e empreendedorismo . ",
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
