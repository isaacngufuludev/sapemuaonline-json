import { Outlet } from "react-router-dom";
import { useModal } from "../../../../contexts/ModalContext";
import Overlay from "../../../../components/shared/Overlay";
import ModalRemoveTeacher from "./ModalRemoveTeacher";

function AdminTeacher() {
  const { isRemoveTeacherModal } = useModal();

  return (
    <div>
      <Outlet />

      {isRemoveTeacherModal ? (
        <div>
          <ModalRemoveTeacher />
          <Overlay />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminTeacher;
