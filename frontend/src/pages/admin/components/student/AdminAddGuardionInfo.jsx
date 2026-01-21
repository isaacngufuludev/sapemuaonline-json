import AdminAddForm from "../AdminAddForm";
import AdminLabel from "../AdminLabel";
import AdminInput from "../AdminInput";
import { useStudentForm } from "../../../../contexts/StudentFormContext";

function AdminAddGuardionInfo() {
  const {
    guardionJob,
    guardionName,
    guardionPhoneNumber,
    setGuardionName,
    setGuardionPhoneNumber,
    setGuardionJob,
  } = useStudentForm();

  return (
    <div>
      <AdminAddForm type="four">
        <div>
          <AdminLabel htmlFor="guardiao">Nome Completo</AdminLabel>
          <AdminInput
            id="guardiao"
            type="text"
            value={guardionName}
            onChange={(e) => setGuardionName(e.target.value)}
          />
        </div>
        <div>
          <AdminLabel htmlFor="guardiao-telefone">
            Telefone do Guardião
          </AdminLabel>
          <AdminInput
            id="guardiao-telefone"
            type="text"
            value={guardionPhoneNumber}
            onChange={(e) => setGuardionPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <AdminLabel htmlFor="function-guardiao">
            Ocupação do Guardião
          </AdminLabel>
          <AdminInput
            id="function-guardiao"
            type="text"
            value={guardionJob}
            onChange={(e) => setGuardionJob(e.target.value)}
          />
        </div>
      </AdminAddForm>
    </div>
  );
}

export default AdminAddGuardionInfo;
