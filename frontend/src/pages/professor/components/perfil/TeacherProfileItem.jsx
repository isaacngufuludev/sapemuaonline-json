import Title4 from "../../../../components/ui/Title4";

import { FiUser, FiPhone, FiMail, FiCalendar } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineHome, HiOutlineBookOpen } from "react-icons/hi";
import { useAuth } from "../../../../contexts/AuthContext";

function TeacherProfileItem() {
  const { user } = useAuth();

  return (
    <>
      <li className="rounded-md bg-white dark:bg-gray-800  border-[0.1px] dark:border-gray-700 border-slate-200">
        <div className="flex gap-2 items-center p-5 border-b-[0.1px] dark:border-gray-700 border-slate-200">
          <p className="text-4xl  bg-blue-200 p-5 rounded-full dark:bg-gray-900">
            <FiUser />
          </p>
          <div>
            <Title4>{user.name}</Title4>
            <p className="text-xs">{user.id}</p>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-3 ">
          <Title4>Informaçóes Basica</Title4>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiPhone />
            </p>
            <div className="flex flex-col ">
              <Title4>Telefone</Title4>
              <p className="text-xs">{user.phoneNumber}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiMail />
            </p>
            <div className="flex flex-col ">
              <Title4>Email</Title4>
              <p className="text-xs">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiCalendar />
            </p>
            <div className="flex flex-col ">
              <Title4>Adertido aos</Title4>
              <p className="text-xs">{user.dateIn}</p>
            </div>
          </div>
          <Title4>Informaçóes Acadêmica</Title4>
          <div>
            <div className="flex items-center gap-2">
              <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
                <LuGraduationCap />
              </p>
              <div className="flex flex-col ">
                <Title4>Qualificação</Title4>
                <p className="text-xs">{user.qualification}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineBookOpen />
            </p>
            <div className="flex flex-col ">
              <Title4>Area de formação</Title4>
              <p className="text-xs">{user.area}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineHome />
            </p>
            <div className="flex flex-col ">
              <Title4>Instituição</Title4>
              <p className="text-xs">{user.college}</p>
            </div>
          </div>
        </div>
      </li>
      {/* INFORMAÇOES PESSOAIS */}
      <li className="rounded-md bg-white py-3 dark:bg-gray-800 border-[0.1px] dark:border-gray-700 border-slate-200">
        <div className="py-5 px-5 border-b-[0.1px] dark:border-gray-700 border-slate-200 ">
          <Title4>Informaçoes Pessoais</Title4>
        </div>
        <div className="flex  gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200 ">
          <p className="w-56 text-sm">Nome Completo</p>
          <p className="text-sm">{user.name}</p>
        </div>
        <div className="flex gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200  ">
          <p className="w-56 text-sm">Data de nascimento </p>
          <p className="text-sm">{user.birthDate}</p>
        </div>
        <div className="flex  gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200 ">
          <p className="w-56 text-sm">Residência</p>
          <p className="text-sm">{user.residence}</p>
        </div>
        <div className="flex gap-10 py-3 px-5  dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200">
          <p className="w-56 text-sm">Bilhete de Identidade</p>
          <p className="text-sm">{user.biCode}</p>
        </div>
        <div className="flex gap-10 py-3 px-5  dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200">
          <p className="w-56 text-sm">Disciplinas</p>
          <p className="text-sm">{user.subjects}</p>
        </div>
        <div className="flex gap-10 pt-3 px-5  dark:bg-gray-800">
          <p className="w-56 text-sm">Turmas Vinculadas</p>
          <p className="text-sm">{user.turmasId.join(", ")}</p>
        </div>
      </li>
    </>
  );
}

export default TeacherProfileItem;
