function StudentColleaguesItem({ item, i }) {
  return (
    <li className="p-3 border-t-[0.1px] dark:border-gray-700 border-slate-200">
      <div className="hidden md:grid items-center text-sm grid-cols-[0.4fr_1.8fr_1fr_1fr_1.2fr]">
        <div className="flex items-center justify-center">
          <p className="font-semibold rounded-full py-[10px] px-4 bg-slate-100 dark:bg-gray-900">
            {i + 1}
          </p>
        </div>
        <p className="truncate">{item.name}</p>
        <p>{item.genre}</p>
        <p>{item.age}</p>
        <p className="truncate">{item.phoneNumber}</p>
      </div>

      <div className="md:hidden text-sm space-y-3">
        <div className="flex items-center gap-3">
          <p className="font-semibold rounded-full py-[6px] px-3 bg-slate-100 dark:bg-gray-900">
            {i + 1}
          </p>
          <p className="font-semibold leading-5">{item.name}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
          <p>
            <span className="font-semibold">Sexo:</span> {item.genre}
          </p>
          <p>
            <span className="font-semibold">Idade:</span> {item.age}
          </p>
          <p className="col-span-2 break-all">
            <span className="font-semibold">Telefone:</span> {item.phoneNumber}
          </p>
        </div>
      </div>
    </li>
  );
}

export default StudentColleaguesItem;
