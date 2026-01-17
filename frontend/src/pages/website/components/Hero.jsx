import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function Hero() {
  const data = [
    {
      id: `1`,
      titulo: "Bem-vindo ao Sapemua",
      conteudo:
        "Comprometida com a formação integral, a Sapemua oferece ensino de qualidade ambiente seguro e projetos inovadores que promovem o desenvolvimento académico,  social e humano. Onde aprender é crescer e viver novas possibilidades todos os dias.",
      image: "imgs/hero.png",
    },
    {
      id: "2",
      titulo: "Bem-vindo ao Sapemua",
      conteudo:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea consectetur ab corrupti aliquid consequuntur, optio corporis doloremque quod illum eius voluptates praesentium incidunt, laudantium dolores? Perspiciatis exercitationem aperiam vero iusto?",
      image: "imgs/item-2.png",
    },
  ];

  return (
    <section className="pt-20 lg:pt-16">
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000, // Tempo em milissegundos (3 segundos)
          disableOnInteraction: false,
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="container flex flex-col lg:grid lg:grid-cols-2 items-center py-10 sm:py-14 lg:py-8 h-screen 2xl:gap-5">
              <div className="flex flex-col text-center lg:text-left mb-14 sm:mb-10">
                <h1 className="lg:text-3xl sm:text-2xl text-xl font-semibold mb-2 xl:mb-3">
                  {item.titulo}
                </h1>
                <p className="mb-5 text-xs md:text-sm leading-5 md:leading-6 ">
                  {item.conteudo}
                </p>
                <Link to="/sobre">
                  <p className="bg-blue-700 text-white text-xs lg:text-sm  px-4 md:px-5 py-3 font-semibold xl:py-2 rounded-full inline-block">
                    Saber mais
                  </p>
                </Link>
              </div>
              <div className="md:justify-self-center">
                <img
                  className="h-80 sm:h-96 xl:h-[420px] 2xl:h-[500px] "
                  src={item.image}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
