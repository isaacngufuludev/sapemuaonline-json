import AdminStudentItem from "./AdminStudentItem";

const studentData = [
  {
    name: "Isaac Ngufulu Nzinga Yambi",
    id: 4355,
    class: "11 Classe",
    course: "Informática",
    genero: "Masculino",
    idade: "29 anos",
  },
  {
    name: "Kinavuide Antonio Afonso David",
    id: 4355,
    class: "11 Classe",
    course: "Informática",
    genero: "Masculino",
    idade: "29 anos",
  },
  {
    name: "Henriques Manuel Antonio Cidade",
    id: 4355,
    class: "11 Classe",
    course: "Informática",
    genero: "Masculino",
    idade: "29 anos",
  },
  {
    name: "Dorivaldo Quimanga Quizembe",
    id: 4355,
    class: "11 Classe",
    course: "Informática",
    genero: "Masculino",
    idade: "29 anos",
  },
];

function AdminStudentList() {
  return (
    <ul className="bg-white   dark:bg-gray-800 text-sm">
      {studentData.map((item) => (
        <AdminStudentItem item={item} />
      ))}
    </ul>
  );
}

export default AdminStudentList;
