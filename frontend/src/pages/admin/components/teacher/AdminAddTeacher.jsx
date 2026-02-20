import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { get, patch, post } from "../../../../services/api";
import { useToast } from "../../../../hooks/useToast";
import { calcAge, formateDate } from "../../../../utils/helpers";
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
import FloatInputLabel from "../../../../components/ui/FloatInputLabel";

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
  adressCOllege: "",
  phoneCollege: "",
  subjects: "",
  description: "",
};

function AdminAddTeacher() {
  const [formData, setFormData] = useState(initialState);
  // const [selectedTurmas, setSelectedTurmas] = useState([]);
  // const { turmas } = useTurmas();

  // const fileCVRef = useRef(null);
  const fileCertificateRef = useRef(null);
  const filePhoto = useRef(null);
  const { showSuccess, showWarning } = useToast();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchTeacher() {
      if (!id) return;
      const teacher = await get(`users/${id}?`);

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
        adressCOllege: teacher.adressCollege,
        subjects: teacher.subjects,
        description: teacher.description,
      });
    }

    fetchTeacher();
  }, [id]);

  function handleClose() {
    navigate("/area/admin/adminTeacher/main-teacher");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const certificate = fileCertificateRef.current.files[0];
    // const cv = fileCVRef.current.files[0];
    const photo = filePhoto.current.files[0];

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(formData.email);

    if (
      !formData.name ||
      !formData.birthDate ||
      !formData.phoneNumber ||
      !formData.qualification ||
      !formData.subjects ||
      !formData.area ||
      !formData.email
    ) {
      showWarning("Por favor, preencha todos os campos");
      navigate("/area/admin/adminTeacher/add-teacher");
      return;
    }

    if (!isValidEmail) {
      showWarning("Por favor, insira um email válido");
      navigate("/area/admin/adminTeacher/add-teacher");
      return;
    }

    let teacher = null;

    if (id) teacher = await get(`users/${id}`);

    const newTecher = {
      ...formData,
      dateIn: teacher ? teacher.dateIn : formateDate(new Date()),
      age: `${calcAge(formData.birthDate)} anos`,
      phoneNumber: `+244 ${formData.phoneNumber}`,
      certificate,
      photo,
      password: teacher ? teacher.password : Date.now().toString().slice(-8),
      role: "teacher",
    };

    try {
      if (id) {
        await patch("users", id, newTecher);
        showSuccess("Professor atualizado com sucesso!");
      } else {
        await post("users", newTecher);
        showSuccess("Professor cadastrado com sucesso!");
      }

      handleClose();
    } catch (error) {
      showWarning("Erro ao cadastrar professor", error.message);
    }
  }

  return (
    <div>
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
              value={formData.adressCOllege}
              name="Endereço da Instituição"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, adressCOllege: e.target.value })
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
        <AdminAddForm type="two">
          <div>
            <AdminLabel>Foto-Passe</AdminLabel>
            <AdminInput type="file" ref={filePhoto} accept=".jpg, .png, .pdf" />
          </div>
          {/* <div>
            <AdminLabel>Upload Curriculum</AdminLabel>
            <AdminInput type="file" ref={fileCVRef} accept=".jpg, .png, .pdf" />
          </div> */}
          <div>
            <AdminLabel>Cerificado</AdminLabel>
            <AdminInput
              type="file"
              ref={fileCertificateRef}
              accept=".jpg, .png, .pdf"
            />
          </div>
          <div>
            <FloatInputLabel
              value={formData.subjects}
              name="Cadeiras dominantes (separe por virgula)"
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, subjects: e.target.value })
              }
            />
          </div>
          <div>
            {/* <AdminSelect
            multiple
            value={selectedTurmas}
            onChange={(e) => {
              const values = Array.from(
                e.target.selectedOptions,
                (option) => option.value,
              );

              setSelectedTurmas(values);
            }}
          >
            <option>Selecione as turmas</option>
            {turmas.map((turma) => (
              <option key={turma.id} value={turma.id}>
                {turma.turmaCategory}
              </option>
            ))}
          </AdminSelect> */}
          </div>
          <div>
            <AdminInput
              type="description"
              placeholder="Breve descrição"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
        </AdminAddForm>
      </AdminAddTeacherLayout>
      <div className="flex items-center gap-2 justify-end mt-4">
        <AdminButton type="secondary" onClick={handleClose}>
          <p className="text-lg">
            <BsX />
          </p>
          <p>Cancelar</p>
        </AdminButton>
        <AdminButton type="primary" onClick={handleSubmit}>
          <p className="text-base">
            <MdOutlineDone />
          </p>
          <p>{id ? "Finalizar Atualização" : "Finalizar Cadastro"}</p>
        </AdminButton>
      </div>
    </div>
  );
}

export default AdminAddTeacher;
