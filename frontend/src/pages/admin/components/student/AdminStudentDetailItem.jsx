import Title4 from "../../../../components/ui/Title4";

import { FiUser, FiPhone, FiMail, FiCalendar, FiSmile } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineClock, HiOutlineHome } from "react-icons/hi";
import { FaRegIdCard } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../../../../services/api";
import Loading from "../../../../components/shared/Loading";
import { useCourses } from "../../../../hooks/useCourses";
import { useClasses } from "../../../../hooks/useClasses";
import { useTurmas } from "../../../../hooks/useTurmas";

function AdminStudentDetailItem() {
  const { studentId } = useParams();
  const [student, setStudent] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const { classes } = useClasses();
  const { courses } = useCourses();
  const { turmas } = useTurmas();
  const studentClass = classes.find((c) => c.id === student?.classId);
  const studentTurmas = turmas.find((turma) => turma.id === student?.turmaId);
  const studentCourse = courses.find(
    (course) => course.id === student?.courseId,
  );

  useEffect(() => {
    async function fetchStudent() {
      const data = await get(`users/${studentId}`);
      setStudent(data);
      setisLoading(false);
    }

    fetchStudent();
  }, [studentId]);

  if (isLoading) return <Loading type="blue" size={50} />;
  if (!student) return;

  return (
    <li>
      <div className="grid grid-cols-[1.5fr_3fr] gap-7 items-start">
        <div className="rounded-md bg-white mb-5 dark:bg-gray-800 p-5 flex flex-col gap-3 border-[0.1px] dark:border-gray-700 border-slate-200">
          <div className="flex gap-2 items-center pb-5 border-b-[0.1px] dark:border-gray-700 border-slate-200">
            <p className="text-5xl  bg-blue-200 p-5 rounded-full dark:bg-gray-900">
              <FiUser />
            </p>
            <div>
              <Title4>{student.name}</Title4>
              <p className="text-sm">Aderido aos {student.dateIn} </p>
              <p className="text-xs">{student.id}</p>
            </div>
          </div>
          <Title4>Informaçóes Basica</Title4>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiUser />
            </p>
            <div className="flex flex-col ">
              <Title4>Genero</Title4>
              <p className="text-xs">{student.genre}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiSmile />
            </p>
            <div className="flex flex-col ">
              <Title4>Idade</Title4>
              <p className="text-xs">{student.age}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FaRegIdCard />
            </p>
            <div className="flex flex-col ">
              <Title4>Número de Identificação</Title4>
              <p className="text-xs">{student.biCode}</p>
            </div>
          </div>
          <Title4>Informaçóes Acadêmicas</Title4>
          <div>
            <div className="flex items-center gap-2">
              <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
                <LuGraduationCap />
              </p>
              <div className="flex flex-col ">
                <Title4>Curso/Ensino</Title4>
                <p className="text-xs">{studentCourse?.courseName}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiCalendar />
            </p>
            <div className="flex flex-col ">
              <Title4>Classe</Title4>
              <p className="text-xs">{studentClass?.classYear}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineHome />
            </p>
            <div className="flex flex-col ">
              <Title4>Turma</Title4>
              <p className="text-xs">{studentTurmas?.turmaCategory}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineClock />
            </p>
            <div className="flex flex-col ">
              <Title4>Periodo</Title4>
              <p className="text-xs">{studentTurmas?.period}</p>
            </div>
          </div>
          <Title4>Contactos</Title4>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiMail />
            </p>
            <div className="flex flex-col ">
              <Title4>Email</Title4>
              <p className="text-xs">{student.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <FiPhone />
            </p>
            <div className="flex flex-col ">
              <Title4>Telefone</Title4>
              <p className="text-xs">{student.phoneNumber}</p>
            </div>
          </div>
        </div>

        <div className="rounded-md bg-white py-3 dark:bg-gray-800 border-[0.1px] dark:border-gray-700 border-slate-200">
          <div className="py-5 px-5 border-b-[0.1px] dark:border-gray-700 border-slate-200 ">
            <Title4>Informaçoes Adicionais</Title4>
          </div>
          <div className="flex  gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200 ">
            <p className="w-56 text-sm">Nome Completo</p>
            <p className="text-sm">{student.name}</p>
          </div>
          <div className="flex gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200 ">
            <p className="w-56 text-sm">Filho de </p>
            <p className="text-sm">{student.fatherName}</p>
          </div>
          <div className="flex gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200  ">
            <p className="w-56 text-sm">e de </p>
            <p className="text-sm">{student.motherName}</p>
          </div>
          <div className="flex gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200  ">
            <p className="w-56 text-sm">Contacto do Pai </p>
            <p className="text-sm">{student.fatherPhoneNumber}</p>
          </div>
          <div className="flex gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200  ">
            <p className="w-56 text-sm">Contacto do Mãe </p>
            <p className="text-sm">{student.motherPhoneNumber}</p>
          </div>
          <div className="flex gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200  ">
            <p className="w-56 text-sm">Contacto do Guardião </p>
            <p className="text-sm">{student.guardionPhoneNumber}</p>
          </div>
          <div className="flex gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200  ">
            <p className="w-56 text-sm">Data de nascimento </p>
            <p className="text-sm">{student.birthDate}</p>
          </div>
          <div className="flex  gap-10 py-3 px-5 dark:bg-gray-800 border-b-[0.1px] dark:border-gray-700 border-slate-200 ">
            <p className="w-56 text-sm">Residência</p>
            <p className="text-sm">{student.residencia}</p>
          </div>
          <div className="flex gap-10 pt-3 px-5 ">
            <p className="w-56 text-sm">Bilhete de Identidade</p>
            <p className="text-sm">{student.biCode}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default AdminStudentDetailItem;
