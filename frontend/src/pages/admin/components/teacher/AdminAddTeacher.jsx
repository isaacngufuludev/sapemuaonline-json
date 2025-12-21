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

function AdminAddTeacher() {
  const navigate = useNavigate();

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
      <AdminAddTeacherLayout>
        <AdminAddHeader>
          <p className="bg-white inline-block p-[6px] text-blue-700 rounded-md">
            <BsExclamationCircle />
          </p>
          <Title4>Informações pessoais</Title4>
        </AdminAddHeader>
        <AdminAddForm type="three">
          <div>
            <AdminLabel htmlFor="name">Nome Completo</AdminLabel>
            <AdminInput type="text" id="name" />
          </div>
          <div>
            <AdminLabel htmlFor="date">Data de nascimento</AdminLabel>
            <AdminInput type="date" id="date" />
          </div>
          <div>
            <AdminLabel htmlFor="bi">Número do BI</AdminLabel>
            <AdminInput type="text" id="bi" />
          </div>
          <div>
            <AdminLabel htmlFor="pai">Nome do pai</AdminLabel>
            <AdminInput type="text" id="pai" />
          </div>
          <div>
            <AdminLabel htmlFor="mae">Nome do mãe</AdminLabel>
            <AdminInput type="text" id="mae" />
          </div>
          <div>
            <AdminLabel htmlFor="residencia">Residência Atual</AdminLabel>
            <AdminInput type="text" id="residencia" />
          </div>
          <div>
            <AdminLabel htmlFor="telefone">Telefone</AdminLabel>
            <AdminInput type="text" id="telefone" />
          </div>
          <div>
            <AdminLabel htmlFor="email">Email</AdminLabel>
            <AdminInput type="email" id="email" />
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
            <BsMortarboard />
          </p>
          <Title4>Qualificações</Title4>
        </AdminAddHeader>
        <AdminAddForm type="three">
          <div>
            <AdminLabel>Grau de qualificação</AdminLabel>
            <AdminSelect>
              <option>Selecione a qualificação</option>
              <option value="">Ensino médio</option>
              <option value="">Ensino superior</option>
            </AdminSelect>
          </div>
          <div>
            <AdminLabel htmlFor="area">Área de formação</AdminLabel>
            <AdminInput type="text" id="area" />
          </div>
          <div>
            <AdminLabel htmlFor="instituicao">Nome da Instituição</AdminLabel>
            <AdminInput type="text" id="instituicao" />
          </div>
          <div>
            <AdminLabel htmlFor="adress">Endereço da Instituição</AdminLabel>
            <AdminInput type="text" id="adress" />
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
            <AdminInput type="file" />
          </div>
          <div>
            <AdminLabel>Upload BI</AdminLabel>
            <AdminInput type="file" />
          </div>
          <div>
            <AdminLabel>Cadeiras dominantes (separe por virgula)</AdminLabel>
            <AdminInput type="text" />
          </div>
          <div>
            <AdminLabel>Breve descrição</AdminLabel>
            <AdminInput type="text" />
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
