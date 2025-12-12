import TeacherProfileItem from "./TeacherProfileItem";

const teacherData = [
  {
    name: "Henriques Cidade",
    id: 4355,
    phoneNumber: 930886401,
    email: "henriquesmanuel@gmail.com",
    datein: "14 de Setembro 2924",
    qualification: "Licenciatura",
    area: "Engenharia Informática",
    college: "Universidade Catolica de Angola",
    father: "xxxxxxxxxxxx",
    mother: "xxxxxxxxxxxx",
    birthdate: "xxxx-xx-xx",
    residencia: "Cazenga-Combustiveis",
    bi: "xxxxxxxxxxx",
  },
];

function TeacherProfileList() {
  return (
    <ul className="grid grid-cols-[1.5fr_3fr] gap-7 items-start">
      {teacherData.map((item) => (
        <TeacherProfileItem item={item} />
      ))}
    </ul>
  );
}

export default TeacherProfileList;
