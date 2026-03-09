import { useMemo, useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { useGrades } from "../../../../hooks/useGrades";
import StudentNotasTitle from "./StudentNotasTitle";
import StudentNotasHeader from "./StudentNotasHeader";
import StudentNotasLayout from "./StudentNotasLayout";
import StudentNotasList from "./StudentNotasList";
import Loading from "../../../../components/shared/Loading";
import { usePDFExport } from "../../../../contexts/PDFExportContext";

function StudentNotas() {
  const { user } = useAuth();
  const { grades, isLoading, generalAverage } = useGrades();
  const { exportToPDF, isExporting, setIsExporting } = usePDFExport();

  const handleExportPDF = async () => {
    setIsExporting(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    try {
      await exportToPDF("student-notes", "Boletim_Escolar");
    } catch (error) {
      ("Erro ao exportar PDF:", error);
    } finally {
      setIsExporting(false);
    }
  };
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
          <StudentNotasHeader
            selectedTerm={selectedTerm}
            onTermChange={setSelectedTerm}
            generalAverage={generalAverage(user?.id)}
          />
          <StudentNotasTitle />
          {isLoading ? (
            <Loading type="blue" size={30} />
          ) : (
            <StudentNotasList grades={studentGrades} />
          )}
        </StudentNotasLayout>
      </div>
    </div>
  );
}

export default StudentNotas;
