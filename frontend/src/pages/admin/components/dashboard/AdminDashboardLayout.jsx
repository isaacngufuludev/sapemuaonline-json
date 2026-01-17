import AdminDashboardCards from "./AdminDashboardCards";
import AdminDashboardStudentGrowth from "./AdminDashboardStudentGrowth";

function AdminDashboardLayout() {
  return (
    <div className="">
      <AdminDashboardCards />
      <div className="mt-6">
        <AdminDashboardStudentGrowth />
      </div>
    </div>
  );
}

export default AdminDashboardLayout;
