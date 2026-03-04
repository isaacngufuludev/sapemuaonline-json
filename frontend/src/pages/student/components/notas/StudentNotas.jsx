import { useMemo, useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { useGrades } from "../../../../hooks/useGrades";
import StudentNotasTitle from "./StudentNotasTitle";
import StudentNotasHeader from "./StudentNotasHeader";
import StudentNotasLayout from "./StudentNotasLayout";
import StudentNotasList from "./StudentNotasList";
import Loading from "../../../../components/shared/Loading";

function StudentNotas() {
  const { user } = useAuth();
  const { grades, isLoading, generalAverage } = useGrades();
  const [selectedTerm, setSelectedTerm] = useState(1);

  const studentGrades = useMemo(
    () =>
      grades
        .filter(
          (grade) =>
            grade.student_id === user?.id &&
            Number(grade.term) === Number(selectedTerm),
        )
        .map((grade) => ({
          disciplina: grade.subject,
          mac: grade.mac,
          npp: grade.npp,
          npt: grade.npt,
          average: grade.average,
        })),
    [grades, selectedTerm, user?.id],
  );

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      <StudentNotasLayout>
        <StudentNotasHeader
          selectedTerm={selectedTerm}
          onTermChange={setSelectedTerm}
          generalAverage={generalAverage(user?.id)}
        />
        <StudentNotasTitle />
        {isLoading ? <Loading type="blue" size={30} /> : <StudentNotasList grades={studentGrades} />}
      </StudentNotasLayout>
    </div>
  );
}

export default StudentNotas;
