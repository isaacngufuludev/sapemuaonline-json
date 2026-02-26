import { BsEye, BsPencil } from "react-icons/bs";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useEditOptions } from "../../../../hooks/useEditOptions";

function TeacherStudentItem({ item, i }) {
  const { showMenu, menuRef, setShowMenu } = useEditOptions();
  const handleEdit = () => {
    console.log("Editar estudante:", item);
    setShowMenu(false);
  };

  const handleView = () => {
    console.log("Visualizar estudante:", item);
    setShowMenu(false);
  };
  // const media = (item.mac + item.npp + item.npt) / 3;

  return (
    <li className="items-center text-sm font-semibold p-3 border-b-[0.1px] dark:border-gray-700 border-slate-200 grid grid-cols-[0.5fr_3fr_0.7fr_0.7fr_0.7fr_0.7fr_0.3fr]">
      <div className="font-semibold flex items-center justify-center  ">
        <p className="py-3 px-5 bg-slate-100 rounded-full dark:bg-gray-900">
          {i + 1}
        </p>
      </div>
      <p>{item.name}</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      {/* <p className={`${item.mac >= 10 ? "text-blue-700" : "text-red-700"}`}>
        {item.mac}
      </p>
      <p className={`${item.npp >= 10 ? "text-blue-700" : "text-red-700"}`}>
        {item.npp}
      </p>
      <p className={`${item.npt >= 10 ? "text-blue-700" : "text-red-700"}`}>
        {item.npt}
      </p>
      <p className={`${media >= 10 ? "text-blue-700" : "text-red-700"}`}>
        {media.toFixed(1)}
      </p> */}
      <div className="relative" ref={menuRef}>
        <button
          className="text-xl hover:text-blue-600 transition-colors"
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiEllipsisVertical />
        </button>

        {showMenu && (
          <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-slate-200 dark:border-gray-700 z-50">
            <button
              onClick={handleView}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-yellow-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors border-b border-slate-200 dark:border-gray-700"
            >
              <BsEye size={16} />
              Visualizar
            </button>
            <button
              onClick={handleEdit}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-yellow-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors border-b border-slate-200 dark:border-gray-700"
            >
              <BsPencil size={16} />
              Notas
            </button>
          </div>
        )}
      </div>
    </li>
  );
}

export default TeacherStudentItem;
