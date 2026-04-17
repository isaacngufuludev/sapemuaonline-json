import { useParams } from "react-router-dom";
import SearchBox from "../../../../components/shared/SearchBox";
import InputSearch from "../../../../components/ui/InputSearch";
import SelectSearch from "../../../../components/ui/SelectSearch";
import { useStudents } from "../../../../hooks/useStudents";
import TurmaStudentsItem from "./TurmaStudentsItem";
import Loading from "../../../../components/shared/Loading";
import Message from "../../../../components/ui/Message";

function TurmaStudents() {
  const { students, isLoading } = useStudents();
  const { turmaId } = useParams();
  const filteredStudents = students.filter((s) => s.turmaId === turmaId);

  return (
    <div>
      {filteredStudents.length > 0 && (
        <div className="space-y-3">
          <SearchBox>
            <InputSearch placeholder="Procurar estudante" />
            <SelectSearch />
          </SearchBox>
          <div className="hidden grid-cols-[0.3fr_1fr_0.7fr_0.7fr_0.7fr_0.2fr] px-2 text-sm md:grid">
            <p className=" font-semibold"></p>
            <p className=" font-semibold">Nome</p>
            <p className=" font-semibold">Codigo Interno</p>
            <p className=" font-semibold">Idade</p>
            <p className=" font-semibold">Status</p>
            <p className="font-semibold"></p>
          </div>

          {isLoading ? (
            <Loading type="blue" size={30} />
          ) : (
            <ul className="space-y-2 md:space-y-0">
              {filteredStudents.map((item) => (
                <TurmaStudentsItem item={item} key={item.id} />
              ))}
            </ul>
          )}
        </div>
      )}

      {filteredStudents.length === 0 && (
        <Message message="Nenhum estudante encontrado para esta turma." />
      )}
    </div>
  );
}

export default TurmaStudents;
