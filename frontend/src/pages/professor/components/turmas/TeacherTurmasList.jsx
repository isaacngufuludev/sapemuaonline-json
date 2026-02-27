import { useMemo } from "react";
import TeacherTurmasItem from "./TeacherTurmasItem";
import { useAuth } from "../../../../contexts/AuthContext";
import { useTurmas } from "../../../../hooks/useTurmas";
import { useCourses } from "../../../../hooks/useCourses";
import { useClasses } from "../../../../hooks/useClasses";
import { useStudents } from "../../../../hooks/useStudents";

function TeacherTurmasList() {
  const { user } = useAuth();
  const { turmas } = useTurmas();
  const { courses } = useCourses();
  const { classes } = useClasses();
  const { students } = useStudents();

  const teacherTurmaIds = useMemo(
    () => new Set(user?.turmasId ?? []),
    [user?.turmasId],
  );
  const teacherClassIds = useMemo(
    () => new Set(user?.classesId ?? []),
    [user?.classesId],
  );

  const turmasTeacher = useMemo(
    () => turmas.filter((turma) => teacherTurmaIds.has(turma.id)),
    [turmas, teacherTurmaIds],
  );

  const courseNameById = useMemo(
    () =>
      courses.reduce((acc, course) => {
        acc[course.id] = course.courseName;
        return acc;
      }, {}),
    [courses],
  );

  const classYearById = useMemo(
    () =>
      classes.reduce((acc, classItem) => {
        acc[classItem.id] = classItem.classYear;
        return acc;
      }, {}),
    [classes],
  );

  const studentCountByTurmaId = useMemo(
    () =>
      students.reduce((acc, student) => {
        if (student.turmaId == null) return acc;
        acc[student.turmaId] = (acc[student.turmaId] ?? 0) + 1;
        return acc;
      }, {}),
    [students],
  );

  return (
    <ul className="grid grid-cols-1 gap-4 bg-white px-3 pb-3 pt-4 dark:bg-gray-800 sm:grid-cols-2 sm:px-4 sm:pt-6 lg:grid-cols-3 xl:grid-cols-4 ">
      {turmasTeacher.map((item) => (
        <TeacherTurmasItem
          key={item.id}
          item={item}
          classYear={
            teacherClassIds.has(item.classId)
              ? classYearById[item.classId]
              : null
          }
          courseName={courseNameById[item.courseId]}
          studentCount={studentCountByTurmaId[item.id] ?? 0}
        />
      ))}
    </ul>
  );
}

export default TeacherTurmasList;
