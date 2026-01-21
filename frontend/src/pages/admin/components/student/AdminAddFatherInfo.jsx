import AdminAddForm from "../AdminAddForm";
import AdminInput from "../AdminInput";
import AdminLabel from "../AdminLabel";
import { useStudentForm } from "../../../../contexts/StudentFormContext";

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
          <AdminLabel htmlFor="pai">Nome Completo</AdminLabel>
          <AdminInput
            id="pai"
            type="text"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          />
        </div>
        <div>
          <AdminLabel htmlFor="pai-telefone">Telefone do Pai</AdminLabel>
          <AdminInput
            id="pai-telefone"
            type="text"
            value={fatherPhoneNumber}
            onChange={(e) => setFatherPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <AdminLabel htmlFor="function-pai">Ocupação do pai</AdminLabel>
          <AdminInput
            id="function-pai"
            type="text"
            value={fatherJob}
            onChange={(e) => setFatherJob(e.target.value)}
          />
        </div>
      </AdminAddForm>
    </div>
  );
}

export default AdminAddFatherInfo;
