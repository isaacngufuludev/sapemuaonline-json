import AdminAddForm from "../AdminAddForm";
import AdminInput from "../AdminInput";
import AdminLabel from "../AdminLabel";
import { useStudentForm } from "../../../../contexts/StudentFormContext";
import FloatInputLabel from "../../../../components/ui/FloatInputLabel";

function AdminAddFatherInfo() {
  const {
    fatherJob,
    fatherPhoneNumber,
    fatherName,
    setFatherJob,
    setFatherName,
    setFatherPhoneNumber,
  } = useStudentForm();

  return (
    <div>
      <AdminAddForm type="four">
        <div>
          <FloatInputLabel
            value={fatherName}
            name="Nome Completo"
            type="text"
            onChange={(e) => setFatherName(e.target.value)}
          />
        </div>

        <div>
          <FloatInputLabel
            value={fatherPhoneNumber}
            name="Telefone do Pai"
            max={9}
            type="text"
            onChange={(e) => setFatherPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <FloatInputLabel
            value={fatherJob}
            name="Ocupação do Pai"
            type="text"
            onChange={(e) => setFatherJob(e.target.value)}
          />
        </div>
      </AdminAddForm>
    </div>
  );
}

export default AdminAddFatherInfo;
