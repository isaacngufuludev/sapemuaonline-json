import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
import { useModal } from "../../../../contexts/ModalContext";

import { useNavigate } from "react-router-dom";
import { useEditOptions } from "../../../../hooks/useEditOptions";
import { HiEllipsisVertical } from "react-icons/hi2";

function AdminTeacherItem({ item }) {
  const { toggleRemoveTeacher } = useModal();
  const { showMenu, menuRef, setShowMenu } = useEditOptions();
  const navigate = useNavigate();

  const handleView = () => {
    console.log("Ver Professor:", item);
    navigate("/area/admin/adminTeacher/teacher-detail");
    setShowMenu(false);
  };

  const handleEdit = () => {
    console.log("Editar Professor:", item);
    navigate("/area/admin/adminTeacher/add-teacher");
    setShowMenu(false);
  };

  const handleDelete = () => {
    console.log("Eliminar Professor:", item);
    toggleRemoveTeacher();
    setShowMenu(false);
  };

  return (
    <li className="grid grid-cols-[0.3fr_1.5fr_0.7fr_0.7fr_0.7fr_0.5fr_0.5fr_0.2fr] items-center dark:border-gray-700 border-b border-slate-200  px-4 py-2">
      <p className="font-semibold rounded-full w-2/4 flex items-center justify-center py-3 px-4 bg-slate-100  dark:bg-gray-900">
        {item.name[0]}
      </p>
      <div>
        <p className="font-semibold">{item.name}</p>
        <p className="text-xs">{item.email}</p>
      </div>
      <p>{item.id}</p>
      <div>
        <p className="font-semibold">{item.qualification}</p>
        <p className="text-xs">{item.area}</p>
      </div>
      <p>{item.phoneNumber}</p>
      <p>{item.genre}</p>
      <p>{item.age}</p>
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
    </li>
  );
}

export default AdminTeacherItem;
