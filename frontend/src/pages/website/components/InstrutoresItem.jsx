function InstrutoresItem({ item }) {
  return (
    <li className="border-stone-200 border-[0.1px] w-80 p-6 flex flex-col rounded-md dark:border-gray-800 hover:shadow-lg duration-300">
      <div className=" mb-6 text-center ">
        <p className="p-5 inline-block text-white text-[150px] bg-blue-700 rounded-full">
          {item.img}
        </p>
      </div>
      <div className="text-xs lg:text-sm font-semibold">
        <p>
          Nome: <span className="text-blue-700">{item.name}</span>
        </p>
        <p>
          Cargo: <span className="text-blue-700">{item.cargo}</span>
        </p>
      </div>
    </li>
  );
}

export default InstrutoresItem;
