import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  BsExclamationCircle,
  BsFileEarmark,
  BsMortarboard,
  BsX,
} from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";

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
import { useRef, useState } from "react";
import { post } from "../../../../services/api";
import { useToast } from "../../../../hooks/useToast";
import { formateDate } from "../../../../utils/helpers";

function AdminAddTeacher() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [province, setProvince] = useState("");
  const [biCode, setBiCode] = useState("");
  const [residence, setResidence] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [genre, setGenre] = useState("");
  const [qualification, setQualification] = useState("");
  const [area, setArea] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [adressCOllege, setAdressCollege] = useState("");
  const [phoneCollege, setPhoneCollege] = useState("");
  const [subjects, setSubjects] = useState("");
  const [description, setDescription] = useState("");
  const fileCVRef = useRef(null);
  const fileCertificateRef = useRef(null);
  const { showSuccess } = useToast();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const certificate = fileCertificateRef.current.files[0];
    const cv = fileCVRef.current.files[0];

    if (
      !name ||
      !birthDate ||
      !phoneNumber ||
      !qualification ||
      !subjects ||
      !area ||
      !cv ||
      !email
    ) {
      showSuccess("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const newTecher = {
      id: Math.floor(Math.random() * 5000) + 100,
      dateIn: formateDate(new Date()),
      name,
      birthDate,
      province,
      biCode,
      residence,
      phoneNumber,
      certificate,
      cv,
      genre,
      qualification,
      area,
      college,
      adressCOllege,
      phoneCollege,
      email,
      subjects: [...subjects.split(",")],
      // subjects: subjects.split(",").map((subj) => subj.trim()),
      description,
      password: Date.now().toString().slice(-8),
      role: "teacher",
    };

    console.log("Novo professor cadastrado:", newTecher);
    await post("users", newTecher);
    showSuccess("Estudante cadastrado com sucesso!");
  }

  return (
    <div>
      <AdminHeading>
        <Title3>Cadastrar Professor</Title3>
        <AdminButton
          type="secondary"
          onClick={() => navigate("/area/admin/adminTeacher")}
        >
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
            <AdminLabel htmlFor="name">Nome Completo</AdminLabel>
            <AdminInput
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel htmlFor="date">Data de nascimento</AdminLabel>
            <AdminInput
              type="date"
              id="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel htmlFor="bi">Número do BI</AdminLabel>
            <AdminInput
              type="text"
              id="bi"
              value={biCode}
              onChange={(e) => setBiCode(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel htmlFor="bi">Provincia</AdminLabel>
            <AdminInput
              type="text"
              id="bi"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel htmlFor="residencia">Residência Atual</AdminLabel>
            <AdminInput
              type="text"
              id="residencia"
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel htmlFor="telefone">Telefone</AdminLabel>
            <AdminInput
              type="text"
              id="telefone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel htmlFor="email">Email</AdminLabel>
            <AdminInput
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel>Genero</AdminLabel>
            <AdminSelect
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option>Selecione o genero</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
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
            <AdminLabel>Grau de qualificação</AdminLabel>
            <AdminSelect
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            >
              <option>Selecione a qualificação</option>
              <option value="medio">Ensino médio</option>
              <option value="superior">Ensino superior</option>
            </AdminSelect>
          </div>
          <div>
            <AdminLabel htmlFor="area">Área de formação</AdminLabel>
            <AdminInput
              type="text"
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel htmlFor="instituicao">Nome da Instituição</AdminLabel>
            <AdminInput
              type="text"
              id="instituicao"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel htmlFor="instituicao">
              Endereço da Instituição
            </AdminLabel>
            <AdminInput
              type="text"
              id="instituicao"
              value={adressCOllege}
              onChange={(e) => setAdressCollege(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel htmlFor="instituicao">
              Telefone da Instituição
            </AdminLabel>
            <AdminInput
              type="text"
              id="instituicao"
              value={phoneCollege}
              onChange={(e) => setPhoneCollege(e.target.value)}
            />
          </div>
        </AdminAddForm>
        <AdminAddHeader>
          <p className="bg-white inline-block p-[6px] text-blue-700 rounded-md">
            <BsFileEarmark />
          </p>
          <Title4>Qualificações e documentos</Title4>
        </AdminAddHeader>
        <AdminAddForm type="two">
          <div>
            <AdminLabel>Upload Curriculum</AdminLabel>
            <AdminInput type="file" ref={fileCVRef} accept=".jpg, .png, .pdf" />
          </div>
          <div>
            <AdminLabel>Cerificado</AdminLabel>
            <AdminInput
              type="file"
              ref={fileCertificateRef}
              accept=".jpg, .png, .pdf"
            />
          </div>
          <div>
            <AdminLabel>Cadeiras dominantes (separe por virgula)</AdminLabel>
            <AdminInput
              type="text"
              value={subjects}
              onChange={(e) => setSubjects(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel>Breve descrição</AdminLabel>
            <AdminInput
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </AdminAddForm>
        <div className="flex items-center gap-2 justify-end mt-2">
          <AdminButton
            type="secondary"
            onClick={() => navigate("/area/admin/adminTeacher")}
          >
            <p className="text-lg">
              <BsX />
            </p>
            <p>Cancelar</p>
          </AdminButton>
          <AdminButton type="primary">
            <p className="text-base">
              <MdOutlineDone />
            </p>
            <p>Finalizar Cadastro</p>
          </AdminButton>
        </div>
      </AdminAddTeacherLayout>
    </div>
  );
}

export default AdminAddTeacher;
