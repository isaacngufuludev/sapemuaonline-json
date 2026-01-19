import AdminTeacherTitle from "./AdminTeacherTitle";
import AdminSearchTeacher from "./AdminSearchTeacher";
import AdminTeacherList from "./AdminTeacherList";
import AdminTeacherHeading from "./AdminTeacherHeading";

function AdminMainTeacherLayout() {
  return (
    <div>
      <AdminTeacherHeading />
      <div className="rounded-md ">
        <AdminSearchTeacher />
        <AdminTeacherTitle />
        <AdminTeacherList />
      </div>
    </div>
  );
}

export default AdminMainTeacherLayout;
