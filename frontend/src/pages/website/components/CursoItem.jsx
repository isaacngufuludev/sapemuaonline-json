import Title3 from "../../../components/ui/Title3";

function CursoItem({ item }) {
  return (
    <li className="rounded-xl hover:shadow-lg hover:-translate-y-3 duration-200 flex flex-col">
      <div>
        <img className="h-60  w-full rounded-t-xl" src={item.image} alt="" />
      </div>
      <div className="px-3 pt-2 pb-5 flex-grow">
        <Title3>{item.name}</Title3>
        <p className="xl:text-sm text-xs leading-5"> {item.conteudo}</p>
      </div>
    </li>
  );
}

export default CursoItem;
