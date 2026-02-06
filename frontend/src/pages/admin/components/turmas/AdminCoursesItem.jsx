import { HiOutlineTrash } from "react-icons/hi";
import BtnEdit from "../../../../components/ui/BtnEdit";
import Title4 from "../../../../components/ui/Title4";
import AdminAddHeader from "../AdminAddHeader";
import { useModal } from "../../../../contexts/ModalContext";
import { useEditOptions } from "../../../../hooks/useEditOptions";
import { BsPencil, BsTrash } from "react-icons/bs";
import { HiEllipsisVertical } from "react-icons/hi2";

function AdminCoursesItem({ item }) {
  const { toggleCourse, selectOptionItem } = useModal();
  const { showMenu, menuRef, setShowMenu } = useEditOptions();

  const handleEdit = () => {
    console.log("Editar curso:", item);
    setShowMenu(false);
  };

  const handleDelete = () => {
    selectOptionItem(item);
    toggleCourse();
    setShowMenu(false);
  };

  return (
    <li>
      <AdminAddHeader type="turma">
        <Title4>{item.courseName}</Title4>
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
      </AdminAddHeader>
    </li>
  );
}

export default AdminCoursesItem;
