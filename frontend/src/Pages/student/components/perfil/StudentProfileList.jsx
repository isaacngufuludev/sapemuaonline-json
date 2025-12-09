import StudentProfileItem from "./StudentProfileItem";

const studentData = [
  {
    name: "Luzia Gonçalves",
    id: 4355,
    phoneNumber: 930886401,
    email: "luziagoncalves@gmail.com",
    datein: "14 de Setembro 2924",
    course: "Informática",
    class: "12a Classe",
    turma: "B",
    period: "Manhã",
    father: "xxxxxxxxxxxx",
    mother: "xxxxxxxxxxxx",
    birthdate: "xxxx-xx-xx",
    residencia: "Cazenga-Combustiveis",
    bi: "xxxxxxxxxxx",
  },
];

function StudentProfileList() {
  return (
    <ul className="grid grid-cols-[1.5fr_3fr] gap-7 items-start ">
      {studentData.map((item) => (
        <StudentProfileItem item={item} />
      ))}
    </ul>
  );
}

export default StudentProfileList;
