import { HiEllipsisVertical } from "react-icons/hi2";
import { useEditOptions } from "../../../../hooks/useEditOptions";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function TurmaStudentsItem({ item }) {
  const { showMenu, menuRef, setShowMenu } = useEditOptions();
  const navigate = useNavigate();

  const handleView = () => {
    console.log("Ver Professor:", item);
    // navigate("/area/admin/adminStudent/student-detail");
    setShowMenu(false);
  };

  const handleEdit = () => {
    console.log("Editar Professor:", item);
    // navigate("/area/admin/adminTeacher/add-student");
    setShowMenu(false);
  };

  const handleDelete = () => {
    console.log("Eliminar Professor:", item);
    // toggleRemoveTeacher();
    setShowMenu(false);
  };

  return (
    <tr className="border-b px-2 bg-white last:border-0 dark:bg-gray-800 border-slate-200 dark:border-gray-700 grid grid-cols-[0.3fr_1fr_0.7fr_0.7fr_0.7fr_0.2fr] items-center">
      <td className="font-semibold flex items-center justify-start ">
        <p className="py-3 px-5 bg-slate-100 rounded-full dark:bg-gray-900">
          {item.name[0].toUpperCase()}
        </p>
      </td>
      <td className="py-4">{item.name}</td>
      <td className="py-4">{item.id}</td>
      <td className="py-4">{item.age}</td>
      <td>{item.age}</td>
      <td className="relative" ref={menuRef}>
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
      </td>
    </tr>
  );
}

export default TurmaStudentsItem;
