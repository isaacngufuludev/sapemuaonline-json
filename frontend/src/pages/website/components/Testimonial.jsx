import Title from "../../../components/ui/Title";
import Subtitle from "../../../components/ui/Subtitle";
import TestimonialItem from "./TestimonialItem";
import ButtonSlide from "../../../components/ui/ButtonSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

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
  const swiperRef = useRef(null);

  return (
    <section className="border-stone-200 border-t py-28  dark:border-stone-900">
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
          className="h-64 my-0 mx-auto relative"
        >
          {testemunhos.map((item, i) => (
            <SwiperSlide key={i}>
              <TestimonialItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-between absolute top-1/4 left-0 right-0">
          <ButtonSlide
            onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
          >
            &larr;
          </ButtonSlide>
          <ButtonSlide
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
