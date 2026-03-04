import Title3 from "../../../../components/ui/Title3";
import TeacherTurmasInfoItem from "./TeacherTurmasInfoItem";
import { useStudents } from "../../../../hooks/useStudents";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../../../services/api";
import Loading from "../../../../components/shared/Loading";
import { useClasses } from "../../../../hooks/useClasses";
import { useCourses } from "../../../../hooks/useCourses";
import { useTeachers } from "../../../../hooks/useTeachers";
import TeacherGradesModal from "./TeacherGradesModal";
import Overlay from "../../../../components/shared/Overlay";
import { useModal } from "../../../../contexts/ModalContext";

function TeacherTurmasInfo() {
  const { classes } = useClasses();
  const { courses } = useCourses();
  const { students } = useStudents();
  const { teachers } = useTeachers();
  const { isGradesModal } = useModal();
  const { turmaId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [turma, setTurma] = useState(null);
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
    <div className="p-4 sm:p-6 lg:p-10">
      <div className="mb-5">
        <Title3>Informações da Turma #{turma.id}</Title3>
      </div>
      <ul className="grid grid-cols-1 xl:grid-cols-[1fr_3fr] gap-4 lg:gap-7 items-start">
        <TeacherTurmasInfoItem
          item={turma}
          course={turmaCourse}
          classYear={turmaClasse}
          students={turmaStudents}
          teachers={turmaTeachers}
        />
      </ul>
      {isGradesModal && (
        <div>
          <Overlay />
          <TeacherGradesModal />
        </div>
      )}
    </div>
  );
}

export default TeacherTurmasInfo;
