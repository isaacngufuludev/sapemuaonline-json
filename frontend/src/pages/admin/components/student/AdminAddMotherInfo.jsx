import AdminAddForm from "../AdminAddForm";
import AdminLabel from "../AdminLabel";
import AdminInput from "../AdminInput";
import { useStudentForm } from "../../../../contexts/StudentFormContext";

function AdminAddMotherInfo() {
  const {
    motherJob,
    motherName,
    motherPhoneNumber,
    setMotherName,
    setMotherPhoneNumber,
    setMotherJob,
  } = useStudentForm();

  return (
    <div>
      <AdminAddForm type="four">
        <div>
          <AdminLabel htmlFor="mae">Nome Completo</AdminLabel>
          <AdminInput
            id="mae"
            type="text"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
          />
        </div>
        <div>
          <AdminLabel htmlFor="mae-telefone">Telefone do mãe</AdminLabel>
          <AdminInput
            id="mae-telefone"
            type="text"
            value={motherPhoneNumber}
            onChange={(e) => setMotherPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <AdminLabel htmlFor="function-mae">Ocupação do mãe</AdminLabel>
          <AdminInput
            id="function-mae"
            type="text"
            value={motherJob}
            onChange={(e) => setMotherJob(e.target.value)}
          />
        </div>
      </AdminAddForm>
    </div>
  );
}

export default AdminAddMotherInfo;
