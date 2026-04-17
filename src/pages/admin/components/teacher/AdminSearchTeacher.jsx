import SearchBox from "../../../../components/shared/SearchBox";
import InputSearch from "../../../../components/ui/InputSearch";
import SelectSearch from "../../../../components/ui/SelectSearch";

const teacherSortOptions = [
  { value: "", label: "Ordenar" },
  { value: "name-asc", label: "Nome (A-Z)" },
  { value: "name-desc", label: "Nome (Z-A)" },
  { value: "age-asc", label: "Idade (Crescente)" },
  { value: "age-desc", label: "Idade (Decrescente)" },
];

function AdminSearchTeacher({ searchTerm, sortBy, onSearchChange, onSortChange }) {
  return (
    <SearchBox>
      <InputSearch
        placeholder="Procurar professor"
        value={searchTerm}
        onChange={onSearchChange}
        id="teacher-search"
        name="teacher-search"
      />
      <SelectSearch
        value={sortBy}
        onChange={onSortChange}
        options={teacherSortOptions}
        id="teacher-sort"
        name="teacher-sort"
      />
    </SearchBox>
  );
}

export default AdminSearchTeacher;
