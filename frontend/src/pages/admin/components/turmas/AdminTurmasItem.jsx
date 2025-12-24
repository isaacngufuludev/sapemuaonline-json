import BtnEdit from "../../../../components/ui/BtnEdit";
import Title4 from "../../../../components/ui/Title4";
import AdminButton from "../AdminButton";

import { useModal } from "../../../../contexts/ModalContext";
import {
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineHome,
  HiOutlineTrash,
  HiOutlineUserGroup,
} from "react-icons/hi";

function AdminTurmasItem({ item }) {
  const { toggleTurmas } = useModal();

  return (
    <li className="border border-slate-200  rounded-md text-xs  dark:border-gray-700">
      <div className="bg-gray-200 py-[10px] px-3 dark:bg-gray-900 rounded-t-md flex items-center justify-between">
        <Title4>
          {item.classe} Classe {item.turma}
          {item.turno[0]}
        </Title4>
        <BtnEdit type="delete" onClick={toggleTurmas}>
          <p className="text-lg">
            <HiOutlineTrash />
          </p>
        </BtnEdit>
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
        <AdminButton type="turmas">Ver detalhes</AdminButton>
      </div>
    </li>
  );
}

export default AdminTurmasItem;
