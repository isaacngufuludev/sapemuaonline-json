import SearchBox from "../../../../components/shared/SearchBox";
import InputSearch from "../../../../components/ui/InputSearch";
import SelectSearch from "../../../../components/ui/SelectSearch";
import { useStudents } from "../../../../hooks/useStudents";
import TurmaStudentsItem from "./TurmaStudentsItem";

// const title = [];

function TurmaStudents() {
  const { students } = useStudents();

  return (
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

        <tbody>
          {students.map((item) => (
            <TurmaStudentsItem item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TurmaStudents;
