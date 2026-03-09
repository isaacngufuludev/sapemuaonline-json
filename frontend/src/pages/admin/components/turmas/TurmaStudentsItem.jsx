import { HiEllipsisVertical } from "react-icons/hi2";
import { useEditOptions } from "../../../../hooks/useEditOptions";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";

function TurmaStudentsItem({ item }) {
  const { showMenu, menuRef, setShowMenu } = useEditOptions();

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

  return (
    <>
      <li className="hidden items-center border-b border-slate-200 bg-white px-2 last:border-0 dark:border-gray-700 dark:bg-gray-800 md:grid md:grid-cols-[0.3fr_1fr_0.7fr_0.7fr_0.7fr_0.2fr]">
        <div className="font-semibold flex items-center justify-start ">
          <p className="py-3 px-5 bg-slate-100 rounded-full dark:bg-gray-900">
            {item.name[0].toUpperCase()}
          </p>
        </div>
        <p className="py-4">{item.name}</p>
        <p className="py-4">{item.id}</p>
        <p className="py-4">{item.age}</p>
        <p>Activo</p>
        <div className="relative" ref={menuRef}>
          <button
            className="text-xl hover:text-blue-600 transition-colors"
            onClick={() => setShowMenu(!showMenu)}
          >
            <HiEllipsisVertical />
          </button>

          {showMenu && (
            <div className="absolute right-0 z-50 mt-2 w-32 rounded-lg border border-slate-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
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
            </div>
          )}
        </div>
      </li>
    </>
  );
}

export default TurmaStudentsItem;
