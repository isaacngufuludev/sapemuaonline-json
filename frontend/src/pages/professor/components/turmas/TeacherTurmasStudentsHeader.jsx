import Title3 from "../../../../components/ui/Title3";
import TeacherSearchStudent from "./TeacherSearchStudent";

function TeacherTurmasStudentsHeader() {
  return (
    <div className="flex items-center justify-between p-4">
      <Title3>Todos Estudantes</Title3>
      <div className="flex items-center gap-2">
        <TeacherSearchStudent />
        <select className="py-[7px] px-4 rounded-md focus:outline-none text-sm dark:bg-gray-800 border bg-white border-slate-200 dark:border-gray-700">
          <option value="crescente">I Trimestre</option>
          <option value="decrescente">II Trimestre</option>
          <option value="decrescente">III Trimestre</option>
        </select>
        <select className="py-[7px] px-4 rounded-md focus:outline-none text-sm dark:bg-gray-800 border bg-white border-slate-200 dark:border-gray-700">
          <option value="crescente">Matemática</option>
          <option value="decrescente">Língua Portuguesa</option>
        </select>
      </div>
    </div>
  );
}

export default TeacherTurmasStudentsHeader;
