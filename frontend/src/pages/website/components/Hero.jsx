import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

function Hero() {
  const data = [
    {
      id: `1`,
      titul: "Bem-vindo à Sapemua",
      conteudo:
        "Comprometida com a formação integral, a Sapemua oferece ensino de qualidade ambiente seguro e projetos inovadores que promovem o desenvolvimento académico,  social e humano. Onde aprender é crescer e viver novas possibilidades todos os dias.",
      image: "imgs/hero.png",
    },
    {
      id: "2",
      titul: "SAPEMUA",
      conteudo:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea consectetur ab corrupti aliquid consequuntur, optio corporis doloremque quod illum eius voluptates praesentium incidunt, laudantium dolores? Perspiciatis exercitationem aperiam vero iusto?",
      image: "imgs/item-2.png",
    },
  ];

  return (
    <section className="">
      <Swiper slidesPerView={1} pagination={{ clickable: true }}>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="container grid grid-cols-2 items-center py-8 h-screen">
              <div className="flex flex-col">
                <h1 className="text-3xl font-semibold mb-3">{item.titul}</h1>
                <p className="mb-5">{item.conteudo}</p>
                <Link to="/sobre">
                  <p className="bg-blue-700 text-white px-5 py-2 rounded-full inline-block">
                    Saber mais
                  </p>
                </Link>
              </div>
              <div className="justify-self-center">
                <img className="h-96" src={item.image} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
