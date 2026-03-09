import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useStudents } from "../../../../hooks/useStudents";
import TeacherStudentItem from "./TeacherStudentItem";
import Message from "../../../../components/ui/Message";
import Loading from "../../../../components/shared/Loading";
import TeacherTurmasStudentsHeader from "./TeacherTurmasStudentsHeader";
import TeacherTurmasTitle from "./TeacherTurmasTitle";
import { useAuth } from "../../../../contexts/AuthContext";
import { useGrades } from "../../../../hooks/useGrades";

function TeacherStudentsList() {
  const { turmaId } = useParams();
  const { user } = useAuth();
  const { students, isLoading } = useStudents();
  const { grades, isLoading: isLoadingGrades } = useGrades();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTerm, setSelectedTerm] = useState(1);
  const [selectedSubject, setSelectedSubject] = useState(
    user?.subjects?.[0] || "",
  );

  useEffect(() => {
    if (!selectedSubject && user?.subjects?.length) {
      setSelectedSubject(user.subjects[0]);
    }
  }, [user?.subjects, selectedSubject]);

  useEffect(() => {
    if (
      selectedSubject &&
      Array.isArray(user?.subjects) &&
      !user.subjects.includes(selectedSubject)
    ) {
      setSelectedSubject(user.subjects[0] || "");
    }
  }, [selectedSubject, user?.subjects]);

  const isTeacherFromTurma = useMemo(
    () => Array.isArray(user?.turmasId) && user.turmasId.includes(turmaId),
    [user?.turmasId, turmaId],
  );

  const turmaStudents = useMemo(
    () => students.filter((student) => student.turmaId === turmaId),
    [students, turmaId],
  );

  const filteredStudents = useMemo(
    () =>
      turmaStudents.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase().trim()),
      ),
    [turmaStudents, searchTerm],
  );

  const gradesByStudentId = useMemo(() => {
    const map = new Map();
    const filtered = grades.filter(
      (grade) =>
        grade.subject === selectedSubject &&
        Number(grade.term) === Number(selectedTerm),
    );

    for (const grade of filtered) {
      map.set(grade.student_id, grade);
    }

    return map;
  }, [grades, selectedSubject, selectedTerm]);

  if (!isTeacherFromTurma) {
    return (
      <Message message="Você não tem permissão para lançar notas nesta turma." />
    );
  }

  if (!selectedSubject) {
    return <Message message="Sem disciplinas atribuídas para lançar notas." />;
  }

  return (
    <div>
      {filteredStudents.length > 0 && (
        <div className="space-y-3">
          <TeacherTurmasStudentsHeader
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            selectedTerm={selectedTerm}
            onTermChange={setSelectedTerm}
            selectedSubject={selectedSubject}
            onSubjectChange={setSelectedSubject}
          />
          <TeacherTurmasTitle />
          {isLoading || isLoadingGrades ? (
            <Loading type="blue" size={30} />
          ) : (
            <ul className="overflow-y-auto h-[60dvh] md:h-[500px] no-scrollbar bg-white rounded-md dark:bg-gray-800 border-[0.1px] dark:border-gray-700 border-slate-200">
              {filteredStudents.map((item, i) => (
                <TeacherStudentItem
                  key={item.id}
                  item={item}
                  i={i}
                  selectedSubject={selectedSubject}
                  selectedTerm={selectedTerm}
                  grade={gradesByStudentId.get(item.id) ?? null}
                  turmaId={turmaId}
                />
              ))}
            </ul>
          )}
        </div>
      )}

      {filteredStudents.length === 0 && (
        <Message message="Nenhum estudante encontrado para esta turma." />
      )}
    </div>
  );
}

export default TeacherStudentsList;
