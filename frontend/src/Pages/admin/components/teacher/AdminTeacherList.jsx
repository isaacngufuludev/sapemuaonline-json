import AdminTeacherItem from "./AdminTeacherItem";

const teacherData = [
  {
    name: "Isaac Ngufulu Nzinga Yambi",
    id: 4355,
    qualification: "11 Classe",
    telefone: "Informática",
    genero: "Masculino",
    idade: "29 anos",
  },
  {
    name: "Kinavuide Antonio Afonso David",
    id: 4355,
    qualification: "11 Classe",
    telefone: "Informática",
    genero: "Masculino",
    idade: "29 anos",
  },
  {
    name: "Henriques Manuel Antonio Cidade",
    id: 4355,
    qualification: "11 Classe",
    telefone: "Informática",
    genero: "Masculino",
    idade: "29 anos",
  },
  {
    name: "Dorivaldo Quimanga Quizembe",
    id: 4355,
    qualification: "11 Classe",
    telefone: "Informática",
    genero: "Masculino",
    idade: "29 anos",
  },
];

function AdminTeacherList() {
  return (
    <ul className="bg-white dark:bg-gray-800 text-sm">
      {teacherData.map((item) => (
        <AdminTeacherItem item={item} />
      ))}
    </ul>
  );
}

export default AdminTeacherList;
