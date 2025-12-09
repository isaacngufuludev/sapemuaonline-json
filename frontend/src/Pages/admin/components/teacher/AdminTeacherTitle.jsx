const data = [
  "Nome",
  "Código Interno",
  "Qualificação",
  "Telefone",
  "Genero",
  "Idade",
];

function AdminTeacherTitle() {
  return (
    <ul className="grid grid-cols-[1.8fr_1fr_1fr_1fr_1fr_0.5fr_0.3fr] items-center px-4 py-2">
      {data.map((item) => (
        <AdminTeacherTitleItem item={item} />
      ))}
    </ul>
  );
}

export default AdminTeacherTitle;

function AdminTeacherTitleItem({ item }) {
  return <li className="font-semibold text-sm">{item}</li>;
}
