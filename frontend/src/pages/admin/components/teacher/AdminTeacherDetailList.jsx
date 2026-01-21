import AdminTeacherDetailItem from "./AdminTeacherDetailItem";

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
    birthdate: "1995-05-22",
    residencia: "Cazenga-Combustiveis",
    genre: "Masculino",
    bi: "00001200LA1235",
  },
];

function AdminTeacherDetailList() {
  return (
    <ul className="grid grid-cols-[1.5fr_3fr] gap-7 items-start">
      {teacherData.map((item) => (
        <AdminTeacherDetailItem item={item} />
      ))}
    </ul>
  );
}

export default AdminTeacherDetailList;
