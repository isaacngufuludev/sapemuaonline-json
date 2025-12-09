import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="">
      <div className="container grid grid-cols-2 items-center h-screen">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold mb-3">Bem-vindo ao Sapemua</h1>
          <p className="mb-5">
            Comprometida com a formação integral, o Sapemua oferece ensino de
            qualidade, ambiente seguro e projetos inovadores que promovem o
            desenvolvimento académico, social e humano.
          </p>
          <Link to="/sobre">
            <p className="bg-blue-700 text-white px-5 py-2 rounded-full inline-block">
              Saber mais
            </p>
          </Link>
        </div>
        <div className="justify-self-center">
          <img className="h-96" src="imgs/hero.png" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
