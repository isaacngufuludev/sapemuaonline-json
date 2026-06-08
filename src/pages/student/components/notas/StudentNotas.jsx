import { useMemo, useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { useGrades } from "../../../../hooks/useGrades";
import StudentNotasTitle from "./StudentNotasTitle";
import StudentNotasHeader from "./StudentNotasHeader";
import StudentNotasLayout from "./StudentNotasLayout";
import StudentNotasList from "./StudentNotasList";
import Loading from "../../../../components/shared/Loading";
import { usePDFExport } from "../../../../contexts/PDFExportContext";
import { useTeachers } from "../../../../hooks/useTeachers";
import { useClasses } from "../../../../hooks/useClasses";
import { useTurmas } from "../../../../hooks/useTurmas";
import { buildAcademicProgress } from "../../../../services/academicProgress";
import StudentAcademicProgress from "./StudentAcademicProgress";

const termLabels = {
  1: "I Trimestre",
  2: "II Trimestre",
  3: "III Trimestre",
};

function getTermDecision(summary) {
  if (!summary?.grades?.length) return "Sem notas";
  return summary.status?.tone === "danger" ? "Reprovado" : "Aprovado";
}

function StudentNotasPDFHeader({
  user,
  studentClass,
  studentTurma,
  selectedTerm,
}) {
  return (
    <header className="border-b border-slate-200 bg-white px-4 py-5 text-gray-900">
      <div className="flex items-center gap-4">
        <img
          src="/imgs/logo.png"
          alt="Sapemua"
          className="h-16 w-16 object-contain"
        />
        <div>
          <p className="text-base font-bold">
            Instituto Politécnico Privado Sapemua
          </p>
          <h1 className="mt-1 text-xl font-bold uppercase">Boletim de Notas</h1>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
        <p>
          <span className="font-semibold">Nome do aluno:</span>{" "}
          {user?.name || "-"}
        </p>
        <p>
          <span className="font-semibold">Classe:</span>{" "}
          {studentClass?.classYear || "-"}
        </p>
        <p>
          <span className="font-semibold">Turma:</span>{" "}
          {studentTurma?.turmaCategory || "-"}
        </p>
        <p>
          <span className="font-semibold">Trimestre:</span>{" "}
          {termLabels[selectedTerm] || `${selectedTerm}º Trimestre`}
        </p>
      </div>
    </header>
  );
}

function StudentNotasPDFTable({ grades, termDecision }) {
  const scoreClass = (value) => {
    if (value == null || String(value).trim() === "" || value === "-") {
      return "text-gray-500";
    }

    const score = Number(value);
    if (Number.isNaN(score)) return "text-gray-500";
    return score >= 10 ? "text-blue-700" : "text-red-700";
  };

  return (
    <div className="bg-white text-gray-900">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-slate-100">
            {["Nº", "Disciplina", "MAC", "NPP", "NPT", "MT", "Status"].map(
              (title) => (
                <th
                  key={title}
                  className="border border-slate-200 px-3 py-3 text-left font-semibold"
                >
                  {title}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {grades.length === 0 ? (
            <tr>
              <td
                className="border border-slate-200 px-3 py-4 text-center text-gray-500"
                colSpan={7}
              >
                Nenhuma nota encontrada.
              </td>
            </tr>
          ) : (
            grades.map((item, index) => {
              const media =
                item.average === "" || item.average == null
                  ? "-"
                  : Number(item.average);
              const status =
                media === "-"
                  ? "Sem nota"
                  : media >= 10
                    ? "Aprovado"
                    : "Reprovado";

              return (
                <tr key={`${item.disciplina}-${index}`}>
                  <td className="border border-slate-200 px-3 py-3">
                    {index + 1}
                  </td>
                  <td className="border border-slate-200 px-3 py-3">
                    {item.disciplina}
                  </td>
                  <td
                    className={`border border-slate-200 px-3 py-3 ${scoreClass(item.mac)}`}
                  >
                    {item.mac || "-"}
                  </td>
                  <td
                    className={`border border-slate-200 px-3 py-3 ${scoreClass(item.npp)}`}
                  >
                    {item.npp || "-"}
                  </td>
                  <td
                    className={`border border-slate-200 px-3 py-3 ${scoreClass(item.npt)}`}
                  >
                    {item.npt || "-"}
                  </td>
                  <td
                    className={`border border-slate-200 px-3 py-3 ${scoreClass(media)}`}
                  >
                    {media}
                  </td>
                  <td
                    className={`border border-slate-200 px-3 py-3 font-semibold ${scoreClass(media)}`}
                  >
                    {status}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
        <tfoot>
          <tr>
            <td
              className="border border-slate-200 bg-slate-50 px-3 py-4 font-semibold"
              colSpan={7}
            >
              Resultado do trimestre: {termDecision}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function StudentNotas() {
  const { user } = useAuth();
  const { grades, isLoading, generalAverage } = useGrades();
  const { teachers } = useTeachers();
  const { classes } = useClasses();
  const { turmas } = useTurmas();
  const { exportToPDF, isExporting, setIsExporting } = usePDFExport();

  const handleExportPDF = async () => {
    setIsExporting(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    try {
      await exportToPDF("student-notes", "Boletim_Escolar");
    } catch (error) {
      console.error("Erro ao exportar PDF:", error);
    } finally {
      setIsExporting(false);
    }
  };
  const [selectedTerm, setSelectedTerm] = useState(1);

  const expectedSubjects = useMemo(
    () => [
      ...new Set(
        teachers
          .filter((teacher) => teacher.turmasId?.includes(user?.turmaId))
          .flatMap((teacher) => teacher.subjects ?? []),
      ),
    ],
    [teachers, user?.turmaId],
  );

  const allStudentGrades = useMemo(
    () => grades.filter((grade) => grade.student_id === user?.id),
    [grades, user?.id],
  );

  const academicProgress = useMemo(
    () => buildAcademicProgress(allStudentGrades, expectedSubjects),
    [allStudentGrades, expectedSubjects],
  );

  const studentClass = useMemo(
    () => classes.find((classItem) => classItem.id === user?.classId),
    [classes, user?.classId],
  );

  const studentTurma = useMemo(
    () => turmas.find((turma) => turma.id === user?.turmaId),
    [turmas, user?.turmaId],
  );

  const selectedTermSummary = useMemo(
    () =>
      academicProgress.termSummaries.find(
        (summary) => Number(summary.term) === Number(selectedTerm),
      ),
    [academicProgress.termSummaries, selectedTerm],
  );

  const studentGrades = useMemo(
    () =>
      allStudentGrades
        .filter((grade) => Number(grade.term) === Number(selectedTerm))
        .map((grade) => ({
          disciplina: grade.subject,
          mac: grade.mac,
          npp: grade.npp,
          npt: grade.npt,
          average: grade.average,
        })),
    [allStudentGrades, selectedTerm],
  );

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="primary"
          onClick={handleExportPDF}
          disabled={isExporting}
        >
          {isExporting ? "Gerando PDF..." : "📥 Gerar PDF"}
        </button>
      </div>
      <div id="student-notes">
        <StudentNotasLayout>
          {isExporting ? (
            <>
              <StudentNotasPDFHeader
                user={user}
                studentClass={studentClass}
                studentTurma={studentTurma}
                selectedTerm={selectedTerm}
              />
              <StudentNotasPDFTable
                grades={studentGrades}
                termDecision={getTermDecision(selectedTermSummary)}
              />
            </>
          ) : (
            <>
              <StudentNotasHeader
                selectedTerm={selectedTerm}
                onTermChange={setSelectedTerm}
                generalAverage={generalAverage(user?.id)}
              />
              <StudentAcademicProgress progress={academicProgress} />
              <StudentNotasTitle />
              {isLoading ? (
                <Loading type="blue" size={30} />
              ) : (
                <StudentNotasList grades={studentGrades} />
              )}
            </>
          )}
        </StudentNotasLayout>
      </div>
    </div>
  );
}

export default StudentNotas;
