import StudentTeachersItem from "./StudentTeachersItem";

const teachersData = [
  {
    name: "Isaac Ngufulu Nzinga Yambi",
    disciplina: "Electronica e telecomunicações",
    email: "isaacngufulu70@gmail.com",
    phoneNumber: "+244 930886401",
  },
  {
    name: "Isaac Ngufulu Nzinga Yambi",
    disciplina: "TLP, Física",
    email: "isaacngufulu70@gmail.com",
    phoneNumber: "+244 930886401",
  },
  {
    name: "Isaac Ngufulu Nzinga Yambi",
    disciplina: "Matématica, LP",
    email: "isaacngufulu70@gmail.com",
    phoneNumber: "+244 930886401",
  },
];

function StudentTeachersList() {
  return (
    <ul>
      {teachersData.map((item, i) => (
        <StudentTeachersItem item={item} i={i} />
      ))}
    </ul>
  );
}

export default StudentTeachersList;
