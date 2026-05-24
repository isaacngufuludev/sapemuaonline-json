import Subtitle from "../../../components/ui/Subtitle";
import Title from "../../../components/ui/Title";
import Mission from "./Mission";

function History() {
  return (
    <section className="border-stone-200 border-b-[0.1px] pt-32 xl:pt-40 dark:border-gray-800 ">
      <div className="container">
        <div className="lg:grid lg:gap-5 xl:gap-10 lg:grid-cols-2 items-center xl:mb-16 ">
          <div>
            <Subtitle type="left">historia</Subtitle>
            <Title type="left">Resumo da Nossa Trajetoria</Title>
            <div className="flex flex-col gap-3 text-justify mb-5">
              <p className="md:leading-6 leading-5 md:text-sm text-xs">
                O Instituto Politécnico Privado Sapemua tem vindo a destacar-se
                na formação técnica e académica de jovens, promovendo ensino de
                qualidade, inovação e desenvolvimento profissional. Ao longo da
                sua trajetória, a instituição consolidou-se como uma referência
                na área da educação técnica e profissional, contribuindo
                significativamente para a capacitação de estudantes preparados
                para enfrentar os desafios do mercado de trabalho e acompanhar
                as constantes transformações tecnológicas e sociais da
                atualidade.
              </p>
              <p className="md:leading-6 leading-5 md:text-sm text-xs">
                A instituição pauta-se por princípios de excelência,
                responsabilidade, disciplina e compromisso com a educação,
                oferecendo aos estudantes um ambiente de aprendizagem moderno e
                dinâmico. Por meio de metodologias de ensino atualizadas, o
                instituto incentiva o desenvolvimento de competências técnicas,
                científicas e humanas, fundamentais para a formação integral dos
                seus alunos.
              </p>
              <p className="md:leading-6 leading-5 md:text-sm text-xs">
                Com uma visão voltada para o futuro, a instituição procura
                adaptar-se às exigências do mundo moderno, integrando recursos
                tecnológicos, inovação pedagógica e formação contínua do corpo
                docente. Esse compromisso fortalece a sua missão de formar
                profissionais competentes, éticos e aptos a atuar em diferentes
                áreas do conhecimento, respondendo às necessidades do mercado
                nacional e internacional.
              </p>
              <p className="md:leading-6 leading-5 md:text-sm text-xs">
                Deste modo, o Instituto Politécnico Privado Sapemua continua a
                afirmar-se como uma instituição de referência no setor
                educacional, desempenhando um papel importante na construção de
                uma sociedade mais qualificada, inovadora e preparada para os
                desafios do futuro.
              </p>
            </div>
          </div>
          <div className="justify-self-center">
            <img
              className="rounded-2xl lg:h-[500px] xl:h-full shadow-lg"
              src="/imgs/patio-3.png"
              alt="historia"
            />
          </div>
        </div>
        <Mission />
      </div>
    </section>
  );
}

export default History;
