import SearchBox from "../../../../components/shared/SearchBox";
import InputSearch from "../../../../components/ui/InputSearch";
import SelectSearch from "../../../../components/ui/SelectSearch";
import TurmaSubjectsItem from "./TurmaSubjectsItem";
import Message from "../../../../components/ui/Message";

const subjects = [];
function TurmaSubjects() {
  return (
    <div className="space-y-3">
      {subjects.length > 0 ? (
        <div>
          <SearchBox>
            <InputSearch placeholder="Procurar disciplina" />
            <SelectSearch />
          </SearchBox>
          <div className="hidden grid-cols-[0.3fr_1fr_0.7fr_0.7fr_0.7fr_0.2fr] px-2 py-1 text-sm md:grid">
            <p className="py-2 font-semibold"></p>
            <p className="py-2 font-semibold">Disciplina</p>
            <p className="py-2 font-semibold">Professor</p>
            <p className="py-2 font-semibold">Turma</p>
            <p className="py-2 font-semibold">Status</p>
            <p className="py-2 font-semibold"></p>
          </div>
          <ul>
            {subjects.map((item) => (
              <TurmaSubjectsItem item={item} key={item.id} />
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
