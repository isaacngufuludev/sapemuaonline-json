import Title3 from "../../../../components/ui/Title3";

function StudentNotasHeader() {
  return (
    <div className="flex items-center justify-between p-4">
      <Title3>Todas as Notas</Title3>
      <select className="py-2 px-5 rounded-md focus:outline-none text-sm dark:bg-gray-800 border bg-white border-slate-200 dark:border-gray-700">
        <option value="crescente">I Trimestre</option>
        <option value="decrescente">II Trimestre</option>
        <option value="decrescente">III Trimestre</option>
      </select>
    </div>
  );
}

export default StudentNotasHeader;
