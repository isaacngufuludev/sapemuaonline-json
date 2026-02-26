import { useState, createContext, useContext } from "react";
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
      <div className="mx-auto w-full max-w-screen-2xl px-2 sm:px-6 lg:px-8">
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
          <div className="mb-10 grid grid-cols-1 gap-6 xl:grid-cols-[3fr_1.7fr]">
            <div className="min-w-0 w-full overflow-x-auto">
              <ChartUsersGrowth />
            </div>
            <div className="min-w-0 w-full overflow-x-auto">
              <ChartUsersRole />
            </div>
          </div>
          <AdminDashboardTable />
        </div>
      </div>
    </PDFExportContext.Provider>
  );
}

export default AdminDashboardLayout;
