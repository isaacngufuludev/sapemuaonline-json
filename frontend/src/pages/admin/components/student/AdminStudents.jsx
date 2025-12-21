import { Outlet } from "react-router-dom";
import { useModal } from "../../../../contexts/ModalContext";
import ModalRemoveStudent from "./ModalRemoveStudent";
import Overlay from "../../../../components/shared/Overlay";

function AdminStudents() {
  const { isRemoveStudentModal } = useModal();

  return (
    <div>
      <Outlet />

      {isRemoveStudentModal ? (
        <div>
          <ModalRemoveStudent />
          <Overlay />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminStudents;
