import Subtitle from "../../../components/ui/Subtitle";
import Title from "../../../components/ui/Title";
import NumberItem from "./NumberItem";

const numbers = [
  {
    number: 2007,
    conteudo: "Ano de Criação",
  },
  {
    number: "+500",
    conteudo: "Técnicos no Mercado",
  },
  {
    number: "04",
    conteudo: "Polos",
  },
  {
    number: "+5K",
    conteudo: "Estudantes",
  },
];

function Numbers() {
  return (
    <section className="border-stone-200 border-b-[0.1px] py-24 dark:border-stone-900 ">
      <div className="container">
        <Subtitle type="center">números</Subtitle>
        <Title type="center">Nossa Historia em Números</Title>

        <ul className="grid grid-cols-4 items-center">
          {numbers.map((item, i) => (
            <NumberItem item={item} key={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Numbers;
