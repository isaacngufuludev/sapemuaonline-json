import Title3 from "../../../components/ui/Title3";

function CursoItem({ item }) {
  return (
    <li className=" rounded-xl hover:shadow-lg hover:-translate-y-3 duration-200 ">
      <div
        className="h-56 bg-center bg-cover rounded-t-xl"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className=" px-3 pt-2 h-40">
        <Title3>{item.name}</Title3>
        <p className="text-sm "> {item.conteudo}</p>
      </div>
    </li>
  );
}

export default CursoItem;
