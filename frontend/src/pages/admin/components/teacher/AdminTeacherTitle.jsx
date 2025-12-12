import AdminTeacherTitleItem from "./AdminTeacherTitleItem";

const data = [
  "",
  "Nome",
  "Código Interno",
  "Qualificação",
  "Telefone",
  "Genero",
  "Idade",
];

function AdminTeacherTitle() {
  return (
    <ul className="grid grid-cols-[0.3fr_1.5fr_0.7fr_0.7fr_0.7fr_0.5fr_0.3fr_0.3fr] items-center px-4 py-2">
      {data.map((item) => (
        <AdminTeacherTitleItem item={item} />
      ))}
    </ul>
  );
}

export default AdminTeacherTitle;
