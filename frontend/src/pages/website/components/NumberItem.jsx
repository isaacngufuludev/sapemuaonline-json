function NumberItem({ item }) {
  return (
    <li className="justify-self-center flex flex-col gap-3 ">
      <p className="text-blue-700 text-8xl font-bold">{item.number}</p>
      <p className="font-semibold text-lg">{item.conteudo}</p>
      <p className="w-10 h-1 bg-blue-700 rounded-full"></p>
    </li>
  );
}

export default NumberItem;
