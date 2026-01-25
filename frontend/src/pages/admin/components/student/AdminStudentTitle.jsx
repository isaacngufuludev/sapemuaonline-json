import { useStudents } from "../../../../hooks/useStudents";
import AdminStudentTitleItem from "./AdminStudentTitleItem";

const data = [
  "",
  "Nome",
  "Código Interno",
  "Classe",
  "Curso",
  "Genero",
  "Idade",
];

function AdminStudentTitle() {
  return (
    <ul className="grid grid-cols-[0.3fr_1.5fr_0.7fr_0.7fr_0.7fr_0.5fr_0.5fr_0.2fr] items-center px-4 py-2">
      {data.map((item, i) => (
        <AdminStudentTitleItem item={item} key={i} />
      ))}
    </ul>
  );
}

export default AdminStudentTitle;
