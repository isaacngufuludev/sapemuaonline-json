import { useAuth } from "../contexts/AuthContext";
import { useClassYearById } from "./useClassYearById";
import { useCourseNameById } from "./useCourseNameById";
import { useTurmas } from "./useTurmas";

export function useStudentConversations() {
  const { user } = useAuth();
  const { courseNameById } = useCourseNameById();
  const { classYearById } = useClassYearById();
  const { turmas } = useTurmas();
  const userTurmas = turmas.filter((t) => {
    const turma = user.turmaId === t.id;
    return turma;
  });
  const studentChats = userTurmas.map((turm) => {
    return {
      id: turm.id,
      classYear: classYearById[turm.classId],
      course: courseNameById[turm.courseId],
      period: turm.period,
      turmaCategory: turm.turmaCategory,
    };
  });

  return { studentChats };
}
