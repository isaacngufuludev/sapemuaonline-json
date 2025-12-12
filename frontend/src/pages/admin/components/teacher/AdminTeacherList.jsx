import AdminTeacherItem from "./AdminTeacherItem";

const teacherData = [
  {
    name: "Isaac Ngufulu Nzinga Yambi",
    id: 4355,
    qualification: "Técnico Médio",
    telefone: "+244 930886401",
    genero: "Masculino",
    idade: "29 anos",
    email: "isaacngufulu70@gmail.com",
    formation: "Informática",
  },
  {
    name: "Kinavuide Antonio Afonso David",
    id: 4355,
    qualification: "Licenciatura",
    telefone: "+244 930886401",
    genero: "Masculino",
    idade: "29 anos",
    email: "isaacngufulu70@gmail.com",
    formation: "Informática",
  },
  {
    name: "Henriques Manuel Antonio Cidade",
    id: 4355,
    qualification: "Técnico Médio",
    telefone: "+244 930886401",
    genero: "Masculino",
    idade: "29 anos",
    email: "isaacngufulu70@gmail.com",
    formation: "Informática",
  },
  {
    name: "Dorivaldo Quimanga Quizembe",
    id: 4355,
    qualification: "Licenciatura",
    telefone: "+244 930886401",
    genero: "Masculino",
    idade: "29 anos",
    email: "isaacngufulu70@gmail.com",
    formation: "Informática",
  },
];

function AdminTeacherList() {
  return (
    <ul className="bg-white dark:bg-gray-800 text-sm">
      {teacherData.map((item, i) => (
        <AdminTeacherItem item={item} i={i} />
      ))}
    </ul>
  );
}

export default AdminTeacherList;
