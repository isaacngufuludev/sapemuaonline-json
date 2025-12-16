import { Outlet, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  BsExclamationCircle,
  BsFileEarmark,
  BsPersonPlus,
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
  const navigate = useNavigate();

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
      <AdminAddStudentLayout>
        <AdminAddHeader>
          <p className="bg-white inline-block p-[6px] text-blue-700 rounded-md">
            <BsExclamationCircle />
          </p>
          <Title4>Informações pessoais</Title4>
        </AdminAddHeader>
        <AdminAddForm type="four">
          <div>
            <AdminLabel htmlFor="name">Nome Completo</AdminLabel>
            <AdminInput id="name" type="text" />
          </div>
          <div>
            <AdminLabel htmlFor="date">Data de nascimento</AdminLabel>
            <AdminInput id="date" type="date" />
          </div>
          <div>
            <AdminLabel htmlFor="province">Provincia</AdminLabel>
            <AdminInput id="province" type="text" />
          </div>
          <div>
            <AdminLabel htmlFor="bi">Numero do BI</AdminLabel>
            <AdminInput id="bi" type="text" />
          </div>
          <div>
            <AdminLabel htmlFor="emission">Data de emissão</AdminLabel>
            <AdminInput id="emission" type="date" />
          </div>
          <div>
            <AdminLabel htmlFor="residence">Residencia</AdminLabel>
            <AdminInput id="residence" type="text" />
          </div>
          <div>
            <AdminLabel htmlFor="phone">Telefone</AdminLabel>
            <AdminInput id="phone" type="text" />
          </div>
          <div>
            <AdminLabel>Genero</AdminLabel>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <AdminInput type="radio" />
                <p className="text-xs">Masculino</p>
              </div>
              <div className="flex items-center gap-1">
                <AdminInput type="radio" />
                <p className="text-xs">Femenino</p>
              </div>
            </div>
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
              <AdminParentLinks item={item} />
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
            <AdminLabel>Upload do Bilhete</AdminLabel>
            <AdminInput type="file" />
          </div>
          <div>
            <AdminLabel>Upload do Certificado</AdminLabel>
            <AdminInput type="file" />
          </div>
          <div>
            <AdminLabel>Selecionar Curso/Ensino</AdminLabel>
            <AdminSelect>
              <option>Nenhum Selecionado</option>
              <option value="">Informática</option>
              <option value="">Gestão Empresarial</option>
              <option value="">Electricidade</option>
            </AdminSelect>
          </div>
          <div>
            <AdminLabel>Selecionar Classe</AdminLabel>
            <AdminSelect>
              <option>Nenhum Selecionado</option>
              <option value="">10 Classe</option>
              <option value="">11 Classe</option>
              <option value="">12 Classe</option>
            </AdminSelect>
          </div>
          <div>
            <AdminLabel>Selecionar Turma</AdminLabel>
            <AdminSelect>
              <option>Nenhum Selecionado</option>
              <option value="">Turma A</option>
              <option value="">Turma B</option>
              <option value="">Turma C</option>
            </AdminSelect>
          </div>
        </AdminAddForm>
        <div className="flex items-center gap-2 justify-end mt-2">
          <AdminButton
            type="secondary"
            onClick={() => navigate("/area/admin/adminStudents")}
          >
            Cancelar
          </AdminButton>
          <AdminButton type="primary">
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
