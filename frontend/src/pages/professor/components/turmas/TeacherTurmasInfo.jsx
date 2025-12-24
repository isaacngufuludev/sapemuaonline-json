import Title3 from "../../../../components/ui/Title3";
import TeacherTurmasInfoItem from "./TeacherTurmasInfoItem";

const turmas = [
  {
    id: 1,
    estudantes: 0,
    disciplinas: 0,
    turno: "Manhã",
    turma: "A",
    classe: "10a",
    curso: "Informática",
  },
];

function TeacherTurmasInfo() {
  return (
    <div>
      <div className="mb-5">
        <Title3>Informações da Turma</Title3>
      </div>
      <ul className="grid grid-cols-[1fr_3fr] gap-7 items-start ">
        {turmas.map((item) => (
          <TeacherTurmasInfoItem item={item} />
        ))}
      </ul>
    </div>
  );
}

export default TeacherTurmasInfo;
