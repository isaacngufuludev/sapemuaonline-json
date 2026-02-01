import Message from "../../../../components/ui/Message";
import AdminCoursesItem from "./AdminCoursesItem";
import AdminTurmasItem from "./AdminTurmasItem";
import { useCourses } from "../../../../hooks/useCourses";
import { useTurmas } from "../../../../hooks/useTurmas";
import AdminTurmasHeading from "./AdminTurmasHeading";

function AdminTurmasLayout() {
  const { courses } = useCourses();
  const { turmas } = useTurmas();

  return (
    <div>
      <div>
        <AdminTurmasHeading />
        {courses.length > 0 ? (
          <div>
            <ul className="">
              {courses.map((course) => {
                const courseTurmas = turmas.filter(
                  (turma) => turma.courseId === course.id,
                );
                return (
                  <ul key={course.id}>
                    <AdminCoursesItem item={course} />
                    {courseTurmas.length > 0 && (
                      <ul className="grid grid-cols-4 py-6 px-4 bg-white gap-4 dark:bg-gray-800">
                        {courseTurmas.map((turma, i) => (
                          <AdminTurmasItem item={turma} key={i} />
                        ))}
                      </ul>
                    )}
                    <div className="bg-white dark:bg-gray-800 flex items-center justify-center py-3">
                      {!courseTurmas.length && (
                        <Message message="Nenhuma turma cadastrada, adicione a primeira clicando no botão acima" />
                      )}
                    </div>
                  </ul>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}

        <div className="mt-20">
          {!courses.length && (
            <Message message="Adicione o primeiro curso a plataforma clicando no botão acima" />
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminTurmasLayout;
