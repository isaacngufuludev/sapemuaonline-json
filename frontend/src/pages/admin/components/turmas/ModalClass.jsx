import BtnCloseModal from "../../../../components/shared/BtnCloseModal";
import Modal from "../../../../components/shared/Modal";
import AdminButton from "../AdminButton";
import AdminLabel from "../AdminLabel";
import AdminSelect from "../AdminSelect";
import { useModal } from "../../../../contexts/ModalContext";
import { useCourses } from "../../../../hooks/useCourses";
import { useState } from "react";
import Title3 from "../../../../components/ui/Title3";
import { BsX } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";
import { useToast } from "../../../../hooks/useToast";
import { post } from "../../../../services/api";
import { formateDate } from "../../../../utils/helpers";

function ModalClass() {
  const [classYear, setClassYear] = useState();
  const [courseId, setCourseId] = useState("");
  const { toggle } = useModal();
  const { courses } = useCourses();
  const { showSuccess, showWarning, showError } = useToast();

  async function handleSubmit() {
    if (!classYear || !courseId) {
      showWarning("Por favor preencha todos os campos!");
      return;
    }

    const newClass = {
      classYear: `${classYear}ª Classe`,
      dateIn: formateDate(new Date()),
      courseId,
    };

    try {
      await post("classes", newClass);
      showSuccess("Classe cadastrada com sucesso!");
      console.log("Nova Classe:", newClass);
      toggle();
    } catch (error) {
      showError(error.message || "Erro ao cadastrar classe");
    }
  }

  return (
    <Modal>
      <BtnCloseModal />
      <Title3>Cadastrar Classe</Title3>
      <p className="text-sm mb-4">
        Preencha os campos para cadastrar nova classe
      </p>
      <form
        onSubmit={handleSubmit}
        className="mb-7 grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2"
      >
        <div>
          <AdminLabel htmlFor="classe">Classe</AdminLabel>
          <AdminSelect
            value={classYear}
            onChange={(e) => setClassYear(e.target.value)}
          >
            <option value="">Nenhum Selecionado</option>
            <option value="10">10ª Classe</option>
            <option value="11">11ª Classe</option>
            <option value="12">12ª Classe</option>
            <option value="13">13ª Classe</option>
          </AdminSelect>
        </div>
        <div>
          <AdminLabel>Curso</AdminLabel>
          <AdminSelect
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
          >
            <option value="">Nenhum Selecionado</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.courseName}
              </option>
            ))}
          </AdminSelect>
        </div>
      </form>
      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <AdminButton type="secondary" onClick={toggle}>
          <p className="text-lg">
            <BsX />
          </p>
          <p>Cancelar</p>
        </AdminButton>
        <AdminButton type="primary" onClick={handleSubmit}>
          <p className="text-lg">
            <MdOutlineDone />
          </p>
          <p>Cadastrar</p>
        </AdminButton>
      </div>
    </Modal>
  );
}

export default ModalClass;
