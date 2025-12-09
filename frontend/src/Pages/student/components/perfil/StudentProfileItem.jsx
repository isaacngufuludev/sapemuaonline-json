import Title3 from "../../../../components/ui/Title3";
import Title4 from "../../../../components/ui/Title4";

import { FiUser, FiPhone, FiMail, FiCalendar } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineClock, HiOutlineHome } from "react-icons/hi";

function StudentProfileItem({ item }) {
  return (
    <>
      <li className="bg-white dark:bg-gray-800  border-[0.1px] dark:border-gray-700 border-stone-100">
        <div className="flex gap-2 items-center p-5 border-b-[0.1px] dark:border-gray-700 border-stone-100">
          <p className="text-4xl  bg-slate-100 p-5 rounded-full dark:bg-gray-900">
            <FiUser />
          </p>
          <div>
            <Title4>{item.name}</Title4>
            <p className="text-xs">{item.id}</p>
          </div>
        </div>
        <div className="p-5 flex flex-col gap-3 ">
          <Title4>Informaçóes Basica</Title4>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiPhone />
            </p>
            <div className="flex flex-col ">
              <Title3>Telefone</Title3>
              <p className="text-xs">{item.phoneNumber}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiMail />
            </p>
            <div className="flex flex-col ">
              <Title3>Email</Title3>
              <p className="text-xs">{item.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiCalendar />
            </p>
            <div className="flex flex-col ">
              <Title3>Adertido aos</Title3>
              <p className="text-xs">{item.datein}</p>
            </div>
          </div>
          <Title4>Informaçóes da Turma</Title4>
          <div>
            <div className="flex items-center gap-2">
              <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
                <LuGraduationCap />
              </p>
              <div className="flex flex-col ">
                <Title3>Curso/Ensino</Title3>
                <p className="text-xs">{item.course}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiCalendar />
            </p>
            <div className="flex flex-col ">
              <Title3>Classe</Title3>
              <p className="text-xs">{item.class}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineHome />
            </p>
            <div className="flex flex-col ">
              <Title3>Turma</Title3>
              <p className="text-xs">{item.turma}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineClock />
            </p>
            <div className="flex flex-col ">
              <Title3>Periodo</Title3>
              <p className="text-xs">{item.period}</p>
            </div>
          </div>
        </div>
      </li>
      {/* INFORMAÇOES PESSOAIS */}
      <li className="bg-white py-3 dark:bg-gray-800 border-[0.1px] dark:border-gray-700 border-stone-100">
        <div className="py-5 px-5 border-b-[0.1px] dark:border-gray-700 border-stone-100">
          <Title4>Informaçoes Pessoais</Title4>
        </div>
        <div className="flex  gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-stone-100 ">
          <p className="w-56">Nome Completo</p>
          <p className="">{item.name}</p>
        </div>
        <div className="flex gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-stone-100 ">
          <p className="w-56">Filho de </p>
          <p>{item.father}</p>
        </div>
        <div className="flex gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-stone-100 ">
          <p className="w-56">e de </p>
          <p>{item.father}</p>
        </div>
        <div className="flex gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-stone-100 ">
          <p className="w-56">Data de nascimento </p>
          <p>{item.birthdate}</p>
        </div>
        <div className="flex  gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-stone-100 ">
          <p className="w-56">Residência</p>
          <p>{item.residencia}</p>
        </div>
        <div className="flex gap-10 pt-3 px-5 ">
          <p className="w-56">Bilhete de Identidade</p>
          <p>{item.bi}</p>
        </div>
      </li>
    </>
  );
}

export default StudentProfileItem;
