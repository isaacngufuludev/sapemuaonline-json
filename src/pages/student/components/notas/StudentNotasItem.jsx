function StudentNotasItem({ item, i }) {
  const media = item.average === "" || item.average == null ? "-" : Number(item.average);
  const scoreClass = (value) => {
    if (value == null || String(value).trim() === "" || value === "-") {
      return "text-gray-500 dark:text-gray-400";
    }

    const score = Number(value);
    if (Number.isNaN(score)) return "text-gray-500 dark:text-gray-400";
    return score >= 10 ? "text-blue-700" : "text-red-700";
  };
  const status =
    media === "-" ? "Sem nota" : media >= 10 ? "Aprovado" : "Reprovado";

  return (
    <li className="py-3 px-4 border-t-[0.1px] dark:border-gray-700 border-slate-200">
      <div className="hidden md:grid items-center text-sm font-semibold grid-cols-[0.4fr_2fr_1fr_1fr_1fr_1fr_1fr]">
        <div className="flex items-center justify-center">
          <span className="font-semibold rounded-full py-3 px-4 bg-slate-100 dark:bg-gray-900">
            {i + 1}
          </span>
        </div>
        <p className="truncate">{item.disciplina}</p>
        <p className={scoreClass(item.mac)}>{item.mac || "-"}</p>
        <p className={scoreClass(item.npp)}>{item.npp || "-"}</p>
        <p className={scoreClass(item.npt)}>{item.npt || "-"}</p>
        <p className={scoreClass(media)}>{media}</p>
        <p className={scoreClass(media)}>{status}</p>
      </div>

      <div className="md:hidden text-sm space-y-3">
        <div className="flex items-center gap-3">
          <span className="font-semibold rounded-full py-[6px] px-3 bg-slate-100 dark:bg-gray-900">
            {i + 1}
          </span>
          <p className="font-semibold leading-5">{item.disciplina}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-semibold">
          <p>
            MAC: <span className={scoreClass(item.mac)}>{item.mac || "-"}</span>
          </p>
          <p>
            NPP: <span className={scoreClass(item.npp)}>{item.npp || "-"}</span>
          </p>
          <p>
            NPT: <span className={scoreClass(item.npt)}>{item.npt || "-"}</span>
          </p>
          <p>
            MT: <span className={scoreClass(media)}>{media}</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default StudentNotasItem;
