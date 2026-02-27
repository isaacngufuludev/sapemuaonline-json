function StudentNotasItem({ item, i }) {
  const media = (item.mac + item.npp + item.npt) / 3;

  return (
    <li className="items-center text-sm font-semibold py-2 px-4 border-t-[0.1px] dark:border-gray-700 border-slate-200 grid grid-cols-[0.3fr_2fr_1fr_1fr_1fr_1fr]">
      <p className="font-semibold rounded-full w-2/4 flex items-center justify-center py-3 px-4 bg-slate-100  dark:bg-gray-900">
        <p>{i + 1}</p>
      </p>
      <p>{item.disciplina}</p>
      <p className={`${item.mac >= 10 ? "text-blue-700" : "text-red-700"}`}>
        {item.mac}
      </p>
      <p className={`${item.npp >= 10 ? "text-blue-700" : "text-red-700"}`}>
        {item.npp}
      </p>
      <p className={`${item.npt >= 10 ? "text-blue-700" : "text-red-700"}`}>
        {item.npt}
      </p>
      <p className={`${media >= 10 ? "text-blue-700" : "text-red-700"}`}>
        {media.toFixed(1)}
      </p>
    </li>
  );
}

export default StudentNotasItem;
