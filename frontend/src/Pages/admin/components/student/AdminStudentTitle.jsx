import AdminStudentTitleItem from "./AdminStudentTitleItem";

const data = ["Nome", "Código Interno", "Classe", "Curso", "Genero", "Idade"];

function AdminStudentTitle() {
  return (
    <ul className="grid grid-cols-[1.8fr_1fr_1fr_1fr_1fr_0.5fr_0.3fr] items-center px-4 py-2">
      {data.map((item) => (
        <AdminStudentTitleItem item={item} />
      ))}
    </ul>
  );
}

export default AdminStudentTitle;
