import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { get, patch, post } from "../../../../services/api";
import { addSystemEvent } from "../../../../services/systemEvents";
import { useToast } from "../../../../hooks/useToast";
import { calcAge, formateDate } from "../../../../utils/helpers";
import FloatInputLabel from "../../../../components/ui/FloatInputLabel";
import { useTurmas } from "../../../../hooks/useTurmas";
import { useClasses } from "../../../../hooks/useClasses";
import { useCourses } from "../../../../hooks/useCourses";
import {
  BsExclamationCircle,
  BsFileEarmark,
  BsMortarboard,
  BsX,
} from "react-icons/bs";

import AdminHeading from "../AdminHeading";
import AdminButton from "../AdminButton";
import Title3 from "../../../../components/ui/Title3";
import Title4 from "../../../../components/ui/Title4";
import AdminAddTeacherLayout from "./AdminAddTeacherLayout";
import AdminAddHeader from "../AdminAddHeader";
import AdminAddForm from "../AdminAddForm";
import AdminInput from "../AdminInput";
import AdminLabel from "../AdminLabel";
import AdminSelect from "../AdminSelect";
import { uploadOptionalFile } from "../../../../services/cloudinary";
import { createFirstAccessData } from "../../../../utils/authTokens";
import { sendFirstAccessEmail } from "../../../../services/firstAccessEmail";

const initialState = {
  name: "",
  birthDate: "",
  province: "",
  biCode: "",
  residence: "",
  phoneNumber: "",
  genre: "",
  qualification: "",
  area: "",
  college: "",
  email: "",
  adressCollege: "",
  phoneCollege: "",
  subjects: [],
  turmasId: [],
  classesId: [],
  coursesId: [],
};

function AdminAddTeacher() {
  const [formData, setFormData] = useState(initialState);
  const [subjects, setSubjects] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedTurmas, setSelectedTurmas] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { turmas } = useTurmas();
  const { classes } = useClasses();
  const { courses } = useCourses();

  const fileCertificateRef = useRef(null);
  const filePhoto = useRef(null);
  const { showSuccess, showWarning, showError } = useToast();
  const navigate = useNavigate();
  const { id } = useParams();
  const today = new Date();
  const maxYear = today.getFullYear() - 25;
  const maxDate = `${maxYear}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  useEffect(() => {
    async function fetchTeacher() {
      if (!id) return;
      const teacher = await get(`users/${id}`);

      setFormData({
        name: teacher.name,
        birthDate: teacher.birthDate,
        province: teacher.province,
        biCode: teacher.biCode,
        residence: teacher.residence,
        phoneCollege: teacher.phoneCollege,
        phoneNumber: teacher?.phoneNumber.replace("+244 ", ""),
        genre: teacher.genre,
        qualification: teacher.qualification,
        area: teacher.area,
        college: teacher.college,
        email: teacher.email,
        adressCollege: teacher.adressCollege,
        subjects: teacher.subjects,
      });

      setSelectedCourses(teacher.coursesId || []);
      setSelectedTurmas(teacher.turmasId || []);
      setSelectedClasses(teacher.classesId || []);
      setSubjects(teacher.subjects || []);
    }

    fetchTeacher();
  }, [id]);

  function handleClose() {
    navigate("/area/admin/adminTeacher/main-teacher");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();

      if (!subjects.includes(inputValue.trim())) {
        setSubjects([...subjects, inputValue.trim()]);
      }

      setInputValue("");
    }
  }

  function removeSubject(index) {
    setSubjects(subjects.filter((_, i) => i !== index));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    const certificate = fileCertificateRef.current.files[0];
    // const cv = fileCVRef.current.files[0];
    const photo = filePhoto.current.files[0];

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(formData.email);
    const phoneNumberRegex = /^(9[1-9])[0-9]{7}$/;
    const isValidPhoneNumber = phoneNumberRegex.test(
      formData.phoneNumber,
      formData.phoneCollege,
    );
    const biRegex = /(^\d{9}[A-Z]{2}\d{3}$)|(^[A-Z]\d{7}$)/;
    const isValidBiCode = biRegex.test(formData.biCode);

    if (
      !formData.name ||
      !formData.birthDate ||
      !formData.phoneNumber ||
      !formData.qualification ||
      !formData.area ||
      !formData.email ||
      !formData.genre ||
      !formData.college ||
      !formData.adressCollege ||
      !formData.province ||
      !formData.residence ||
      !formData.phoneCollege ||
      !formData.biCode ||
      !subjects ||
      selectedTurmas.length === 0 ||
      selectedClasses.length === 0 ||
      selectedCourses.length === 0
    ) {
      showWarning("Por favor, preencha todos os campos");
      navigate("/area/admin/adminTeacher/add-teacher");
      return;
    }

    // Validar data de nascimento em relação a maxDate
    const parsedMax = new Date(maxDate);
    const parsedBirth = new Date(formData.birthDate);

    if (isNaN(parsedMax.getTime())) {
      showError("Data de nascimento inválida");
      navigate("/area/admin/adminTeacher/add-teacher");
      return;
    }

    if (parsedBirth.getTime() > parsedMax.getTime()) {
      showWarning(`O Professor deve ter no mínimo ${calcAge(maxDate)} anos`);
      navigate("/area/admin/adminTeacher/add-teacher");
      return;
    }

    if (!isValidBiCode) {
      showWarning("Por favor, Número de identificação válido");
      navigate("/area/admin/adminTeacher/add-teacher");
      return;
    }

    if (!isValidPhoneNumber) {
      showWarning("Por favor, insira um número de telefone válido");
      navigate("/area/admin/adminTeacher/add-teacher");
      return;
    }

    if (!isValidEmail) {
      showWarning("Por favor, insira um email válido");
      navigate("/area/admin/adminTeacher/add-teacher");
      return;
    }

    let teacher = null;

    // Verificar unicidade de campos (nome completo, biCode, telefone, email)
    try {
      const users = await get("users", { forceFresh: true });
      const emailNormalized = String(formData.email || "")
        .trim()
        .toLowerCase();
      const biNormalized = String(formData.biCode || "")
        .trim()
        .toUpperCase();
      const nameNormalized = String(formData.name || "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");
      const phoneDigits = String(formData.phoneNumber || "").replace(/\D/g, "");
      const phoneLast9 = phoneDigits.slice(-9);

      const conflict = users.find((u) => {
        if (id && String(u.id) === String(id)) return false;

        const uEmail = String(u.email || "")
          .trim()
          .toLowerCase();
        if (emailNormalized && uEmail === emailNormalized) return true;

        const uBi = String(u.biCode || "")
          .trim()
          .toUpperCase();
        if (biNormalized && uBi === biNormalized) return true;

        const uName = String(u.name || "")
          .trim()
          .toLowerCase()
          .replace(/\s+/g, " ");
        if (nameNormalized && uName === nameNormalized) return true;

        const uPhoneDigits = String(u.phoneNumber || "").replace(/\D/g, "");
        const uPhoneLast9 = uPhoneDigits.slice(-9);
        if (phoneLast9 && uPhoneLast9 === phoneLast9) return true;

        return false;
      });

      if (conflict) {
        const uEmail = String(conflict.email || "")
          .trim()
          .toLowerCase();
        if (uEmail && uEmail === emailNormalized) {
          showWarning("Este e-mail já está cadastrado.");
          navigate("/area/admin/adminTeacher/add-teacher");
          return;
        }

        const uBi = String(conflict.biCode || "")
          .trim()
          .toUpperCase();
        if (uBi && uBi === biNormalized) {
          showWarning("Número de identificação já existente no sistema.");
          navigate("/area/admin/adminTeacher/add-teacher");
          return;
        }

        const uPhoneDigits = String(conflict.phoneNumber || "").replace(
          /\D/g,
          "",
        );
        const uPhoneLast9 = uPhoneDigits.slice(-9);
        if (uPhoneLast9 && uPhoneLast9 === phoneLast9) {
          showWarning("Número de telefone já utilizado por outro usuário.");
          navigate("/area/admin/adminTeacher/add-teacher");
          return;
        }

        const uName = String(conflict.name || "")
          .trim()
          .toLowerCase()
          .replace(/\s+/g, " ");
        if (uName && uName === nameNormalized) {
          showWarning("Este nome completo já está cadastrado.");
          navigate("/area/admin/adminTeacher/add-teacher");
          return;
        }
      }
    } catch (err) {
      console.error("Erro ao validar unicidade de usuário:", err);
    }

    if (id) teacher = await get(`users/${id}`);

    try {
      setIsSubmitting(true);
      const [photoUpload, certificateUpload] = await Promise.all([
        uploadOptionalFile(photo, teacher?.photo, "sapemua/teachers/photos"),
        uploadOptionalFile(
          certificate,
          teacher?.certificate,
          "sapemua/teachers/certificates",
        ),
      ]);

      const firstAccessData = teacher ? {} : createFirstAccessData();

      const newTecher = {
        ...formData,
        dateIn: teacher ? teacher.dateIn : formateDate(new Date()),
        age: `${calcAge(formData.birthDate)} anos`,
        phoneNumber: `+244 ${formData.phoneNumber}`,
        certificate: certificateUpload,
        photo: photoUpload,
        password: teacher ? teacher.password : "",
        role: "teacher",
        turmasId: selectedTurmas,
        classesId: selectedClasses,
        coursesId: selectedCourses,
        subjects: subjects,
        ...firstAccessData,
      };

      if (id) {
        await patch("users", id, newTecher);
        addSystemEvent({
          entity: "teacher",
          action: `Professor ${newTecher.name} atualizado`,
          type: "Professor",
        });
        showSuccess("Professor atualizado com sucesso!");
      } else {
        const createdTeacher = await post("users", newTecher);

        try {
          await sendFirstAccessEmail(createdTeacher);
          showSuccess("Professor cadastrado e link de primeiro acesso enviado!");
        } catch (emailError) {
          console.error("Erro ao enviar primeiro acesso:", emailError);
          showWarning(
            "Professor cadastrado, mas não foi possível enviar o email de primeiro acesso.",
          );
        }
      }

      handleClose();
    } catch (error) {
      showWarning(error.message || "Erro ao cadastrar professor");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-full">
      <AdminHeading>
        <Title3>{id ? "Atualizar Professor" : "Cadastrar Professor"}</Title3>
        <AdminButton type="secondary" onClick={handleClose}>
          <p>
            <FaArrowLeft />
          </p>
          <p>Voltar</p>
        </AdminButton>
      </AdminHeading>
      <AdminAddTeacherLayout onSubmit={handleSubmit}>
        <AdminAddHeader>
          <p className="bg-white inline-block p-[6px] text-blue-700 rounded-md">
            <BsExclamationCircle />
          </p>
          <Title4>Informações pessoais</Title4>
        </AdminAddHeader>
        <AdminAddForm type="three">
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
              value={formData.biCode}
              name="Número de Identificação"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, biCode: e.target.value })
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
              value={formData.residence}
              name="Residência Actual"
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
              <option>Selecione o genero</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </AdminSelect>
          </div>
        </AdminAddForm>
        <AdminAddHeader>
          <p className="bg-white inline-block p-[6px] text-blue-700 rounded-md">
            <BsMortarboard />
          </p>
          <Title4>Qualificações</Title4>
        </AdminAddHeader>
        <AdminAddForm type="three">
          <div>
            <AdminSelect
              value={formData.qualification}
              onChange={(e) =>
                setFormData({ ...formData, qualification: e.target.value })
              }
            >
              <option>Selecione a qualificação</option>
              <option value="Medio">Ensino médio</option>
              <option value="Superior">Ensino superior</option>
            </AdminSelect>
          </div>
          <div>
            <FloatInputLabel
              value={formData.area}
              name="Area de Formação"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, area: e.target.value })
              }
            />
          </div>
          <div>
            <FloatInputLabel
              value={formData.college}
              name="Nome da Instituição"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, college: e.target.value })
              }
            />
          </div>
          <div>
            <FloatInputLabel
              value={formData.adressCollege}
              name="Endereço da Instituição"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, adressCollege: e.target.value })
              }
            />
          </div>
          <div>
            <FloatInputLabel
              value={formData.phoneCollege}
              name="Telefone da Instituição"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, phoneCollege: e.target.value })
              }
            />
          </div>
        </AdminAddForm>
        <AdminAddHeader>
          <p className="bg-white inline-block p-[6px] text-blue-700 rounded-md">
            <BsFileEarmark />
          </p>
          <Title4>Documentos e Vinculo</Title4>
        </AdminAddHeader>
        <AdminAddForm type="none">
          <div className="mb-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <AdminLabel>Foto-Passe</AdminLabel>
              <AdminInput
                type="file"
                ref={filePhoto}
                accept=".jpg, .jpeg, .png"
              />
            </div>
            <div>
              <AdminLabel>Cerificado</AdminLabel>
              <AdminInput
                type="file"
                ref={fileCertificateRef}
                accept=".jpg, .jpeg, .png, .pdf"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <div>
              <AdminSelect
                type="many"
                value={selectedCourses}
                onChange={(e) => {
                  const values = Array.from(
                    e.target.selectedOptions,
                    (option) => option.value,
                  );
                  setSelectedCourses(values);
                  setSelectedClasses([]);
                  setSelectedTurmas([]);
                }}
              >
                <option disabled className="font-semibold dark:text-white">
                  Selecione os cursos
                </option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.courseName}
                  </option>
                ))}
              </AdminSelect>
            </div>
            <div>
              <AdminSelect
                type="many"
                value={selectedClasses}
                onChange={(e) => {
                  const values = Array.from(
                    e.target.selectedOptions,
                    (option) => option.value,
                  );
                  setSelectedClasses(values);
                  setSelectedTurmas([]);
                }}
                disabled={selectedCourses.length === 0}
              >
                <option disabled className="font-semibold dark:text-white">
                  Selecione a Classe
                </option>
                {classes
                  .filter((classItem) =>
                    selectedCourses.includes(classItem.courseId),
                  )
                  .map((classItem) => (
                    <option key={classItem.id} value={classItem.id}>
                      {classItem.classYear}
                    </option>
                  ))}
              </AdminSelect>
            </div>
            <div>
              <AdminSelect
                type="many"
                value={selectedTurmas}
                onChange={(e) => {
                  const values = Array.from(
                    e.target.selectedOptions,
                    (option) => option.value,
                  );
                  setSelectedTurmas(values);
                }}
                disabled={selectedClasses.length === 0}
              >
                <option disabled className="font-semibold dark:text-white">
                  Selecione as turmas
                </option>
                {turmas
                  .filter((turma) => selectedClasses.includes(turma.classId))
                  .map((turma) => (
                    <option key={turma.id} value={turma.id}>
                      {turma.turmaCategory}
                    </option>
                  ))}
              </AdminSelect>
            </div>
            <div className="border  dark:border-gray-700 rounded-lg p-2 flex flex-wrap gap-2">
              {subjects.map((subject, index) => (
                <span
                  key={index}
                  className="bg-blue-600 text-white px-3 py-1 rounded-full flex items-center gap-2"
                >
                  {subject}

                  <button
                    type="button"
                    onClick={() => removeSubject(index)}
                    className="text-sm"
                  >
                    ✕
                  </button>
                </span>
              ))}

              <input
                type="text"
                placeholder="Digite a disciplina e pressione Enter"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 h-7 outline-none min-w-[150px] dark:bg-gray-800"
              />
            </div>
          </div>
        </AdminAddForm>
      </AdminAddTeacherLayout>
      <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end">
        <AdminButton type="secondary" onClick={handleClose}>
          <p className="text-lg">
            <BsX />
          </p>
          <p>Cancelar</p>
        </AdminButton>
        <AdminButton
          type="primary"
          onClick={handleSubmit}
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

export default AdminAddTeacher;
