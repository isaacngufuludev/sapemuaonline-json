import { BsX } from "react-icons/bs";
import { useModal } from "../../../../contexts/ModalContext";
import { MdOutlineDone } from "react-icons/md";
import { useState } from "react";
import { post } from "../../../../services/api";
import { useToast } from "../../../../hooks/useToast";
import { useCourses } from "../../../../hooks/useCourses";
import { useRefresh } from "../../../../contexts/RefreshContext";

import Title3 from "../../../../components/ui/Title3";
import AdminLabel from "../AdminLabel";
import AdminSelect from "../AdminSelect";
import AdminButton from "../AdminButton";
import BtnCloseModal from "../../../../components/shared/BtnCloseModal";
import Modal from "../../../../components/shared/Modal";
import { useClasses } from "../../../../hooks/useClasses";
import { formateDate } from "../../../../utils/helpers";
import AdminInput from "../AdminInput";

function ModalTurma() {
  const [classId, setClassId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [period, setPeriod] = useState("");
  const [room, setRoom] = useState("");
  const [turmaCategory, setTurmaCategory] = useState("");
  const { toggle } = useModal();
  const { courses, fetchCourses } = useCourses();
  const { classes } = useClasses();
  const { triggerRefresh } = useRefresh();
  const { showSuccess, showWarning } = useToast();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!classId || !period || !turmaCategory || !period || !room) {
      showWarning("Por favor, preencha todos os campos!");
      return;
    }

    const newTurma = {
      classId,
      courseId,
      room,
      turmaCategory,
      dateIn: formateDate(new Date()),
      period,
    };

    try {
      await post("turmas", newTurma);
      showSuccess("Turma cadastrada com sucesso!");
      triggerRefresh();
      console.log("Nova turma", newTurma);
      await fetchCourses();
      toggle();
    } catch (error) {
      showWarning(error.message || "Erro ao cadastrar turma");
    }
  }

  return (
    <Modal>
      <BtnCloseModal />
      <Title3>Cadastrar Turma</Title3>
      <p className="text-sm mb-4">
        Preencha os campos para cadastrar nova turma
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-y-5 gap-x-3 mb-7"
      >
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
        <div>
          <AdminLabel htmlFor="classe">Classe</AdminLabel>
          <AdminSelect
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
          >
            <option value="">Nenhum Selecionado</option>
            {classes.map((classItem) => (
              <option value={classItem.id}>{classItem.classYear}</option>
            ))}
          </AdminSelect>
        </div>
        <div>
          <AdminLabel htmlFor="turma">Categoria (A, B, C, D...)</AdminLabel>
          <AdminSelect
            value={turmaCategory}
            onChange={(e) => setTurmaCategory(e.target.value)}
          >
            <option value="">Nenhum Selecionado</option>
            <option value="Unica">Única</option>
            <option value="A">Turma A</option>
            <option value="B">Turma B</option>
            <option value="C">Turma C</option>
            <option value="D">Turma D</option>
          </AdminSelect>
        </div>
        <div>
          <AdminLabel htmlFor="turma">Periodo</AdminLabel>
          <AdminSelect
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <option value="">Nenhum Selecionado</option>
            <option value="Manha">Manhã</option>
            <option value="Tarde">Tarde</option>
          </AdminSelect>
        </div>
        <div>
          <AdminLabel htmlFor="turma">Sala</AdminLabel>
          <AdminInput
            type="number"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
      </form>
      <div className="flex gap-2 justify-end">
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

export default ModalTurma;
