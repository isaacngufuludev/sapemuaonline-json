function TurmaSubjectsItem({ item }) {
  return (
    <li className="hidden grid-cols-[1fr_0.7fr_0.7fr_0.7fr] border-b border-slate-200 dark:border-gray-700 px-5 py-1 text-sm md:grid bg-white dark:bg-gray-800">
      <p className="py-2"> {item.subjects.join(", ")} </p>
      <p className="py-2 ">
        <span className=" bg-blue-700 text-white inline-block rounded-full py-1 px-3 font-semibold">
          vinculado
        </span>
      </p>
      <p className="py-2">{item.name}</p>
      <p className="py-2">{item.phoneNumber}</p>
    </li>
  );
}

export default TurmaSubjectsItem;
