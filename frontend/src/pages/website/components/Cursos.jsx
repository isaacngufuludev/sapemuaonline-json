import Title from "../../../components/ui/Title";
import Subtitle from "../../../components/ui/Subtitle";
import CursoItem from "./CursoItem";

const cursos = [
  {
    name: "Curso de Informática",
    image: "imgs/cursos/informatica.jpg",
    conteudo:
      "Formação focada em hardware, software, redes e desenvolvimento de sistemas. O aluno adquire competências tecnológicas essenciais para atuar no mercado digital e em ambientes computacionais modernos.",
  },
  {
    name: "Curso Electronica e Telecomunicações",
    image: "/imgs/cursos/eletronica.jpg",
    conteudo:
      "Foca na análise, montagem e reparação de circuitos e dispositivos eletrónicos. Desenvolve competências para trabalhar com tecnologias digitais, automação e equipamentos eletrónicos modernos.",
  },
  {
    name: "Curso de Electricidade",
    image: "/imgs/cursos/eletricidade.jpg",
    conteudo:
      "Abrange princípios e práticas da instalação, manutenção e operação de sistemas elétricos. Ideal para quem deseja atuar de forma técnica e segura em infraestruturas residenciais, industriais e comerciais.",
  },
  {
    name: "Curso de Gestão Empresarial",
    image: "/imgs/cursos/gestao.jpg",
    conteudo:
      "Curso orientado para a administração de organizações, com ênfase em estratégias, liderança, operações e tomada de decisões. Prepara profissionais capazes de gerir negócios com eficiência e visão.",
  },
  {
    name: "Curso de Recursos Humanos",
    image: "/imgs/cursos/recursos-humanos.jpg",
    conteudo:
      "Prepara o aluno para atuar na seleção, formação, avaliação e desenvolvimento de pessoas dentro das organizações. Ênfase em comunicação, liderança e gestão de talentos.",
  },
  {
    name: "Curso de Finanças",
    image: "/imgs/cursos/finanças.jpg",
    conteudo:
      "Curso voltado para gestão financeira, contabilidade, investimentos e análise económica. Forma profissionais capazes de interpretar dados, gerir recursos e apoiar decisões estratégicas.",
  },
];

function Cursos() {
  return (
    <section className="border-stone-200 border-t-[0.1px] py-28 dark:border-stone-900 ">
      <div className="container ">
        <Subtitle type="center">cursos</Subtitle>
        <Title type="center">Área de Desenvolvimento Académico</Title>
        <ul className="grid grid-cols-3 items-center gap-x-7 gap-y-5 ">
          {cursos.map((item) => (
            <CursoItem item={item} key={item.name} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Cursos;
