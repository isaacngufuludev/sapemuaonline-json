import Title3 from "../../../../components/ui/Title3";

function StudentNotasHeader({ selectedTerm, onTermChange, generalAverage }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4">
      <div>
        <Title3>Todas as Notas</Title3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Média Geral: {generalAverage ?? "-"}
        </p>
      </div>
      <select
        value={selectedTerm}
        onChange={(e) => onTermChange(Number(e.target.value))}
        className="w-full sm:w-auto py-2 px-4 rounded-md focus:outline-none text-sm dark:bg-gray-800 border bg-white border-slate-200 dark:border-gray-700"
      >
        <option value={1}>I Trimestre</option>
        <option value={2}>II Trimestre</option>
        <option value={3}>III Trimestre</option>
      </select>
    </div>
  );
}

export default StudentNotasHeader;
