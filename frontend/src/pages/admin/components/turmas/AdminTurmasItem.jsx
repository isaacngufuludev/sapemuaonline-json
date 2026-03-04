import Title4 from "../../../../components/ui/Title4";
import AdminButton from "../AdminButton";

import { useModal } from "../../../../contexts/ModalContext";
import {
  HiOutlineBookOpen,
  HiOutlineClock,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { useClasses } from "../../../../hooks/useClasses";
import { useNavigate } from "react-router-dom";
import { useEditOptions } from "../../../../hooks/useEditOptions";
import {
  HiEllipsisVertical,
  HiOutlineHome,
  HiOutlineUsers,
} from "react-icons/hi2";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
import { useStudents } from "../../../../hooks/useStudents";
import { useTeachers } from "../../../../hooks/useTeachers";

function AdminTurmasItem({ item }) {
  const { toggleTurmas, selectOptionItem, toggleTurmaModal, selectEditedItem } =
    useModal();
  const { classes } = useClasses();
  const { students } = useStudents();
  const { teachers } = useTeachers();
  const { showMenu, menuRef, setShowMenu } = useEditOptions();
  const turmaClasse = classes.find((c) => c.id === item.classId);
  const turmaStudents = students.filter((s) => s.turmaId === item.id);
  const turmaTeachers = teachers.filter((t) => t.turmasId.includes(item.id));
  const uniqueSubjects = [
    ...new Set(turmaTeachers.flatMap((teacher) => teacher.subjects)),
  ];

  const navigate = useNavigate();

  const handleView = () => {
    console.log("Ver estudante:", item);
    navigate(`/area/admin/adminTurmas/turma-detail/${item.id}`);
    setShowMenu(false);
  };

  const handleEdit = () => {
    selectEditedItem(item);
    toggleTurmaModal();
    setShowMenu(false);
  };

  const handleDelete = () => {
    selectOptionItem(item);
    toggleTurmas();
    setShowMenu(false);
  };

  return (
    <li className="rounded-md border border-slate-200 text-xs dark:border-gray-700">
      <div className="flex items-center justify-between rounded-t-md bg-gray-200 px-3 py-[10px] dark:bg-gray-900">
        <Title4>
          {turmaClasse?.classYear}-{item.turmaCategory}/{item.period}
        </Title4>
        <div className="relative" ref={menuRef}>
          <button
            className="text-xl hover:text-blue-600 transition-colors"
            onClick={() => setShowMenu(!showMenu)}
          >
            <HiEllipsisVertical />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-slate-200 dark:border-gray-700 z-50">
              <button
                onClick={handleView}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors border-b border-slate-200 dark:border-gray-700"
              >
                <BsEye size={16} />
                Visualizar
              </button>
              <button
                onClick={handleEdit}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-yellow-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors border-b border-slate-200 dark:border-gray-700"
              >
                <BsPencil size={16} />
                Editar
              </button>
              <button
                onClick={handleDelete}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-red-50 dark:hover:bg-gray-700 text-red-600 dark:text-red-400 transition-colors"
              >
                <BsTrash size={16} />
                Eliminar
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 px-3 py-2">
        <p className="flex items-center gap-1">
          <span className="text-sm">
            <HiOutlineUserGroup />
          </span>
          <span>
            {turmaStudents.length} Estudante{turmaStudents.length > 1 && "s"}
          </span>
        </p>
        <p className="flex items-center gap-1">
          <span className="text-sm">
            <HiOutlineUsers />
          </span>
          <span>
            {turmaTeachers.length} Professor{turmaTeachers.length > 1 && "es"}
          </span>
        </p>
        <p className="flex items-center gap-1">
          <span className="text-sm">
            <HiOutlineBookOpen />
          </span>
          <span>{uniqueSubjects.length} Disciplinas</span>
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
        <AdminButton
          type="turmas"
          onClick={() =>
            navigate(`/area/admin/adminTurmas/turma-detail/${item.id}`)
          }
        >
          Ver detalhes
        </AdminButton>
      </div>
    </li>
  );
}

export default AdminTurmasItem;
