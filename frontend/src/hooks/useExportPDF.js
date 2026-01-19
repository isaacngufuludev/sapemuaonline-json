import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const useExportPDF = () => {
  const exportToPDF = async (elementId, fileName = "relatorio") => {
    try {
      const element = document.getElementById(elementId);

      if (!element) {
        console.error(`Elemento com ID "${elementId}" não encontrado`);
        return;
      }

      // Aguardar a re-renderização do React
      await new Promise(resolve => setTimeout(resolve, 500));

      // Capturar o elemento como imagem
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        allowTaint: true,
      });

      // Calcular dimensões
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Calcular proporções
      const imgWidth = pageWidth - 10;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 5;

      // Adicionar imagem ao PDF (pode ocupar várias páginas)
      pdf.addImage(imgData, "PNG", 5, position, imgWidth, imgHeight);
      heightLeft -= pageHeight - 10;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 5, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Download do PDF
      pdf.save(
        `${fileName}_${new Date().toLocaleDateString().replace(/\//g, "-")}.pdf`
      );
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
    }
  };

  return { exportToPDF };
};
