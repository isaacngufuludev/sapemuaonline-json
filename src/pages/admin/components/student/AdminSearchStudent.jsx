import SearchBox from "../../../../components/shared/SearchBox";
import InputSearch from "../../../../components/ui/InputSearch";
import SelectSearch from "../../../../components/ui/SelectSearch";

const studentSortOptions = [
  { value: "", label: "Ordenar" },
  { value: "name-asc", label: "Nome (A-Z)" },
  { value: "name-desc", label: "Nome (Z-A)" },
  { value: "age-asc", label: "Idade (Crescente)" },
  { value: "age-desc", label: "Idade (Decrescente)" },
];

function AdminSearchStudent({ searchTerm, sortBy, onSearchChange, onSortChange }) {
  return (
    <SearchBox>
      <InputSearch
        placeholder="Procurar estudante"
        value={searchTerm}
        onChange={onSearchChange}
        id="student-search"
        name="student-search"
      />
      <SelectSearch
        value={sortBy}
        onChange={onSortChange}
        options={studentSortOptions}
        id="student-sort"
        name="student-sort"
      />
    </SearchBox>
  );
}

export default AdminSearchStudent;
