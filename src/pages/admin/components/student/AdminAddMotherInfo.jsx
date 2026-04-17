import AdminAddForm from "../AdminAddForm";
import AdminLabel from "../AdminLabel";
import AdminInput from "../AdminInput";
import { useStudentForm } from "../../../../contexts/StudentFormContext";
import FloatInputLabel from "../../../../components/ui/FloatInputLabel";

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
          <FloatInputLabel
            value={motherName}
            name="Nome Completo"
            type="text"
            onChange={(e) => setMotherName(e.target.value)}
          />
        </div>
        <div>
          <FloatInputLabel
            value={motherPhoneNumber}
            name="Telefone da Mãe"
            max={9}
            type="text"
            onChange={(e) => setMotherPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <FloatInputLabel
            value={motherJob}
            name="Ocupação da Mãe"
            type="text"
            onChange={(e) => setMotherJob(e.target.value)}
          />
        </div>
      </AdminAddForm>
    </div>
  );
}

export default AdminAddMotherInfo;
