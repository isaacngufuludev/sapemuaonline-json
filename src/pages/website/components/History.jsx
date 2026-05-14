import Subtitle from "../../../components/ui/Subtitle";
import Title from "../../../components/ui/Title";
import Mission from "./Mission";

function History() {
  return (
    <section className="border-stone-200 border-b-[0.1px] pt-32 xl:pt-40 dark:border-gray-800 ">
      <div className="container">
        <Subtitle type="left">historia</Subtitle>
        <Title type="left">Resumo da Nossa Trajetoria</Title>
        <div className="md:grid flex flex-col xl:gap-5 md:grid-cols-2 items-center xl:mb-16 ">
          <div>
            <p className="md:leading-6 leading-5 md:text-sm text-xs text-justify">
             O Instituto Politécnico Privado Sapemua tem vindo a destacar-se na formação técnica e académica de jovens, 
             promovendo ensino de qualidade, inovação e desenvolvimento profissional. Ao longo da sua trajetória, 
             a instituição consolidou-se como uma referência na área da educação técnica, formando estudantes preparados 
             para os desafios do mercado de trabalho e da transformação digital.
            </p>
          </div>
          <div className="justify-self-center">IMAGEM</div>
        </div>
        <Mission />
      </div>
    </section>
  );
}

export default History;
