import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useClasses } from "../../../../hooks/useClasses";
import { useCourses } from "../../../../hooks/useCourses";
import { useTurmas } from "../../../../hooks/useTurmas";
import { get } from "../../../../services/api";
import Loading from "../../../../components/shared/Loading";
import { FiCalendar, FiMail, FiPhone, FiSmile, FiUser } from "react-icons/fi";
import { FaRegIdCard } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineClock, HiOutlineHome } from "react-icons/hi";
import Title4 from "../../../../components/ui/Title4";
import UserAvatar from "../../../../components/shared/UserAvatar";

function TeacherStudentDetailItem() {
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
      <div className="grid grid-cols-1 items-start gap-4 xl:gap-4 lg:gap-3 lg:grid-cols-[2fr_3fr] xl:grid-cols-[1.5fr_3fr]">
        <div className="mb-5 flex flex-col gap-3 rounded-md border-[0.1px] border-slate-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-5">
          <div className="flex gap-2 items-center pb-5 border-b-[0.1px] dark:border-gray-700 border-slate-200">
            <UserAvatar user={student} size="xl" />
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

        <div className="rounded-md border-[0.1px] border-slate-200 bg-white py-3 dark:border-gray-700 dark:bg-gray-800">
          <div className="py-5 px-5 border-b-[0.1px] dark:border-gray-700 border-slate-200 ">
            <Title4>Informaçoes Adicionais</Title4>
          </div>
          <div className="flex flex-col gap-1 border-b-[0.1px] border-slate-200 px-5 py-3 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:gap-10">
            <p className="text-sm sm:w-56">Nome Completo</p>
            <p className="text-sm">{student.name}</p>
          </div>
          <div className="flex flex-col gap-1 border-b-[0.1px] border-slate-200 px-5 py-3 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:gap-10">
            <p className="text-sm sm:w-56">Filho de </p>
            <p className="text-sm">{student.fatherName}</p>
          </div>
          <div className="flex flex-col gap-1 border-b-[0.1px] border-slate-200 px-5 py-3 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:gap-10">
            <p className="text-sm sm:w-56">e de </p>
            <p className="text-sm">{student.motherName}</p>
          </div>
          <div className="flex flex-col gap-1 border-b-[0.1px] border-slate-200 px-5 py-3 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:gap-10">
            <p className="text-sm sm:w-56">Contacto do Pai </p>
            <p className="text-sm">{student.fatherPhoneNumber}</p>
          </div>
          <div className="flex flex-col gap-1 border-b-[0.1px] border-slate-200 px-5 py-3 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:gap-10">
            <p className="text-sm sm:w-56">Contacto do Mãe </p>
            <p className="text-sm">{student.motherPhoneNumber}</p>
          </div>
          <div className="flex flex-col gap-1 border-b-[0.1px] border-slate-200 px-5 py-3 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:gap-10">
            <p className="text-sm sm:w-56">Contacto do Guardião </p>
            <p className="text-sm">{student.guardionPhoneNumber}</p>
          </div>
          <div className="flex flex-col gap-1 border-b-[0.1px] border-slate-200 px-5 py-3 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:gap-10">
            <p className="text-sm sm:w-56">Data de nascimento </p>
            <p className="text-sm">{student.birthDate}</p>
          </div>
          <div className="flex flex-col gap-1 border-b-[0.1px] border-slate-200 px-5 py-3 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:gap-10">
            <p className="text-sm sm:w-56">Residência</p>
            <p className="text-sm">{student.residencia}</p>
          </div>
          <div className="flex flex-col gap-1 px-5 pt-3 sm:flex-row sm:gap-10">
            <p className="text-sm sm:w-56">Bilhete de Identidade</p>
            <p className="text-sm">{student.biCode}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TeacherStudentDetailItem;
