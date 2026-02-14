import AdminAddForm from "../AdminAddForm";
import AdminLabel from "../AdminLabel";
import AdminInput from "../AdminInput";
import { useStudentForm } from "../../../../contexts/StudentFormContext";
import FloatInputLabel from "../../../../components/ui/FloatInputLabel";

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
          <FloatInputLabel
            value={guardionName}
            name="Nome Completo"
            type="text"
            onChange={(e) => setGuardionName(e.target.value)}
          />
        </div>
        <div>
          <FloatInputLabel
            value={guardionPhoneNumber}
            max={9}
            name="Telefone do Guardião"
            type="text"
            onChange={(e) => setGuardionPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <FloatInputLabel
            value={guardionJob}
            name="Ocupação do guardião"
            type="text"
            onChange={(e) => setGuardionJob(e.target.value)}
          />
        </div>
      </AdminAddForm>
    </div>
  );
}

export default AdminAddGuardionInfo;
