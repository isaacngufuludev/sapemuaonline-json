import SearchBox from "../../../../components/shared/SearchBox";
import InputSearch from "../../../../components/ui/InputSearch";
import SelectSearch from "../../../../components/ui/SelectSearch";
import TurmaSubjectsItem from "./TurmaSubjectsItem";

const subjects = [];
function TurmaSubjects() {
  return (
    <div>
      <SearchBox>
        <InputSearch placeholder="Procurar disciplina" />
        <SelectSearch />
      </SearchBox>
      <table className="w-full text-sm">
        <thead>
          <tr className="grid grid-cols-[0.3fr_1fr_0.7fr_0.7fr_0.7fr_0.2fr] px-2 py-1">
            <th className="text-left py-2 text-sm font-semibold"></th>
            <th className="text-left py-2 text-sm font-semibold">Disciplina</th>
            <th className="text-left py-2 text-sm font-semibold">Professor</th>
            <th className="text-left py-2 text-sm font-semibold">Turma</th>
            <th className="text-left py-2 text-sm font-semibold">Status</th>
          </tr>
        </thead>

        <tbody>
          {subjects.map((item) => (
            <TurmaSubjectsItem item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TurmaSubjects;
