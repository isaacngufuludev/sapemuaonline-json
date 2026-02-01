import SearchBox from "../../../../components/shared/SearchBox";
import InputSearch from "../../../../components/ui/InputSearch";
import SelectSearch from "../../../../components/ui/SelectSearch";

function AdminSearchStudent() {
  return (
    <SearchBox>
      <InputSearch placeholder="Procurar estudante" />
      <SelectSearch />
    </SearchBox>
  );
}

export default AdminSearchStudent;
