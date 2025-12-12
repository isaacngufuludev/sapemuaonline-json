import Title4 from "../../../../components/ui/Title4";
import TeacherTurmasBtn from "./TeacherTurmasBtn";

import {
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineHome,
  HiOutlineUserGroup,
} from "react-icons/hi";

function TeacherTurmasItem({ item }) {
  return (
    <li className="border border-slate-200  rounded-md text-xs  dark:border-gray-700">
      <div className="bg-gray-200 py-[10px] px-3 dark:bg-gray-900 rounded-t-md ">
        <Title4>
          {item.classe} Classe {item.turma}
          {item.turno[0]}
        </Title4>
      </div>
      <div className="py-2 px-3 flex flex-col gap-2">
        <p className="flex items-center gap-1">
          <span className="text-sm">
            <HiOutlineUserGroup />
          </span>
          <span>{item.estudantes} Estudantes</span>
        </p>
        <p className="flex items-center gap-1">
          <span className="text-sm">
            <HiOutlineBookOpen />
          </span>
          <span>{item.disciplinas} Disciplinas</span>
        </p>
        <p className="flex items-center gap-1">
          <span className="text-sm">
            <HiOutlineClock />
          </span>
          <span>{item.turno} </span>
        </p>
        <p className="flex items-center gap-1">
          <span className="text-sm">
            <HiOutlineUserGroup />
          </span>
          <span>Turma {item.turma} </span>
        </p>
        <p className="flex items-center gap-1">
          <span className="text-sm">
            <HiOutlineHome />
          </span>
          <span>Sala {item.sala} </span>
        </p>
        <TeacherTurmasBtn />
      </div>
    </li>
  );
}

export default TeacherTurmasItem;
