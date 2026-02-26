import { memo } from "react";
import { useNavigate } from "react-router-dom";
import Title4 from "../../../../components/ui/Title4";
import TeacherTurmasBtn from "./TeacherTurmasBtn";

import {
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineHome,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { LuGraduationCap } from "react-icons/lu";

function TeacherTurmasItem({ item, classYear, courseName, studentCount }) {
  const navigate = useNavigate();
  const period = item?.period ?? "";
  const periodInitial = Array.isArray(period) ? period[0] : String(period)[0];

  return (
    <li className="border border-slate-200  rounded-md text-xs  dark:border-gray-700">
      <div className="bg-gray-200 py-[10px] px-3 dark:bg-gray-900 rounded-t-md ">
        <Title4>
          {classYear ?? "Sem classe"} {item.turmaCategory}
          {periodInitial ?? ""}
        </Title4>
      </div>
      <div className="py-2 px-3 flex flex-col gap-2">
        <p className="flex items-center gap-1">
          <span className="text-sm">
            <LuGraduationCap />
          </span>
          <span>{courseName ?? "Sem curso"}</span>
        </p>
        <p className="flex items-center gap-1">
          <span className="text-sm">
            <HiOutlineUserGroup />
          </span>
          <span>
            {studentCount} Estudante
            {studentCount > 1 ? "s" : ""}
          </span>
        </p>
        <p className="flex items-center gap-1">
          <span className="text-sm">
            <HiOutlineBookOpen />
          </span>
          <span>{item.disciplinas} Disciplinas</span>
        </p>
        <p className="flex items-center gap-1">
          <span className="text-sm">
            <HiOutlineHome />
          </span>
          <span>Sala {item.room}</span>
        </p>
        <p className="flex items-center gap-1">
          <span className="text-sm">
            <HiOutlineClock />
          </span>
          <span>{item.period} </span>
        </p>
        <p className="flex items-center gap-1">
          <span className="text-sm">
            <HiOutlineUserGroup />
          </span>
          <span>Turma {item.turmaCategory} </span>
        </p>
        <TeacherTurmasBtn
          onClick={() =>
            navigate(`/area/teacher/teacher-turmas/teacher-info/${item.id}`)
          }
        />
      </div>
    </li>
  );
}

export default memo(TeacherTurmasItem);
