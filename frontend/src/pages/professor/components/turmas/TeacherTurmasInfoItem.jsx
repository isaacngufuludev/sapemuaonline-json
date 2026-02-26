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

function TeacherTurmasInfoItem({ item, course, students }) {
  return (
    <>
      <li className="rounded-md bg-white dark:bg-gray-800  border-[0.1px] dark:border-gray-700 border-slate-200">
        <div className="p-5 border-b-[0.1px] dark:border-gray-700 border-slate-200">
          <Title4>
            Turma {item.turmaCategory}
            {item.period[0]}
          </Title4>
        </div>
        <div className="p-5 flex flex-col gap-5 text-sm">
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <LuGraduationCap />
            </p>
            <div className="flex flex-col gap-1">
              <Title4>Curso</Title4>
              <p>{course.courseName}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineHome />
            </p>
            <div className="flex flex-col gap-1">
              <Title4>Turma</Title4>
              <p>{item.turmaCategory}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineHome />
            </p>
            <div className="flex flex-col gap-1">
              <Title4>Sala</Title4>
              <p>{item.room}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineHome />
            </p>
            <div className="flex flex-col gap-1">
              <Title4>Disciplinas</Title4>
              {/* <p>{item.disciplinas}</p> */}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineClock />
            </p>
            <div className="flex flex-col gap-1">
              <Title4>Periodo</Title4>
              <p>{item.period}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineUserGroup />
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Estudantes</p>
              <p>{students.length}</p>
            </div>
          </div>
        </div>
      </li>
      {/* ESTUDANTES E NOTAS */}
      <li className="rounded-md">
        <TeacherStudentsList />
      </li>
    </>
  );
}

export default TeacherTurmasInfoItem;
