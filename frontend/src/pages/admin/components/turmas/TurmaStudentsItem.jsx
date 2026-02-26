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

  const handleDelete = () => {
    console.log("Eliminar Professor:", item);
    // toggleRemoveTeacher();
    setShowMenu(false);
  };

  return (
    <>
      <li className="rounded-md border border-slate-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800 md:hidden">
        <div className="mb-2 flex items-center gap-2">
          <p className="rounded-full bg-slate-100 px-3 py-2 font-semibold dark:bg-gray-900">
            {item.name[0].toUpperCase()}
          </p>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{item.name}</p>
            <p className="truncate text-xs text-gray-500 dark:text-gray-400">
              {item.id}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1 text-xs sm:grid-cols-2">
          <p>
            <span className="font-medium">Idade:</span> {item.age}
          </p>
          <p>
            <span className="font-medium">Estado:</span> Activo
          </p>
        </div>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
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
      </li>

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
    </>
  );
}

export default TurmaStudentsItem;
