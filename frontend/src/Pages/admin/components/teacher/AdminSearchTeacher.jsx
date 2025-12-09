import InputSearch from "../../../../components/ui/InputSearch";
import SelectSearch from "../../../../components/ui/SelectSearch";

function AdminSearchTeacher() {
  return (
    <div className="bg-white flex items-center justify-between p-3 rounded-md dark:bg-gray-800">
      <InputSearch placeholder="Procurar professor" />
      <SelectSearch />
    </div>
  );
}

export default AdminSearchTeacher;
