import { Outlet, useNavigate, useParams } from "react-router-dom";
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
import { get, patch, post } from "../../../../services/api";
import { addSystemEvent } from "../../../../services/systemEvents";
import { useToast } from "../../../../hooks/useToast";
import { useCourses } from "../../../../hooks/useCourses";
import { useClasses } from "../../../../hooks/useClasses";
import { useTurmas } from "../../../../hooks/useTurmas";
import FloatInputLabel from "../../../../components/ui/FloatInputLabel";
import { uploadOptionalFile } from "../../../../services/cloudinary";

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
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  const { showSuccess, showWarning, showError } = useToast();
  const { courses } = useCourses();
  const { turmas } = useTurmas();
  const { classes } = useClasses();
  const { id } = useParams();
  const today = new Date();
  const maxYear = today.getFullYear() - 15;
  const maxDate = `${maxYear}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  useEffect(() => {
    async function fetchStudent() {
      if (!id) return;
      const student = await get(`users/${id}`);

      setFormData({
        name: student.name,
        birthDate: student.birthDate,
        province: student.province,
        biCode: student.biCode,
        residence: student.residence,
        phoneNumber: student.phoneNumber.replace("+244 ", ""),
        genre: student.genre,
        courseId: student.courseId,
        classId: student.classId,
        turmaId: student.turmaId,
        email: student.email,
      });
    }

    fetchStudent();
  }, [id]);

  function handleClose() {
    navigate("/area/admin/adminStudents/main-student");
  }

  async function handlerSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    const certificate = certfificateRef.current.files[0];
    const photo = photoRef.current.files[0];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(formData.email);
    const phoneNumberRegex = /^(9[1-9])[0-9]{7}$/;
    const isValidPhoneNumber = phoneNumberRegex.test(
      formData.phoneNumber,
      guardionPhoneNumber,
      motherPhoneNumber,
      fatherPhoneNumber,
    );
    const biRegex = /(^\d{9}[A-Z]{2}\d{3}$)|(^[A-Z]\d{7}$)/;
    const isValidBiCode = biRegex.test(formData.biCode);

    if (
      !formData.name ||
      !formData.birthDate ||
      !formData.phoneNumber ||
      !formData.courseId ||
      !formData.classId ||
      !formData.turmaId ||
      !formData.email ||
      !formData.genre ||
      !formData.province ||
      !formData.biCode ||
      !formData.residence
    ) {
      showWarning("Por favor, preencha todos os campos");
      navigate("/area/admin/adminStudents/add-student");
      return;
    }

    // Validar data de nascimento em relação a maxDate
    const parsedMax = new Date(maxDate);
    const parsedBirth = new Date(formData.birthDate);

    if (isNaN(parsedMax.getTime())) {
      showError("Data de nascimento inválida");
      navigate("/area/admin/adminStudents/add-student");
      return;
    }

    if (parsedBirth.getTime() > parsedMax.getTime()) {
      showWarning(`O estudante deve ter no mínimo ${calcAge(maxDate)} anos`);
      navigate("/area/admin/adminStudents/add-student");
      return;
    }

    if (!isValidBiCode) {
      showWarning("Por favor, Número de identificação válido");
      navigate("/area/admin/adminStudents/add-student");
      return;
    }

    if (!isValidPhoneNumber) {
      showWarning("Por favor, insira um número de telefone válido");
      navigate("/area/admin/adminStudents/add-student");
      return;
    }

    if (!isValidEmail) {
      showWarning("Por favor, insira um email válido");
      navigate("/area/admin/adminStudents/add-student");
      return;
    }

    let student = null;

    // Verificar unicidade de campos (nome completo, biCode, telefone, email)
    try {
      const users = await get("users", { forceFresh: true });
      const emailNormalized = String(formData.email || "").trim().toLowerCase();
      const biNormalized = String(formData.biCode || "").trim().toUpperCase();
      const nameNormalized = String(formData.name || "").trim().toLowerCase().replace(/\s+/g, " ");
      const phoneDigits = String(formData.phoneNumber || "").replace(/\D/g, "");
      const phoneLast9 = phoneDigits.slice(-9);

      const conflict = users.find((u) => {
        if (id && String(u.id) === String(id)) return false;

        const uEmail = String(u.email || "").trim().toLowerCase();
        if (emailNormalized && uEmail === emailNormalized) return true;

        const uBi = String(u.biCode || "").trim().toUpperCase();
        if (biNormalized && uBi === biNormalized) return true;

        const uName = String(u.name || "").trim().toLowerCase().replace(/\s+/g, " ");
        if (nameNormalized && uName === nameNormalized) return true;

        const uPhoneDigits = String(u.phoneNumber || "").replace(/\D/g, "");
        const uPhoneLast9 = uPhoneDigits.slice(-9);
        if (phoneLast9 && uPhoneLast9 === phoneLast9) return true;

        return false;
      });

      if (conflict) {
        const uEmail = String(conflict.email || "").trim().toLowerCase();
        if (uEmail && uEmail === emailNormalized) {
          showWarning("Este e-mail já está cadastrado.");
          navigate("/area/admin/adminStudents/add-student");
          return;
        }

        const uBi = String(conflict.biCode || "").trim().toUpperCase();
        if (uBi && uBi === biNormalized) {
          showWarning("Número de identificação já existente no sistema.");
          navigate("/area/admin/adminStudents/add-student");
          return;
        }

        const uPhoneDigits = String(conflict.phoneNumber || "").replace(/\D/g, "");
        const uPhoneLast9 = uPhoneDigits.slice(-9);
        if (uPhoneLast9 && uPhoneLast9 === phoneLast9) {
          showWarning("Número de telefone já utilizado por outro usuário.");
          navigate("/area/admin/adminStudents/add-student");
          return;
        }

        const uName = String(conflict.name || "").trim().toLowerCase().replace(/\s+/g, " ");
        if (uName && uName === nameNormalized) {
          showWarning("Este nome completo já está cadastrado.");
          navigate("/area/admin/adminStudents/add-student");
          return;
        }
      }
    } catch (err) {
      // Não bloquear o fluxo se a verificação falhar por erro de rede; apenas log
      console.error("Erro ao validar unicidade de usuário:", err);
    }

    if (id) {
      student = await get(`users/${id}`);
    }

    try {
      setIsSubmitting(true);
      const [photoUpload, certificateUpload] = await Promise.all([
        uploadOptionalFile(photo, student?.photo, "sapemua/students/photos"),
        uploadOptionalFile(
          certificate,
          student?.certificate,
          "sapemua/students/certificates",
        ),
      ]);

      const newStudent = {
        ...formData,
        dateIn: student ? student.dateIn : formateDate(new Date()),
        age: `${calcAge(formData.birthDate)} anos`,
        phoneNumber: `+244 ${formData.phoneNumber}`,
        fatherPhoneNumber: fatherPhoneNumber ? `+244 ${fatherPhoneNumber}` : "",
        motherPhoneNumber: motherPhoneNumber ? `+244 ${motherPhoneNumber}` : "",
        guardionPhoneNumber: guardionPhoneNumber
          ? `+244 ${guardionPhoneNumber}`
          : "",
        fatherJob,
        motherJob,
        guardionJob,
        fatherName,
        motherName,
        certificate: certificateUpload,
        photo: photoUpload,
        guardionName,
        password: student ? student.password : "1234",
        role: "student",
      };

      if (id) {
        await patch("users", id, newStudent);
        addSystemEvent({
          entity: "student",
          action: `Estudante ${newStudent.name} atualizado`,
          type: "Estudante",
        });
        showSuccess("Estudante atualizado com sucesso!");
      } else {
        await post("users", newStudent);
        showSuccess("Estudante cadastrado com sucesso!");
      }

      handleClose();
    } catch (error) {
      showError(error.message || "Erro ao cadastrar estudante");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-full">
      <AdminHeading>
        <Title3>{id ? "Atualizar Estudante" : "Cadastrar Estudante"}</Title3>
        <AdminButton type="secondary" onClick={handleClose}>
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
              max={maxDate}
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
        <div className="bg-white px-3 pt-6 text-sm dark:bg-gray-800 sm:px-4 sm:pt-8">
          <ul className="flex flex-wrap items-center gap-2">
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
            <AdminInput ref={photoRef} accept=".jpg, .jpeg, .png" type="file" />
          </div>
          <div>
            <AdminLabel>Upload do Certificado</AdminLabel>
            <AdminInput
              ref={certfificateRef}
              accept=".jpg, .jpeg, .png, .pdf"
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
      </AdminAddStudentLayout>
      <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end">
        <AdminButton type="secondary" onClick={handleClose}>
          <p className="text-lg">
            <BsX />
          </p>
          <p>Cancelar</p>
        </AdminButton>
        <AdminButton
          type="primary"
          onClick={handlerSubmit}
          disabled={isSubmitting}
        >
          <p className="text-base">
            <MdOutlineDone />
          </p>
          <p>
            {isSubmitting
              ? "A guardar..."
              : id
                ? "Finalizar Atualização"
                : "Finalizar Cadastro"}
          </p>
        </AdminButton>
      </div>
    </div>
  );
}

export default AdminAddStudent;
