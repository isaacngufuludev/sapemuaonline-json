import InputSearch from "../../../../components/ui/InputSearch";
import SelectSearch from "../../../../components/ui/SelectSearch";

function AdminSearchStudent() {
  return (
    <div className="bg-white flex items-center justify-between p-3 rounded-md dark:bg-gray-800">
      <InputSearch placeholder="Procurar estudante" />
      <SelectSearch />
    </div>
  );
}

export default AdminSearchStudent;
