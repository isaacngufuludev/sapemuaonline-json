import Title from "../../../components/ui/Title";
import Subtitle from "../../../components/ui/Subtitle";
import TestimonialItem from "./TestimonialItem";
import ButtonSlide from "../../../components/ui/ButtonSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

const testemunhos = [
  {
    name: "Kinavuide David",
    status: "Estudante de Informatica",
    image: "/imgs/depoimentos/KInavuide.jpeg",
    message:
      "O Sapemua Online trouxe mais organização e facilidade no acesso às informações académicas. Hoje consigo acompanhar tarefas, materiais e comunicados de forma rápida e prática. A plataforma melhorou bastante a comunicação entre alunos e professores",
  },
  {
    name: "Isaac Ngufulu",
    status: "Estudante de Informática",
    image: "/imgs/depoimentos/isaac.jpeg",
    message:
      "O Instituto Sapemua foi muito importante na minha formação académica e profissional. Além da qualidade no ensino, a escola sempre incentivou a disciplina, a criatividade e o desenvolvimento tecnológico dos estudantes. O Sapemua Online veio apenas reforçar essa modernização.”?",
  },
  {
    name: "Dorivaldo Quizembe",
    status: "Estudante de Informática",
    image: "/imgs/depoimentos/Dorivaldo.jpeg",
    message:
      "O ambiente escolar é muito acolhedor e os professores demonstram bastante dedicação no acompanhamento dos alunos. A instituição tem investido em tecnologia e inovação, criando melhores condições de aprendizagem para todos.?.",
  },
  {
    name: "Luzia Gonçalves",
    status: "Estudante de Informática",
    image: "/imgs/depoimentos/Luzia.jpeg",
    message:
      "A escola oferece oportunidades que ajudam os estudantes a crescer tanto académica como profissionalmente. As actividades práticas, feiras tecnológicas e projetos desenvolvidos tornam o processo de aprendizagem mais dinâmico e motivador.?",
  },
  {
    name: "Henriques Cidade",
    status: "Estudante de Informática",
    image: "/imgs/depoimentos/Henriques.jpeg",
    message:
      "A escola oferece oportunidades que ajudam os estudantes a crescer tanto académica como profissionalmente. As actividades práticas, feiras tecnológicas e projetos desenvolvidos tornam o processo de aprendizagem mais dinâmico e motivador.?",
  },
];

function Testimonial() {
  const swiperRef = useRef(null);

  return (
    <section className="border-stone-200 border-t py-16 xl:py-28 dark:border-gray-800">
      <div className="container relative">
        <Subtitle type="center">depoimentos</Subtitle>
        <Title type="center">O que Dizem Sobre Nós</Title>

        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="md:h-64 h-72 my-0 mx-auto relative"
        >
          {testemunhos.map((item, i) => (
            <SwiperSlide key={i}>
              <TestimonialItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-between ">
          <ButtonSlide
            type="left"
            onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
          >
            &larr;
          </ButtonSlide>
          <ButtonSlide
            type="right"
            onClick={() => swiperRef.current && swiperRef.current.slideNext()}
          >
            &rarr;
          </ButtonSlide>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
