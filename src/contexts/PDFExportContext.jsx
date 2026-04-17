import { createContext, useContext, useState } from "react";
import { useExportPDF } from "../hooks/useExportPDF";

const PDFExportContext = createContext();

export function PDFExportProvider({ children }) {
  const [isExporting, setIsExporting] = useState(false);
  const { exportToPDF } = useExportPDF();
  return (
    <PDFExportContext.Provider
      value={{ isExporting, setIsExporting, exportToPDF }}
    >
      {children}
    </PDFExportContext.Provider>
  );
}

export const usePDFExport = () => {
  const context = useContext(PDFExportContext);
  if (!context) {
    throw new Error("usePDFExport deve ser usado dentro de PDFExportProvider");
  }
  return context;
};
