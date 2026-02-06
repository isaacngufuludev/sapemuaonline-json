import Title3 from "../../../../components/ui/Title3";

import { HiEllipsisVertical } from "react-icons/hi2";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useModal } from "../../../../contexts/ModalContext";
import { useEditOptions } from "../../../../hooks/useEditOptions";

function AdminNewsItem({ item }) {
  const { toggleNews, toggleNewsModal, selectOptionItem } = useModal();
  const { showMenu, menuRef, setShowMenu } = useEditOptions();

  const handleEdit = () => {
    console.log("Editar estudante:", item);
    toggleNewsModal();
    setShowMenu(false);
  };

  const handleDelete = () => {
    selectOptionItem(item);
    toggleNews();
    setShowMenu(false);
  };

  return (
    <li className="flex flex-col justify-between p-3 dark:border-gray-700 rounded-md duration-300 border border-slate-200 ">
      <div>
        <div className="flex items-center justify-between mb-2">
          <Title3>{item.title}</Title3>
          <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
            {item.date}
          </p>
        </div>
        <p className="text-sm  leading-6">{item.description}</p>
      </div>
      <div className="relative flex justify-end " ref={menuRef}>
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
    </li>
  );
}

export default AdminNewsItem;
