import { BsX } from "react-icons/bs";
import { useModal } from "../../../../contexts/ModalContext";
import { MdOutlineDone } from "react-icons/md";
import { useEffect, useState } from "react";
import { patch, post } from "../../../../services/api";
import { addSystemEvent } from "../../../../services/systemEvents";
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

const initialState = {
  classId: "",
  courseId: "",
  period: "",
  room: "",
  turmaCategory: "",
};

function ModalTurma({ editedItem }) {
  const [formData, setFormData] = useState("");
  const { toggle, selectEditedItem } = useModal();
  const { courses, fetchCourses } = useCourses();
  const { classes } = useClasses();
  const { triggerRefresh } = useRefresh();
  const { showSuccess, showWarning } = useToast();

  function handleClose() {
    setFormData(initialState);
    selectEditedItem(null);
    toggle();
  }

  useEffect(() => {
    if (editedItem) {
      setFormData({
        classId: editedItem.classId,
        courseId: editedItem.courseId,
        period: editedItem.period,
        room: editedItem.room,
        turmaCategory: editedItem.turmaCategory,
      });
    } else {
      setFormData(initialState);
    }
  }, [editedItem]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.classId ||
      !formData.period ||
      !formData.turmaCategory ||
      !formData.period ||
      !formData.room
    ) {
      showWarning("Por favor, preencha todos os campos!");
      return;
    }

    const newTurma = {
      ...formData,
      dateIn: editedItem ? editedItem.dateIn : formateDate(new Date()),
    };

    try {
      if (editedItem) {
        await patch("turmas", editedItem.id, newTurma);
        addSystemEvent({
          entity: "turma",
          action: `Turma atualizada`,
          type: "Turma",
        });
        showSuccess("Turma atualizada com sucesso");
      } else {
        await post("turmas", newTurma);
        showSuccess("Turma cadastrada com sucesso!");
      }

      triggerRefresh();
      handleClose();
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
        className="mb-7 grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2"
      >
        <div>
          {/* <AdminLabel>Curso</AdminLabel> */}
          <AdminSelect
            value={formData.courseId}
            onChange={(e) =>
              setFormData({ ...formData, courseId: e.target.value })
            }
          >
            <option value="">Selecionar Curso</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.courseName}
              </option>
            ))}
          </AdminSelect>
        </div>
        <div>
          {/* <AdminLabel htmlFor="classe">Classe</AdminLabel> */}
          <AdminSelect
            value={formData.classId}
            onChange={(e) =>
              setFormData({ ...formData, classId: e.target.value })
            }
          >
            <option value="">Selecionar Classe</option>
            {classes
              .filter((classItem) => classItem.courseId === formData.courseId)
              .map((classItem) => (
                <option key={classItem.id} value={classItem.id}>
                  {classItem.classYear}
                </option>
              ))}
          </AdminSelect>
        </div>
        <div>
          {/* <AdminLabel htmlFor="turma">Categoria (A, B, C, D...)</AdminLabel> */}
          <AdminSelect
            value={formData.turmaCategory}
            onChange={(e) =>
              setFormData({ ...formData, turmaCategory: e.target.value })
            }
          >
            <option>Selecionar Categoria</option>
            {/* {
              classes.filter(classItem => classItem.courseId !== )
            } */}
            <option value="Unica">Única</option>
            <option value="A">Turma A</option>
            <option value="B">Turma B</option>
            <option value="C">Turma C</option>
            <option value="D">Turma D</option>
          </AdminSelect>
        </div>
        <div>
          <AdminSelect
            value={formData.period}
            onChange={(e) =>
              setFormData({ ...formData, period: e.target.value })
            }
          >
            <option value="">Selecionar Periodo</option>
            <option value="Manha">Manhã</option>
            <option value="Tarde">Tarde</option>
          </AdminSelect>
        </div>
        <div>
          <AdminInput
            type="number"
            placeholder="Sala"
            value={
              formData.room > 0 && formData.room <= 30 ? formData.room : ""
            }
            min={1}
            max={30}
            onChange={(e) => setFormData({ ...formData, room: e.target.value })}
          />
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

export default ModalTurma;
