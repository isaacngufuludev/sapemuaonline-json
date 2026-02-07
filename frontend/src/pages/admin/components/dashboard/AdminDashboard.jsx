import AdminDashboardLayout from "./AdminDashboardLayout";
import { useAuth } from "../../../../contexts/AuthContext";

function AdminDashboard() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      <AdminDashboardLayout />
    </div>
  );
}

export default AdminDashboard;
