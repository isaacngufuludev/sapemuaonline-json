import Title from "../../../components/ui/Title";
import Subtitle from "../../../components/ui/Subtitle";
import TestimonialItem from "./TestimonialItem";
import ButtonSlide from "../../../components/ui/ButtonSlide";

const testemunhos = [
  {
    name: "Carlos Alberto",
    status: "Ex-Aluno",
    image: "/imgs/depoimentos/customer-1.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nesciunt illo vitae inventore cupiditate error quas voluptate, iure animi, tempore maxime reiciendis quo aut voluptatibus accusamus corporis maiores iste blanditiis?",
  },
  {
    name: "Carlos Alberto",
    status: "Ex-Aluno",
    image: "/imgs/depoimentos/customer-2.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nesciunt illo vitae inventore cupiditate error quas voluptate, iure animi, tempore maxime reiciendis quo aut voluptatibus accusamus corporis maiores iste blanditiis?",
  },
  {
    name: "Carlos Alberto",
    status: "Ex-Aluno",
    image: "/imgs/depoimentos/customer-3.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nesciunt illo vitae inventore cupiditate error quas voluptate, iure animi, tempore maxime reiciendis quo aut voluptatibus accusamus corporis maiores iste blanditiis?.",
  },
  {
    name: "Carlos Alberto",
    status: "Ex-Aluno",
    image: "/imgs/depoimentos/customer-4.jpg",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nesciunt illo vitae inventore cupiditate error quas voluptate, iure animi, tempore maxime reiciendis quo aut voluptatibus accusamus corporis maiores iste blanditiis?",
  },
];

function Testimonial() {
  return (
    <section className="border-stone-200 border-t py-28  dark:border-stone-900">
      <div className="container relative">
        <Subtitle type="center">depoimentos</Subtitle>
        <Title type="center">O que Dizem Sobre Nós</Title>
        <ul className="h-64 my-0 mx-auto relative">
          {testemunhos.map((item, i) => (
            <TestimonialItem item={item} key={i} />
          ))}
        </ul>
        <ButtonSlide type="left">&larr;</ButtonSlide>
        <ButtonSlide type="right">&rarr;</ButtonSlide>
      </div>
    </section>
  );
}

export default Testimonial;
