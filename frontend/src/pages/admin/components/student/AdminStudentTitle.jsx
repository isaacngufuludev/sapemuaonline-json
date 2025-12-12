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
    <ul className="grid grid-cols-[0.3fr_1.5fr_0.7fr_0.7fr_0.7fr_0.5fr_0.3fr_0.3fr] items-center px-4 py-2">
      {data.map((item) => (
        <AdminStudentTitleItem item={item} />
      ))}
    </ul>
  );
}

export default AdminStudentTitle;
