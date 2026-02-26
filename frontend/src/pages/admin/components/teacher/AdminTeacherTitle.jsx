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
    <ul className="hidden lg:grid grid-cols-[0.3fr_1.5fr_0.7fr_0.7fr_0.7fr_0.5fr_0.5fr_0.2fr] items-center px-4 py-3">
      {data.map((item, i) => (
        <AdminTeacherTitleItem item={item} key={i} />
      ))}
    </ul>
  );
}

export default AdminTeacherTitle;
