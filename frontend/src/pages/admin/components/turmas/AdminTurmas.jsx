import ModalTurma from "./ModalTurma";
import Overlay from "../../../../components/shared/Overlay";
import ModalRemoveTurma from "./ModalRemoveTurma";
import ModalRemoveCourse from "./ModalRemoveCourse";
import ModalCourse from "./ModalCourse";
import { useModal } from "../../../../contexts/ModalContext";
import ModalClass from "./ModalClass";
import { Outlet } from "react-router-dom";

function AdminTurmas() {
  const {
    isTurmaModal,
    isCourseModal,
    isClassModal,
    isRemoveTurmaModal,
    isRemoveCourseModal,
  } = useModal();

  return (
    <div>
      <Outlet />

      {isTurmaModal ? (
        <div>
          <ModalTurma />
          <Overlay />
        </div>
      ) : (
        ""
      )}
      {isCourseModal ? (
        <div>
          <ModalCourse />
          <Overlay />
        </div>
      ) : (
        ""
      )}
      {isClassModal ? (
        <div>
          <ModalClass />
          <Overlay />
        </div>
      ) : (
        ""
      )}

      {isRemoveTurmaModal ? (
        <div>
          <ModalRemoveTurma />
          <Overlay />
        </div>
      ) : (
        ""
      )}

      {isRemoveCourseModal ? (
        <div>
          <ModalRemoveCourse />
          <Overlay />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminTurmas;
