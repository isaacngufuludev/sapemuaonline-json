import { useState, createContext, useContext } from "react";
import BtnEdit from "../../../../components/ui/BtnEdit";
import AdminButton from "../AdminButton";
import AdminDashboardCards from "./AdminDashboardCards";
import AdminDashboardTable from "./AdminDashboardTable";
import ChartUsersGrowth from "./ChartUsersGrowth";
import ChartUsersRole from "./ChartUsersRole";
import { useExportPDF } from "../../../../hooks/useExportPDF";

const PDFExportContext = createContext();

export const usePDFExport = () => useContext(PDFExportContext);

function AdminDashboardLayout() {
  const [isExporting, setIsExporting] = useState(false);
  const { exportToPDF } = useExportPDF();

  const handleExportPDF = async () => {
    setIsExporting(true);
    // Aguardar o React re-renderizar com isExporting=true
    await new Promise((resolve) => setTimeout(resolve, 300));
    try {
      await exportToPDF("admin-dashboard-content", "Relatorio_Dashboard");
    } catch (error) {
      console.error("Erro ao exportar PDF:", error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <PDFExportContext.Provider value={{ isExporting }}>
      <div className="">
        <div className="flex justify-end mb-4">
          <AdminButton
            type="primary"
            onClick={handleExportPDF}
            disabled={isExporting}
          >
            {isExporting ? "Gerando PDF..." : "📥 Gerar PDF"}
          </AdminButton>
        </div>
        <div id="admin-dashboard-content">
          <AdminDashboardCards />
          <div className="grid grid-cols-[3fr_1.3fr] gap-3 mb-10">
            <ChartUsersGrowth />
            <ChartUsersRole />
          </div>
          <AdminDashboardTable />
        </div>
      </div>
    </PDFExportContext.Provider>
  );
}

export default AdminDashboardLayout;
