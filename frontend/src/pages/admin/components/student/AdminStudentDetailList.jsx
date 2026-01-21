import AdminStudentDetailItem from "./AdminStudentDetailItem";

const studentData = [
  {
    name: "Luzia Gonçalves",
    id: 4355,
    phoneNumber: 930886401,
    genre: "Feminino",
    email: "luziagoncalves@gmail.com",
    datein: "14 de Setembro 2924",
    course: "Informática",
    class: "12a Classe",
    turma: "B",
    age: 20,
    period: "Manhã",
    father: "xxxxxxxxxxxx",
    mother: "xxxxxxxxxxxx",
    birthdate: "xxxx-xx-xx",
    residencia: "Cazenga-Combustiveis",
    bi: "000247LA999000",
  },
];

function AdminStudentDetailList() {
  return (
    <ul className="grid grid-cols-[1.5fr_3fr] gap-7 items-start">
      {studentData.map((item) => (
        <AdminStudentDetailItem item={item} />
      ))}
    </ul>
  );
}

export default AdminStudentDetailList;
