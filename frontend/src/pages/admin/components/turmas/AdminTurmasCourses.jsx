import AdminTurmasItem from "./AdminTurmasItem";

const turmas = [
  {
    estudantes: 0,
    disciplinas: 0,
    turno: "Manhã",
    turma: "A",
    classe: "10ª",
  },
  {
    estudantes: 0,
    disciplinas: 0,
    turno: "Manhã",
    turma: "B",
    classe: "11ª",
  },
  {
    estudantes: 0,
    disciplinas: 0,
    turno: "Tarde",
    turma: "B",
    classe: "12ª",
  },
  {
    estudantes: 0,
    disciplinas: 0,
    turno: "Tarde",
    turma: "B",
    classe: "13ª",
  },
];

function AdminTurmasCourses() {
  return (
    <ul className="grid grid-cols-4 py-6 px-4 bg-white gap-4  dark:bg-gray-800 ">
      {turmas.map((item, i) => (
        <AdminTurmasItem item={item} key={i} />
      ))}
    </ul>
  );
}

export default AdminTurmasCourses;
