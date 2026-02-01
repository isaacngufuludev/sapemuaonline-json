import SearchBox from "../../../../components/shared/SearchBox";
import InputSearch from "../../../../components/ui/InputSearch";
import SelectSearch from "../../../../components/ui/SelectSearch";

function AdminSearchTeacher() {
  return (
    <SearchBox>
      <InputSearch placeholder="Procurar professor" />
      <SelectSearch />
    </SearchBox>
  );
}

export default AdminSearchTeacher;
