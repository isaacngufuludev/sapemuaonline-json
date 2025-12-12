import StudentNotasItem from "./StudentNotasItem";

const notas = [
  {
    disciplina: "Matemática",
    mac: 12,
    npp: 9,
    npt: 15,
  },
  {
    disciplina: "TLP",
    mac: 6,
    npp: 14,
    npt: 9,
  },
  {
    disciplina: "SEAC",
    mac: 12,
    npp: 14,
    npt: 15,
  },
];

function StudentNotasList() {
  return (
    <ul>
      {notas.map((item, i) => (
        <StudentNotasItem item={item} i={i} />
      ))}
    </ul>
  );
}

export default StudentNotasList;
