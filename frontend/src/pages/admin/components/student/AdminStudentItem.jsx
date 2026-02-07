// import { HiOutlineTrashm } from "react-icons/hi";
import { HiEllipsisVertical } from "react-icons/hi2";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useEditOptions } from "../../../../hooks/useEditOptions";
import { useModal } from "../../../../contexts/ModalContext";
import { useClasses } from "../../../../hooks/useClasses";
import { useCourses } from "../../../../hooks/useCourses";

function AdminStudentItem({ item }) {
  const { showMenu, menuRef, setShowMenu } = useEditOptions();
  const { toggleRemoveStudent, selectOptionItem } = useModal();
  const { classes } = useClasses();
  const { courses } = useCourses();
  const studentClass = classes.find((c) => c.id === item.classId);
  const studentCourse = courses.find((course) => course.id === item.courseId);
  console.log(studentClass, studentCourse);
  const navigate = useNavigate();

  const handleView = () => {
    console.log("Ver estudante:", item);
    navigate("/area/admin/adminStudents/student-detail");
    setShowMenu(false);
  };

  const handleEdit = () => {
    console.log("Editar estudante:", item);
    navigate("/area/admin/adminStudents/add-student");
    setShowMenu(false);
  };

  function handleDelete() {
    selectOptionItem(item);
    toggleRemoveStudent();
    setShowMenu(false);
  }

  return (
    <li className="grid grid-cols-[0.3fr_1.5fr_0.7fr_0.7fr_0.7fr_0.5fr_0.5fr_0.2fr] last:border-0 items-center dark:border-gray-700 border-b border-slate-200 px-4 py-2">
      <div className="font-semibold flex items-center justify-start ">
        <p className="py-3 px-4 rounded-full bg-slate-100  dark:bg-gray-900">
          {item.name[0]?.toUpperCase()}
        </p>
      </div>
      <p>{item.name}</p>
      <p>{item.id}</p>
      <p>{studentClass?.classYear}</p>
      <p>{studentCourse?.courseName}</p>
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

export default AdminStudentItem;
