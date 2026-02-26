import Title4 from "../../../../components/ui/Title4";
import Title3 from "../../../../components/ui/Title3";
import AdminTurmasLinks from "./AdminTurmasLinks";
import Loading from "../../../../components/shared/Loading";
import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../../../../services/api";
import { useClasses } from "../../../../hooks/useClasses";
import { useCourses } from "../../../../hooks/useCourses";
import { useStudents } from "../../../../hooks/useStudents";
import { useTeachers } from "../../../../hooks/useTeachers";

function AdminTurmasDetailItem() {
  const { turmaId } = useParams();
  const [turma, setTurma] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { classes } = useClasses();
  const { courses } = useCourses();
  const { students } = useStudents();
  const { teachers } = useTeachers();
  const turmaCourse = courses.find((c) => c.id === turma?.courseId);
  const turmaClasse = classes.find((c) => c.id === turma?.classId);
  const turmaStudents = students.filter((s) => s.turmaId === turma?.id);
  const turmaTeachers = teachers.filter((s) => s.turmasId.includes(turma?.id));

  useEffect(() => {
    async function fetchTurma() {
      setIsLoading(true);
      const data = await get(`turmas/${turmaId}`);
      setTurma(data);
      setIsLoading(false);
    }
    fetchTurma();
  }, [turmaId]);

  if (isLoading) return <Loading type="blue" size={50} />;
  if (!turma) return;

  return (
    <li>
      <div className="grid grid-cols-1 gap-4 lg:gap-5 xl:grid-cols-[0.8fr_3fr]">
        <div className="flex flex-col gap-3 rounded-md border-[0.1px] border-slate-200 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between border-b-[0.1px] border-slate-200 px-4 py-3 dark:border-gray-700 sm:px-5">
            <Title3>Turma</Title3>
            <p className="text-sm dark:bg-green-500 bg-green-200 text-green-700 dark:text-green-100 py-1 px-3 rounded-full">
              activo
            </p>
          </div>
          <div className="flex flex-col gap-4 px-4 pb-3 text-sm sm:px-5">
            <div className="flex items-center justify-between gap-3">
              <Title4>Turma</Title4>
              <p>{turma?.turmaCategory}</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <Title4>Classe</Title4>
              <p>{turmaClasse?.classYear}</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <Title4>Curso</Title4>
              <p>{turmaCourse?.courseName}</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <Title4>Periodo</Title4>
              <p>{turma?.period}</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <Title4>Sala</Title4>
              <p> {turma?.room > 9 ? turma?.room : `0${turma?.room}`}</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <Title4>Estudantes</Title4>
              <p>{turmaStudents.length}</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <Title4>Professores</Title4>
              <p>{turmaTeachers.length}</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <Title4>Total Disciplinas</Title4>
              <p>{turma?.subjects}</p>
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <AdminTurmasLinks />
          <Outlet />
        </div>
      </div>
    </li>
  );
}

export default AdminTurmasDetailItem;
