import SearchBox from "../../../../components/shared/SearchBox";
import InputSearch from "../../../../components/ui/InputSearch";
import SelectSearch from "../../../../components/ui/SelectSearch";
import TurmaSubjectsItem from "./TurmaSubjectsItem";
import Message from "../../../../components/ui/Message";
import { useTeachers } from "../../../../hooks/useTeachers";
import { useParams } from "react-router-dom";

function TurmaSubjects() {
  const { teachers } = useTeachers();
  const { turmaId } = useParams();
  const teachersTurma = teachers.filter((teacher) =>
    teacher.turmasId.includes(turmaId),
  );
  console.log(teachersTurma);

  return (
    <div className="space-y-3">
      {teachersTurma.length > 0 ? (
        <div>
          <SearchBox>
            <InputSearch placeholder="Procurar disciplina" />
            <SelectSearch />
          </SearchBox>
          <div className="hidden grid-cols-[1fr_0.7fr_0.7fr_0.7fr] px-5 py-1 text-sm md:grid">
            <p className="py-2 font-semibold">Disciplina</p>
            <p className="py-2 font-semibold">Vinculo</p>
            <p className="py-2 font-semibold">Professor</p>
            <p className="py-2 font-semibold">Telefone</p>
          </div>
          <ul>
            {teachersTurma.map((item, i) => (
              <TurmaSubjectsItem index={i} item={item} key={item.id} />
            ))}
          </ul>
        </div>
      ) : (
        <Message message="Nenhuma disciplina vinculada para esta turma." />
      )}
    </div>
  );
}

export default TurmaSubjects;
