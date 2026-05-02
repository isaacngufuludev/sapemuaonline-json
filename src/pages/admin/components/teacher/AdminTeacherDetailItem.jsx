import Title4 from "../../../../components/ui/Title4";

import { FiUser, FiPhone, FiMail, FiSmile, FiFolder } from "react-icons/fi";
import { get } from "../../../../services/api";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineHome } from "react-icons/hi";
import { FaRegIdCard } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../../../components/shared/Loading";
import MediaPreview from "../MediaPreview";
import UserAvatar from "../../../../components/shared/UserAvatar";

function AdminTeacherDetailItem() {
  const { teacherId } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    async function fetchTeacher() {
      const data = await get(`users/${teacherId}`);
      setTeacher(data);
      setisLoading(false);
    }

    fetchTeacher();
  }, [teacherId]);

  if (isLoading) return <Loading type="blue" size={50} />;
  if (!teacher) return;

  return (
    <li>
      <div className="grid grid-cols-1 items-start gap-4 lg:gap-7 xl:grid-cols-[1.5fr_3fr]">
        <div className="mb-5 flex flex-col gap-3 rounded-md border-[0.1px] border-slate-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-5">
          <div className="flex gap-2 items-center p-5 border-b-[0.1px] dark:border-gray-700 border-slate-200">
            <UserAvatar user={teacher} size="xl" />
            <div>
              <Title4>{teacher.name}</Title4>
              <p className="text-sm">Aderido aos {teacher.dateIn} </p>
              <p className="text-xs">{teacher.id}</p>
            </div>
          </div>
          <Title4>Informaçóes Basica</Title4>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiUser />
            </p>
            <div className="flex flex-col ">
              <Title4>Genero</Title4>
              <p className="text-xs">{teacher.genre}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiSmile />
            </p>
            <div className="flex flex-col ">
              <Title4>Idade</Title4>
              <p className="text-xs">{teacher.age} anos</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FaRegIdCard />
            </p>
            <div className="flex flex-col ">
              <Title4>Número de Identificação</Title4>
              <p className="text-xs">{teacher.biCode}</p>
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
                <p className="text-xs">{teacher.qualification}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiFolder />
            </p>
            <div className="flex flex-col ">
              <Title4>Area de Formação</Title4>
              <p className="text-xs">{teacher.area}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineHome />
            </p>
            <div className="flex flex-col ">
              <Title4>Nome da Instituição</Title4>
              <p className="text-xs">{teacher.college}</p>
            </div>
          </div>
          <Title4>Contactos</Title4>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiMail />
            </p>
            <div className="flex flex-col ">
              <Title4>Email</Title4>
              <p className="text-xs">{teacher.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiPhone />
            </p>
            <div className="flex flex-col ">
              <Title4>Telefone</Title4>
              <p className="text-xs">{teacher.phoneNumber}</p>
            </div>
          </div>
        </div>

        <div className="rounded-md border-[0.1px] border-slate-200 bg-white pt-3 dark:border-gray-700 dark:bg-gray-800">
          <div className="py-5 px-5 border-b-[0.1px] dark:border-gray-700 border-slate-200 ">
            <Title4>Informaçoes Adicionais</Title4>
          </div>
          <div className="flex flex-col gap-1 border-b-[0.1px] border-slate-200 px-5 py-3 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:gap-10">
            <p className="text-sm sm:w-56">Nome Completo</p>
            <p className="text-sm">{teacher.name}</p>
          </div>
          <div className="flex flex-col gap-1 border-b-[0.1px] border-slate-200 px-5 py-3 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:gap-10">
            <p className="text-sm sm:w-56">Bilhete de Identidade</p>
            <p className="text-sm">{teacher.biCode}</p>
          </div>

          <div className="flex flex-col gap-1 border-b-[0.1px] border-slate-200 px-5 py-3 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:gap-10">
            <p className="text-sm sm:w-56">Data de nascimento </p>
            <p className="text-sm">{teacher.birthDate}</p>
          </div>
          <div className="flex flex-col gap-1 border-b-[0.1px] border-slate-200 px-5 py-3 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:gap-10">
            <p className="text-sm sm:w-56">Residência</p>
            <p className="text-sm">{teacher.residence}</p>
          </div>
          <div className="flex flex-col gap-1 border-b-[0.1px] border-slate-200 px-5 py-3 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:gap-10">
            <p className="text-sm sm:w-56">Disciplinas </p>
            <p className="text-sm">{teacher.subjects.join(", ")}</p>
          </div>
          <MediaPreview file={teacher.photo} title="Foto-Passe" />
          <MediaPreview file={teacher.certificate} title="Certificado" />
          <div className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-10">
            <p className="text-sm sm:w-56">Turmas Vinculadas </p>
            <p className="text-sm">{teacher.turmasId.join(", ")}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default AdminTeacherDetailItem;
