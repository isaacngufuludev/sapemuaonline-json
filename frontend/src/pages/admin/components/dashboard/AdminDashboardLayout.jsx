import BtnEdit from "../../../../components/ui/BtnEdit";
import AdminButton from "../AdminButton";
import AdminDashboardCards from "./AdminDashboardCards";
import AdminDashboardTable from "./AdminDashboardTable";
import ChartUsersGrowth from "./ChartUsersGrowth";
import ChartUsersRole from "./ChartUsersRole";
function AdminDashboardLayout() {
  return (
    <div className="">
      <AdminDashboardCards />
      <div className="grid grid-cols-[3fr_1fr] gap-3 mb-10">
        <ChartUsersGrowth />
        <ChartUsersRole />
      </div>
      <AdminDashboardTable />
      <div className="flex">
        <AdminButton type="primary">Gerar Relatório</AdminButton>
      </div>
    </div>
  );
}

export default AdminDashboardLayout;
