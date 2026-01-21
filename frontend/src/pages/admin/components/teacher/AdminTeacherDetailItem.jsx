import Title4 from "../../../../components/ui/Title4";

import {
  FiUser,
  FiPhone,
  FiMail,
  FiCalendar,
  FiSmile,
  FiFile,
  FiFolder,
} from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineClock, HiOutlineHome } from "react-icons/hi";
import { FaRegIdCard } from "react-icons/fa";

function AdminTeacherDetailItem({ item }) {
  return (
    <>
      <li className=" rounded-md bg-white mb-5 dark:bg-gray-800 p-5 flex flex-col gap-3 border-[0.1px] dark:border-gray-700 border-slate-200">
        <div className="flex gap-2 items-center p-5 border-b-[0.1px] dark:border-gray-700 border-slate-200">
          <p className="text-4xl  bg-blue-200 p-5 rounded-full dark:bg-gray-900">
            <FiUser />
          </p>
          <div>
            <Title4>{item.name}</Title4>
            <p className="text-sm">Aderido aos {item.datein} </p>
            <p className="text-xs">{item.id}</p>
          </div>
        </div>
        <Title4>Informaçóes Basica</Title4>
        <div className="flex items-center gap-2">
          <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
            <FiUser />
          </p>
          <div className="flex flex-col ">
            <Title4>Genero</Title4>
            <p className="text-xs">{item.genre}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
            <FiSmile />
          </p>
          <div className="flex flex-col ">
            <Title4>Idade</Title4>
            <p className="text-xs">{item.age} anos</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
            <FaRegIdCard />
          </p>
          <div className="flex flex-col ">
            <Title4>Número de Identificação</Title4>
            <p className="text-xs">{item.bi}</p>
          </div>
        </div>
        <Title4>Informaçóes Acadêmicas</Title4>
        <div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <LuGraduationCap />
            </p>
            <div className="flex flex-col ">
              <Title4>Qualificação</Title4>
              <p className="text-xs">{item.qualification}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
            <FiFolder />
          </p>
          <div className="flex flex-col ">
            <Title4>Area de Formação</Title4>
            <p className="text-xs">{item.area}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
            <HiOutlineHome />
          </p>
          <div className="flex flex-col ">
            <Title4>Nome da Instituição</Title4>
            <p className="text-xs">{item.college}</p>
          </div>
        </div>
        <Title4>Contactos</Title4>
        <div className="flex items-center gap-2">
          <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
            <FiMail />
          </p>
          <div className="flex flex-col ">
            <Title4>Email</Title4>
            <p className="text-xs">{item.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
            <FiPhone />
          </p>
          <div className="flex flex-col ">
            <Title4>Telefone</Title4>
            <p className="text-xs">{item.phoneNumber}</p>
          </div>
        </div>
      </li>

      <li className="rounded-md bg-white py-3 dark:bg-gray-800 border-[0.1px] dark:border-gray-700 border-slate-200">
        <div className="py-5 px-5 border-b-[0.1px] dark:border-gray-700 border-slate-200 ">
          <Title4>Informaçoes Adicionais</Title4>
        </div>
        <div className="flex  gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200 ">
          <p className="w-56 text-sm">Nome Completo</p>
          <p className="text-sm">{item.name}</p>
        </div>
        <div className="flex gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200 ">
          <p className="w-56 text-sm">Filho de </p>
          <p className="text-sm">{item.father}</p>
        </div>
        <div className="flex gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200  ">
          <p className="w-56 text-sm">e de </p>
          <p className="text-sm">{item.father}</p>
        </div>
        <div className="flex gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200  ">
          <p className="w-56 text-sm">Data de nascimento </p>
          <p className="text-sm">{item.birthdate}</p>
        </div>
        <div className="flex  gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200 ">
          <p className="w-56 text-sm">Residência</p>
          <p className="text-sm">{item.residencia}</p>
        </div>
        <div className="flex gap-10 pt-3 px-5 ">
          <p className="w-56 text-sm">Bilhete de Identidade</p>
          <p className="text-sm">{item.bi}</p>
        </div>
      </li>
    </>
  );
}

export default AdminTeacherDetailItem;
