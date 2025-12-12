import TeacherTurmasItem from "./TeacherTurmasItem";

const turmas = [
  {
    estudantes: 0,
    disciplinas: 0,
    turno: "Manhã",
    turma: "A",
    sala: "1",
    classe: "10a",
  },
  {
    estudantes: 0,
    disciplinas: 0,
    turno: "Manhã",
    turma: "B",
    sala: "1",
    classe: "11a",
  },
];

function TeacherTurmasList() {
  return (
    <ul className="grid grid-cols-4 py-6 px-4 bg-white gap-4  dark:bg-gray-800 ">
      {turmas.map((item) => (
        <TeacherTurmasItem item={item} />
      ))}
    </ul>
  );
}

export default TeacherTurmasList;
