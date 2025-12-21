import Subtitle from "../../../components/ui/Subtitle";
import Title from "../../../components/ui/Title";
import Mission from "./Mission";

function History() {
  return (
    <section className="border-stone-200 border-b-[0.1px] pt-28 dark:border-stone-900 h-screen ">
      <div className="container">
        <Subtitle type="left">historia</Subtitle>
        <Title type="left">Resumo da Nossa Trajetoria</Title>
        <div className="grid grid-cols-2 items-center mb-16 ">
          <div>
            <p>
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
