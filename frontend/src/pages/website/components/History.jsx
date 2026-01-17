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
            <p className="md:leading-6 leading-5 md:text-sm text-xs ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed
              dolore atque tempore accusantium natus inventore iure ducimus
              laudantium impedit exercitationem, quam incidunt sit, repellat
              dolorum nesciunt eos, doloribus voluptates? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptatibus amet beatae ad
              exercitationem maxime repudiandae explicabo delectus sed voluptate
              tempora quos expedita cumque adipisci suscipit repellat, officiis
              ut doloremque nostrum.
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
