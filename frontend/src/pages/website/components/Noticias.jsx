import Subtitle from "../../../components/ui/Subtitle";
import Title from "../../../components/ui/Title";
import NoticiaItem from "./NoticiaItem";

const noticias = [
  {
    titulo: "Inicio do Ano Lectivo",
    conteudo:
      "O instituto reforça o compromisso com a qualidade do ensino, a formação integral dos alunos.",
    date: "05/09/2025",
  },
  {
    titulo: "Baptismo dos Caloiros",
    conteudo:
      "Um evento de integração dos novos alunos, marcado por dinamicas e atividades que promovem acolhimento e espirito de grupo.",
    date: "05/09/2025",
  },
  {
    titulo: "Feira de Empreendedorismo",
    conteudo:
      "Uma oportunidade para os alunos colocarem em prática ideias inovadoras, desenolvendo habilidades como criatividade",
    date: "05/09/2025",
  },
];

function Noticias() {
  return (
    <section className="border-stone-200 border-t  py-14 xl:py-20 dark:border-gray-900 ">
      <div className="container">
        <Subtitle type="center">noticias e avisos</Subtitle>
        <Title type="center">Noticias e Atualizações Recentes</Title>
        <ul className="grid grid-cols-1 gap-6 xl:grid-cols-3 xl:gap-x-5 ">
          {noticias.map((item) => (
            <NoticiaItem item={item} key={item.titulo} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Noticias;
