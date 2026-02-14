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
        <div>
          <SearchBox>
            <InputSearch placeholder="Procurar estudante" />
            <SelectSearch />
          </SearchBox>
          <table className="w-full text-sm">
            <thead>
              <tr className="grid grid-cols-[0.3fr_1fr_0.7fr_0.7fr_0.7fr_0.2fr] px-2 py-1">
                <th className="text-left py-2 text-sm font-semibold"></th>
                <th className="text-left py-2 text-sm font-semibold">Nome</th>
                <th className="text-left py-2 text-sm font-semibold">
                  Codigo Interno
                </th>
                <th className="text-left py-2 text-sm font-semibold">Idade</th>
                <th className="text-left py-2 text-sm font-semibold">Status</th>
              </tr>
            </thead>

            <div>
              {isLoading ? (
                <Loading type="blue" size={30} />
              ) : (
                <ul>
                  {filteredStudents.map((item) => (
                    <TurmaStudentsItem item={item} />
                  ))}
                </ul>
              )}
            </div>
          </table>
        </div>
      )}

      {filteredStudents.length === 0 && (
        <Message message="Nenhum estudante encontrado para esta turma." />
      )}
    </div>
  );
}

export default TurmaStudents;
