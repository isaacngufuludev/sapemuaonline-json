import Title4 from "../../../../components/ui/Title4";
import { LuGraduationCap } from "react-icons/lu";
import {
  HiOutlineHome,
  HiOutlineClock,
  HiOutlineUserGroup,
} from "react-icons/hi";
import TeacherTurmasStudentsHeader from "./TeacherTurmasStudentsHeader";
import TeacherTurmasTitle from "./TeacherTurmasTitle";
import TeacherStudentsList from "./TeacherStudentsList";

function TeacherTurmasInfoItem({ item }) {
  return (
    <>
      <li className="rounded-md bg-white dark:bg-gray-800  border-[0.1px] dark:border-gray-700 border-slate-200">
        <div className="p-5 border-b-[0.1px] dark:border-gray-700 border-slate-200">
          <Title4>
            Turma {item.turma}
            {item.turno[0]}
          </Title4>
        </div>
        <div className="p-5 flex flex-col gap-5 text-sm">
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <LuGraduationCap />
            </p>
            <div className="flex flex-col gap-1">
              <Title4>Curso</Title4>
              <p>{item.curso}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineHome />
            </p>
            <div className="flex flex-col gap-1">
              <Title4>Turma</Title4>
              <p>{item.turma}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineHome />
            </p>
            <div className="flex flex-col gap-1">
              <Title4>Sala</Title4>
              <p>{item.sala}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineClock />
            </p>
            <div className="flex flex-col gap-1">
              <Title4>Periodo</Title4>
              <p>{item.turno}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineUserGroup />
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Estudantes</p>
              <p>{item.estudantes}</p>
            </div>
          </div>
        </div>
      </li>
      {/* ESTUDANTES E NOTAS */}
      <li className="rounded-md bg-white dark:bg-gray-800  border-[0.1px] dark:border-gray-700 border-slate-200">
        <TeacherTurmasStudentsHeader />
        <TeacherTurmasTitle />
        <TeacherStudentsList />
      </li>
    </>
  );
}

export default TeacherTurmasInfoItem;
