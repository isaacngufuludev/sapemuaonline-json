import AdminTeacherTitle from "./AdminTeacherTitle";
import AdminSearchTeacher from "./AdminSearchTeacher";
import AdminTeacherList from "./AdminTeacherList";
import AdminTeacherHeading from "./AdminTeacherHeading";

function AdminMainTeacherLayout() {
  return (
    <div>
      <AdminTeacherHeading />
      <div className="border  dark:border-gray-700 rounded-md ">
        <AdminSearchTeacher />
        <AdminTeacherTitle />
        <AdminTeacherList />
      </div>
    </div>
  );
}

export default AdminMainTeacherLayout;
