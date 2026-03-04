import Title3 from "../../../../components/ui/Title3";
import Modal from "../../../../components/shared/Modal";
import BtnCloseModal from "../../../../components/shared/BtnCloseModal";
import TeacherInput from "./TeacherInput";
import TeacherLabel from "./TeacherLabel";
import { HiOutlineCheck } from "react-icons/hi";
import { useEffect, useMemo, useState } from "react";
import { useModal } from "../../../../contexts/ModalContext";
import { useAuth } from "../../../../contexts/AuthContext";
import { useGrades } from "../../../../hooks/useGrades";
import { calculateAverage, validateGradeRange } from "../../../../services/grades";
import { useToast } from "../../../../hooks/useToast";

function TeacherGradesModal() {
  const { selectedGradeContext, closeGradesModal } = useModal();
  const { user } = useAuth();
  const { saveGrade } = useGrades();
  const { showError, showSuccess } = useToast();
  const currentStudent = selectedGradeContext?.student;
  const currentSubject = selectedGradeContext?.subject;
  const currentTerm = selectedGradeContext?.term;
  const [mac, setMac] = useState("");
  const [npp, setNpp] = useState("");
  const [npt, setNpt] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const existing = selectedGradeContext?.grade;
    setMac(existing?.mac ?? "");
    setNpp(existing?.npp ?? "");
    setNpt(existing?.npt ?? "");
  }, [selectedGradeContext]);

  const previewAverage = useMemo(() => {
    const values = [mac, npp, npt];
    if (values.some((value) => value === "" || Number.isNaN(Number(value)))) {
      return "-";
    }

    return calculateAverage(Number(mac), Number(npp), Number(npt));
  }, [mac, npp, npt]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!currentStudent || !currentSubject || !currentTerm) {
      showError("Contexto inválido para lançamento de notas.");
      return;
    }

    try {
      setIsSaving(true);
      validateGradeRange(mac, "MAC");
      validateGradeRange(npp, "NPP");
      validateGradeRange(npt, "NPT");

      await saveGrade({
        student: currentStudent,
        teacher: user,
        turmaId: selectedGradeContext.turmaId,
        subject: currentSubject,
        term: currentTerm,
        mac,
        npp,
        npt,
      });

      showSuccess("Notas salvas com sucesso.");
      closeGradesModal();
    } catch (error) {
      showError(error.message || "Erro ao salvar notas.");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <Modal>
      <div className="border-b border-slate-200 dark:border-gray-700">
        <div className="mb-4">
          <BtnCloseModal onClick={closeGradesModal} />
          <Title3>Lançar Notas</Title3>
        </div>
      </div>
      <div className="my-5 text-sm space-y-2">
        <p className="font-semibold break-words">{currentStudent?.name ?? "-"}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
          <span className="bg-slate-100 dark:bg-gray-900 px-2 py-1 rounded-md">
            {currentSubject ?? "-"}
          </span>
          <span className="bg-slate-100 dark:bg-gray-900 px-2 py-1 rounded-md">
            {`${currentTerm ?? "-"}º Trimestre`}
          </span>
          <span className="bg-slate-100 dark:bg-gray-900 px-2 py-1 rounded-md font-semibold">
            Média: {previewAverage}
          </span>
        </div>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <TeacherLabel htmlFor="mac">MAC</TeacherLabel>
            <TeacherInput
              id="mac"
              value={mac}
              onChange={(e) => setMac(e.target.value)}
            />
          </div>
          <div>
            <TeacherLabel htmlFor="npp">NPP</TeacherLabel>
            <TeacherInput
              id="npp"
              value={npp}
              onChange={(e) => setNpp(e.target.value)}
            />
          </div>
          <div>
            <TeacherLabel htmlFor="npt">NPT</TeacherLabel>
            <TeacherInput
              id="npt"
              value={npt}
              onChange={(e) => setNpt(e.target.value)}
            />
          </div>
        </div>
        <button
          disabled={isSaving}
          className="bg-blue-700 w-full text-white py-2.5 text-sm rounded-md flex items-center gap-1 justify-center disabled:opacity-60"
        >
          <span className="text-xl">
            <HiOutlineCheck />
          </span>
          <span>{isSaving ? "Salvando..." : "Salvar Dados"}</span>
        </button>
      </form>
    </Modal>
  );
}

export default TeacherGradesModal;
