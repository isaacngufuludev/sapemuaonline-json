import { BsEye, BsPencil } from "react-icons/bs";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useEditOptions } from "../../../../hooks/useEditOptions";
import { useModal } from "../../../../contexts/ModalContext";
import { useNavigate } from "react-router-dom";
import UserAvatar from "../../../../components/shared/UserAvatar";

function TeacherStudentItem({
  item,
  i,
  selectedSubject,
  selectedTerm,
  grade,
  turmaId,
}) {
  const { showMenu, menuRef, setShowMenu } = useEditOptions();
  const { openGradesModal } = useModal();
  const mac = grade?.mac || "-";
  const npp = grade?.npp || "-";
  const npt = grade?.npt || "-";
  const media = grade?.average || "-";
  const navigate = useNavigate();

  const handleEdit = () => {
    openGradesModal({
      student: item,
      turmaId,
      subject: selectedSubject,
      term: selectedTerm,
      grade,
    });
    setShowMenu(false);
  };

  const handleView = () => {
    console.log("Visualizar estudante:", item);
    navigate(`/area/teacher/teacher-turmas/teacher-student-detail/${item.id}`);
    setShowMenu(false);
  };
  const scoreClass = (value) => {
    if (value == null || String(value).trim() === "" || value === "-") {
      return "text-gray-500 dark:text-gray-400";
    }

    const score = Number(value);
    if (Number.isNaN(score)) return "text-gray-500 dark:text-gray-400";
    return score >= 10 ? "text-blue-700" : "text-red-700";
  };

  return (
    <li
      className="text-sm font-semibold py-2 border-b-[0.1px] dark:border-gray-700 border-slate-200"
      ref={menuRef}
    >
      <div className="hidden md:grid items-center grid-cols-[0.5fr_3fr_0.7fr_0.7fr_0.7fr_0.7fr_0.3fr]">
        <div className="font-semibold flex items-center justify-center gap-2">
          <span className="text-xs text-gray-500">{i + 1}</span>
          <UserAvatar user={item} size="sm" />
        </div>
        <p className="truncate">{item.name}</p>
        <p className={scoreClass(mac)}>{mac}</p>
        <p className={scoreClass(npp)}>{npp}</p>
        <p className={scoreClass(npt)}>{npt}</p>
        <p className={scoreClass(media)}>{media}</p>
        <div className="relative">
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
      </div>

      <div className="md:hidden flex items-center justify-between gap-3">
        <div className="min-w-0 flex items-center gap-3">
          <UserAvatar user={item} size="sm" />
          <div className="min-w-0">
            <p className="truncate">{item.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium truncate">
              MAC {mac} | NPP {npp} | NPT {npt} | MT {media}
            </p>
          </div>
        </div>
        <div className="relative shrink-0">
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
      </div>
    </li>
  );
}

export default TeacherStudentItem;
