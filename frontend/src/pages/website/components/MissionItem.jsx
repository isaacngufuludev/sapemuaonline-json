import Title3 from "../../../components/ui/Title3";

function MissionItem({ item }) {
  return (
    <li className="hover:shadow-[0_0_0_0.8px_rgba(29,78,216)] duration-300 p-3 rounded-md">
      <p className="text-blue-700 text-2xl text-center mb-1  ">{item.icon}</p>
      <Title3>{item.title}</Title3>
      <p className="text-sm leading-6">{item.conteudo}</p>
    </li>
  );
}

export default MissionItem;
