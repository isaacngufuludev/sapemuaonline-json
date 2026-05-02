import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
import { useModal } from "../../../../contexts/ModalContext";

import { useNavigate } from "react-router-dom";
import { useEditOptions } from "../../../../hooks/useEditOptions";
import { HiEllipsisVertical } from "react-icons/hi2";
import UserAvatar from "../../../../components/shared/UserAvatar";

function AdminTeacherItem({ item }) {
  const { toggleRemoveTeacher, selectOptionItem } = useModal();
  const { showMenu, menuRef, setShowMenu } = useEditOptions();
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/area/admin/adminTeacher/teacher-detail/${item.id}`);
    setShowMenu(false);
  };

  const handleEdit = () => {
    navigate(`/area/admin/adminTeacher/add-teacher/${item.id}`);
    setShowMenu(false);
  };

  function handleDelete() {
    selectOptionItem(item);
    toggleRemoveTeacher();
    setShowMenu(false);
  }

  return (
    <li className="border-b border-slate-200 dark:border-gray-700 last:border-0">
      <article className="p-3 lg:hidden sm:p-4">
        <div className="mb-2 flex items-center gap-3">
          <UserAvatar user={item} size="md" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{item.name}</p>
            <p className="truncate text-xs text-gray-500 dark:text-gray-400">
              {item.email}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
          <p>
            <span className="font-medium">Código:</span> {item.id}
          </p>
          <p>
            <span className="font-medium">Telefone:</span> {item.phoneNumber}
          </p>
          <p>
            <span className="font-medium">Qualificação:</span>{" "}
            {item.qualification}
          </p>
          <p>
            <span className="font-medium">Área:</span> {item.area}
          </p>
          <p>
            <span className="font-medium">Género:</span> {item.genre}
          </p>
          <p>
            <span className="font-medium">Idade:</span> {item.age}
          </p>
        </div>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            onClick={handleView}
            className="flex w-full items-center justify-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-xs dark:border-gray-700 sm:w-auto"
          >
            <BsEye size={14} />
            Ver
          </button>
          <button
            onClick={handleEdit}
            className="flex w-full items-center justify-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-xs dark:border-gray-700 sm:w-auto"
          >
            <BsPencil size={14} />
            Editar
          </button>
          <button
            onClick={handleDelete}
            className="flex w-full items-center justify-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-xs dark:border-gray-700 sm:w-auto"
          >
            <BsTrash size={14} />
            Eliminar
          </button>
        </div>
      </article>

      <div className="hidden lg:grid grid-cols-[0.3fr_1.5fr_0.7fr_0.7fr_0.7fr_0.5fr_0.5fr_0.2fr] items-center px-4 py-2">
        <div className="font-semibold  flex items-center justify-start">
          <UserAvatar user={item} size="md" />
        </div>
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
      </div>
    </li>
  );
}

export default AdminTeacherItem;
