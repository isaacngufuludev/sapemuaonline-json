import Title3 from "../../../components/ui/Title3";

function NoticiaItem({ item }) {
  return (
    <li className="p-3 rounded-md hover:shadow-[0_0_0_0.8px_rgba(29,78,216)] duration-300">
      <div className="flex items-center justify-between">
        <Title3> {item.titulo} </Title3>
        <p className="text-xs font-medium text-gray-700">{item.date}</p>
      </div>
      <p className=" text-xs xl:text-sm leading-5 xl:leading-6">
        {item.conteudo}
      </p>
    </li>
  );
}

export default NoticiaItem;
