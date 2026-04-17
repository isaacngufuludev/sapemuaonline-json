import AppRoutes from "./routes/AppRoutes";
import { PDFExportProvider } from "./contexts/PDFExportContext";
function App() {
  return (
    <div className="font-roboto">
      <PDFExportProvider>
        <AppRoutes />
      </PDFExportProvider>
    </div>
  );
}
export default App;
