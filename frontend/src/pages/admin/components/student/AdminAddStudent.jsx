import { Outlet, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  BsExclamationCircle,
  BsFileEarmark,
  BsPersonPlus,
  BsX,
} from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";

import AdminHeading from "../AdminHeading";
import AdminButton from "../AdminButton";
import Title3 from "../../../../components/ui/Title3";
import Title4 from "../../../../components/ui/Title4";
import AdminAddStudentLayout from "./AdminAddStudentLayout";
import AdminLabel from "../AdminLabel";
import AdminInput from "../AdminInput";
import AdminAddHeader from "../AdminAddHeader";
import AdminAddForm from "../AdminAddForm";
import AdminSelect from "../AdminSelect";
import AdminParentLinks from "./AdminParentLinks";
import { useEffect, useRef, useState } from "react";
import { useStudentForm } from "../../../../contexts/StudentFormContext";
import { calcAge, formateDate } from "../../../../utils/helpers";
import { patch, post } from "../../../../services/api";
import { useToast } from "../../../../hooks/useToast";
import { useCourses } from "../../../../hooks/useCourses";
import { useClasses } from "../../../../hooks/useClasses";
import { useTurmas } from "../../../../hooks/useTurmas";
import FloatInputLabel from "../../../../components/ui/FloatInputLabel";
import { useModal } from "../../../../contexts/ModalContext";

const parentLinks = [
  {
    name: "Pai",
    to: "father-info",
  },
  {
    name: "Mãe",
    to: "mother-info",
  },
  {
    name: "Guardião",
    to: "guardion-info",
  },
];

const initialState = {
  name: "",
  birthDate: "",
  province: "",
  biCode: "",
  residence: "",
  phoneNumber: "",
  genre: "",
  courseId: "",
  classId: "",
  turmaId: "",
  email: "",
};

function AdminAddStudent() {
  const { edited: editedItem, selectEditedItem } = useModal();
  const [formData, setFormData] = useState(initialState);
  const certfificateRef = useRef(null);
  const photoRef = useRef(null);
  const navigate = useNavigate();
  const {
    fatherJob,
    fatherPhoneNumber,
    fatherName,
    motherJob,
    motherName,
    motherPhoneNumber,
    guardionJob,
    guardionName,
    guardionPhoneNumber,
  } = useStudentForm();
  const { showSuccess, showWarning } = useToast();
  const { courses } = useCourses();
  const { turmas } = useTurmas();
  const { classes } = useClasses();

  useEffect(() => {
    if (editedItem) {
      setFormData({
        name: editedItem.name,
        birthDate: editedItem.birthDate,
        province: editedItem.province,
        biCode: editedItem.biCode,
        residence: editedItem.residence,
        phoneNumber: editedItem.phoneNumber.replace("+244 ", ""),
        genre: editedItem.genre,
        courseId: editedItem.courseId,
        classId: editedItem.classId,
        turmaId: editedItem.turmaId,
        email: editedItem.email,
      });
    } else {
      setFormData(initialState);
    }
  }, [editedItem]);

  function handleClose() {
    navigate("/area/admin/adminStudents");
    selectEditedItem(null);
  }

  async function handlerSubmit(e) {
    e.preventDefault();
    const certificate = certfificateRef.current.files[0];
    const photo = photoRef.current.files[0];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(formData.email);

    if (
      !formData.name ||
      !formData.birthDate ||
      !formData.phoneNumber ||
      !certificate ||
      !photo ||
      !formData.courseId ||
      !formData.classId ||
      !formData.turmaId ||
      !formData.email
    ) {
      showWarning("Por favor, preencha todos os campos");
      navigate("/area/admin/adminStudents/add-student");
      return;
    }

    if (!isValidEmail) {
      showWarning("Por favor, insira um email válido");
      navigate("/area/admin/adminStudents/add-student");
      return;
    }

    const newStudent = {
      ...formData,
      id: (Math.floor(Math.random() * 5000) + 100).toString(),
      dateIn: formateDate(new Date()),
      age: `${calcAge(formData.birthDate)} anos`,
      phoneNumber: `+244 ${formData.phoneNumber}`,
      fatherPhoneNumber: `${fatherPhoneNumber ? `+244 ${fatherPhoneNumber}` : ""}`,
      motherPhoneNumber: `${motherPhoneNumber ? `+244 ${motherPhoneNumber}` : ""}`,
      guardionPhoneNumber: `${guardionPhoneNumber ? `+244 ${guardionPhoneNumber}` : ""}`,
      fatherJob,
      motherJob,
      guardionJob,
      fatherName,
      motherName,
      guardionName,
      password: Date.now().toString().slice(-8),
      role: "student",
    };

    if (editedItem) {
      await patch("users", editedItem.id, newStudent);
      showSuccess("Estudante atualizado com sucesso!");
    } else {
      await post("users", newStudent);
      showSuccess("Estudante cadastrado com sucesso!");
    }

    handleClose();
  }

  return (
    <div>
      <AdminHeading>
        <Title3>
          {editedItem ? "Atualizar Estudante" : "Cadastrar Estudante"}
        </Title3>
        <AdminButton
          type="secondary"
          onClick={() => navigate("/area/admin/adminStudents")}
        >
          <p>
            <FaArrowLeft />
          </p>
          <p>Voltar</p>
        </AdminButton>
      </AdminHeading>
      <AdminAddStudentLayout onSubmit={handlerSubmit}>
        <AdminAddHeader>
          <p className="bg-white inline-block p-[6px] text-blue-700 rounded-md">
            <BsExclamationCircle />
          </p>
          <Title4>Informações pessoais</Title4>
        </AdminAddHeader>
        <AdminAddForm type="four">
          <div>
            <FloatInputLabel
              value={formData.name}
              name="Nome Completo"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <FloatInputLabel
              value={formData.birthDate}
              type="date"
              onChange={(e) =>
                setFormData({ ...formData, birthDate: e.target.value })
              }
            />
          </div>
          <div>
            <FloatInputLabel
              value={formData.province}
              name="Provincia"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, province: e.target.value })
              }
            />
          </div>
          <div>
            <FloatInputLabel
              value={formData.biCode}
              name="Numero de Indentificação"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, biCode: e.target.value })
              }
            />
          </div>
          <div>
            <FloatInputLabel
              value={formData.residence}
              name="Residência"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, residence: e.target.value })
              }
            />
          </div>
          <div>
            <FloatInputLabel
              value={formData.phoneNumber}
              name="Nº Telefone"
              max={9}
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
            />
          </div>
          <div>
            <FloatInputLabel
              value={formData.email}
              name="Endereço Email"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <AdminSelect
              value={formData.genre}
              onChange={(e) =>
                setFormData({ ...formData, genre: e.target.value })
              }
            >
              <option>Selecione o Genero</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </AdminSelect>
          </div>
        </AdminAddForm>
        <AdminAddHeader>
          <p className="bg-white inline-block p-[6px] text-blue-700 rounded-md">
            <BsPersonPlus />
          </p>
          <Title4>Informação dos parentes & Guardião</Title4>
        </AdminAddHeader>
        <div className="bg-white dark:bg-gray-800 flex items-center gap-2 pt-8 px-4 text-sm">
          <ul className="flex items-center gap-2">
            {parentLinks.map((item) => (
              <AdminParentLinks item={item} key={item.name} />
            ))}
          </ul>
        </div>
        <Outlet />
        <AdminAddHeader>
          <p className="bg-white inline-block p-[6px] text-blue-700 rounded-md">
            <BsFileEarmark />
          </p>
          <Title4>Documentos & Informações da Inscrição</Title4>
        </AdminAddHeader>
        <AdminAddForm type="two">
          <div>
            <AdminLabel>Foto-Passe</AdminLabel>
            <AdminInput ref={photoRef} accept=".jpg, .png" type="file" />
          </div>
          <div>
            <AdminLabel>Upload do Certificado</AdminLabel>
            <AdminInput
              ref={certfificateRef}
              accept=".jpg, .png, .pdf"
              type="file"
            />
          </div>
          <div>
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
            <AdminSelect
              value={formData.turmaId}
              onChange={(e) =>
                setFormData({ ...formData, turmaId: e.target.value })
              }
            >
              <option value="">Selecionar Turma</option>
              {turmas
                .filter((turmaItem) => turmaItem.courseId === formData.courseId)
                .filter((turmaItem) => turmaItem.classId === formData.classId)
                .map((turmaItem) => (
                  <option key={turmaItem.id} value={turmaItem.id}>
                    {turmaItem.turmaCategory}
                  </option>
                ))}
            </AdminSelect>
          </div>
        </AdminAddForm>
        <div className="flex items-center gap-2 justify-end mt-4">
          <AdminButton
            type="secondary"
            onClick={() => navigate("/area/admin/adminStudents")}
          >
            <p className="text-lg">
              <BsX />
            </p>
            <p>Cancelar</p>
          </AdminButton>
          <AdminButton
            type="primary"
            onClick={() => navigate("/area/admin/adminStudents")}
          >
            <p className="text-base">
              <MdOutlineDone />
            </p>
            <p>{editedItem ? "Finalizar Atualização" : "Finalizar Cadastro"}</p>
          </AdminButton>
        </div>
      </AdminAddStudentLayout>
    </div>
  );
}

export default AdminAddStudent;
