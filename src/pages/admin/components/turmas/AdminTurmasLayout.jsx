import Message from "../../../../components/ui/Message";
import AdminCoursesItem from "./AdminCoursesItem";
import AdminTurmasItem from "./AdminTurmasItem";
import { useCourses } from "../../../../hooks/useCourses";
import { useTurmas } from "../../../../hooks/useTurmas";
import AdminTurmasHeading from "./AdminTurmasHeading";
import Loading from "../../../../components/shared/Loading";

function AdminTurmasLayout() {
  const { courses } = useCourses();
  const { turmas, isLoading } = useTurmas();

  return (
    <div className="max-w-full">
      <div>
        <AdminTurmasHeading />
        {courses.length > 0 ? (
          <div className="space-y-4">
            <div className="space-y-">
              {courses.map((course) => {
                const courseTurmas = turmas.filter(
                  (turma) => turma.courseId === course.id,
                );
                return (
                  <div key={course.id} className="overflow-hidden rounded-md">
                    <AdminCoursesItem item={course} />
                    {isLoading ? (
                      <Loading type="blue" size={40} />
                    ) : (
                      <ul className="grid grid-cols-1 gap-4 bg-white px-3 pb-3 pt-4 dark:bg-gray-800 sm:grid-cols-2 sm:px-4 sm:pt-6 lg:grid-cols-3 xl:grid-cols-4">
                        {courseTurmas.map((turma, i) => (
                          <AdminTurmasItem item={turma} key={i} />
                        ))}
                      </ul>
                    )}
                    <div className="flex items-center justify-center bg-white px-3 py-3 dark:bg-gray-800">
                      {!courseTurmas.length && (
                        <Message message="Nenhuma turma cadastrada, adicione a primeira clicando no botão acima" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
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
