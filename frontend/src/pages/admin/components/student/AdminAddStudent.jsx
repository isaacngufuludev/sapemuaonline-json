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
import { useRef, useState } from "react";
import { useStudentForm } from "../../../../contexts/StudentFormContext";
import { calcAge, formateDate } from "../../../../utils/helpers";
import { post } from "../../../../services/api";
import { useToast } from "../../../../hooks/useToast";

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

function AdminAddStudent() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [province, setProvince] = useState("");
  const [biCode, setBiCode] = useState("");
  const [residence, setResidence] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [genre, setGenre] = useState("");
  const [course, setCourse] = useState("");
  const [classLevel, setClassLevel] = useState("");
  const [turma, setTurma] = useState("");
  const [email, setEmail] = useState("");
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

  async function handlerSubmit(e) {
    e.preventDefault();
    const certificate = certfificateRef.current.files[0];
    const photo = photoRef.current.files[0];
    // if (certificate) {
    //   console.log(
    //     certificate,
    //     certificate.name,
    //     certificate.size,
    //     certificate.type,
    //   );
    // }
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (
      !name ||
      !birthDate ||
      !phoneNumber ||
      !certificate ||
      !photo ||
      !course ||
      !classLevel ||
      !turma ||
      !email
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
      id: (Math.floor(Math.random() * 5000) + 100).toString(),
      dateIn: formateDate(new Date()),
      age: `${calcAge(birthDate)} anos`,
      name,
      birthDate,
      province,
      biCode,
      residence,
      phoneNumber: `+244 ${phoneNumber}`,
      genre,
      course,
      classLevel: `${classLevel}ª Classe`,
      turma,
      email,
      certificate,
      photo,
      fatherJob,
      fatherName,
      fatherPhoneNumber,
      motherName,
      motherJob,
      motherPhoneNumber,
      guardionJob,
      guardionName,
      guardionPhoneNumber,
      password: Date.now().toString().slice(-8),
      role: "student",
    };

    await post("users", newStudent);
    showSuccess("Estudante cadastrado com sucesso!");
    navigate("/area/admin/adminStudents");
    console.log("Novo estudante:", newStudent);
  }

  return (
    <div>
      <AdminHeading>
        <Title3>Cadastrar Estudante</Title3>
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
            <AdminLabel htmlFor="name">Nome Completo</AdminLabel>
            <AdminInput
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel htmlFor="date">Data de nascimento</AdminLabel>
            <AdminInput
              id="date"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel htmlFor="province">Provincia</AdminLabel>
            <AdminInput
              id="province"
              type="text"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel htmlFor="bi">Numero do BI</AdminLabel>
            <AdminInput
              id="bi"
              type="text"
              value={biCode}
              onChange={(e) => setBiCode(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel htmlFor="residence">Residencia</AdminLabel>
            <AdminInput
              id="residence"
              type="text"
              value={residence}
              onChange={(e) => setResidence(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel htmlFor="phone">Telefone</AdminLabel>
            <AdminInput
              id="phone"
              max={9}
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <AdminLabel htmlFor="email">Email</AdminLabel>
            <AdminInput
              id="email"
              type="text"
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
              <option>Nenhum Selecionado</option>
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
            <AdminLabel>Selecionar Curso/Ensino</AdminLabel>
            <AdminSelect
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option>Nenhum Selecionado</option>
              <option value="Informatica">Informática</option>
              <option value="Gestao_Empresarial">Gestão Empresarial</option>
              <option value="Electricidade">Electricidade</option>
            </AdminSelect>
          </div>
          <div>
            <AdminLabel>Selecionar Classe</AdminLabel>
            <AdminSelect
              value={classLevel}
              onChange={(e) => setClassLevel(e.target.value)}
            >
              <option>Nenhum Selecionado</option>
              <option value="10">10ª Classe</option>
              <option value="11">11ª Classe</option>
              <option value="12">12ª Classe</option>
              <option value="13">13ª Classe</option>
            </AdminSelect>
          </div>
          <div>
            <AdminLabel>Selecionar Turma</AdminLabel>
            <AdminSelect
              value={turma}
              onChange={(e) => setTurma(e.target.value)}
            >
              <option>Nenhum Selecionado</option>
              <option value="A">Turma A</option>
              <option value="B">Turma B</option>
              <option value="C">Turma C</option>
              <option value="D">Turma D</option>
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
            <p>Finalizar Cadastro</p>
          </AdminButton>
        </div>
      </AdminAddStudentLayout>
    </div>
  );
}

export default AdminAddStudent;
