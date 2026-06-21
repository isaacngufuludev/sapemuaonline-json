import { HiEllipsisVertical } from "react-icons/hi2";
import { useEditOptions } from "../../../../hooks/useEditOptions";
import { BsEye, BsPencil } from "react-icons/bs";
import UserAvatar from "../../../../components/shared/UserAvatar";
import { useNavigate } from "react-router-dom";

function TurmaStudentsItem({ item }) {
  const { showMenu, menuRef, setShowMenu } = useEditOptions();
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/area/admin/adminStudents/student-detail/${item.id}`);
    setShowMenu(false);
  };

  const handleEdit = () => {
    navigate(`/area/admin/adminStudents/add-student/${item.id}`);
    setShowMenu(false);
  };

  return (
    <>
      <li className="hidden items-center border-b border-slate-200 bg-white px-2 last:border-0 dark:border-gray-700 dark:bg-gray-800 md:grid md:grid-cols-[0.3fr_1fr_0.7fr_0.7fr_0.7fr_0.2fr]">
        <div className="font-semibold flex items-center justify-start ">
          <UserAvatar user={item} size="md" />
        </div>
        <p className="py-4">{item.name}</p>
        <p className="py-4">{item.id}</p>
        <p className="py-4">{item.age}</p>
        <p>
          <p className="text-sm inline-block dark:bg-green-500 bg-green-200 text-green-700 dark:text-green-100 py-1 px-3 rounded-full">
            activo
          </p>
        </p>
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
