import TeacherTurmasItem from "./TeacherTurmasItem";

const turmas = [
  {
    id: 1,
    estudantes: 0,
    disciplinas: 0,
    turno: "Manhã",
    turma: "A",
    classe: "10ª",
    curso: "Informática",
  },
  {
    id: 2,
    estudantes: 0,
    disciplinas: 0,
    turno: "Manhã",
    turma: "B",
    classe: "11ª",
    curso: "Informática",
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
