import StudentColleaguesItem from "./StudentColleaguesItem";

const colleaguesData = [
  {
    name: "Isaac Ngufulu Nzinga Yambi",
    idade: "15 anos",
    genero: "Masculino",
    phoneNumber: "+244 930886401",
  },
  {
    name: "Henriques Cidade",
    idade: "15 anos",
    genero: "Masculino",
    phoneNumber: "+244 930886401",
  },
  {
    name: "Luzia Gonçalves",
    idade: "15 anos",
    genero: "Feminino",
    phoneNumber: "+244 930886401",
  },
];

function StudentColleaguesList() {
  return (
    <ul>
      {colleaguesData.map((item, i) => (
        <StudentColleaguesItem item={item} i={i} />
      ))}
    </ul>
  );
}

export default StudentColleaguesList;
