import ModalTurma from "./ModalTurma";
import AdminTurmasHeading from "./AdminTurmasHeading";
import AdminTurmasLayout from "./AdminTurmasLayout";
import Overlay from "../../../../components/shared/Overlay";
import ModalRemoveTurma from "./ModalRemoveTurma";
import ModalRemoveCourse from "./ModalRemoveCourse";
import Message from "../../../../components/ui/Message";
import ModalCourse from "./ModalCourse";
import AdminCoursesItem from "./AdminCoursesItem";
import AdminTurmasItem from "./AdminTurmasItem";
import { useModal } from "../../../../contexts/ModalContext";
import { useCourses } from "../../../../hooks/useCourses";
import { useTurmas } from "../../../../hooks/useTurmas";

function AdminTurmas() {
  const {
    isTurmaModal,
    isCourseModal,
    isRemoveTurmaModal,
    isRemoveCourseModal,
  } = useModal();
  const { courses } = useCourses();
  const { turmas } = useTurmas();

  return (
    <div>
      <AdminTurmasHeading />
      <AdminTurmasLayout>
        {courses.length > 0 ? (
          <div>
            <ul className="space-y-6">
              {courses.map((course) => {
                const courseTurmas = turmas.filter(
                  (turma) => turma.courseId === course.id
                );
                return (
                  <ul key={course.id}>
                    <AdminCoursesItem item={course} />
                    <ul className="grid grid-cols-4 py-6 px-4 bg-white gap-4 dark:bg-gray-800">
                      {courseTurmas.map((turma, i) => (
                        <AdminTurmasItem item={turma} key={i} />
                      ))}
                    </ul>
                  </ul>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}

        <div className="mt-20">
          {!courses.length ? (
            <Message message="Adicione o primeiro curso a plataforma clicando no botão acima" />
          ) : (
            ""
          )}
        </div>
      </AdminTurmasLayout>

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
