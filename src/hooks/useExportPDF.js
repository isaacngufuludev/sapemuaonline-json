import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const INSTITUTION_NAME = "Instituto Politécnico Privado Sapemua";
const LOGO_PATH = "/imgs/logo.png";
const PDF_DESKTOP_WIDTH = 1280;

function getReportDateLabel(date = new Date()) {
  return `Relatório do dia ${date.toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })}`;
}

function loadImageAsDataUrl(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;

      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0);

      resolve(canvas.toDataURL("image/png"));
    };
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

export const useExportPDF = () => {
  const exportToPDF = async (
    elementId,
    fileName = "relatorio",
    options = {},
  ) => {
    try {
      const {
        includeInstitutionHeader = false,
        reportTitle = getReportDateLabel(),
        institutionName = INSTITUTION_NAME,
        forceDesktopLayout = true,
        desktopWidth = PDF_DESKTOP_WIDTH,
      } = options;
      const element = document.getElementById(elementId);

      if (!element) {
        console.error(`Elemento com ID "${elementId}" não encontrado`);
        return;
      }

      // Aguardar a re-renderização do React
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Capturar o elemento como imagem
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        allowTaint: true,
        windowWidth: forceDesktopLayout ? desktopWidth : window.innerWidth,
        windowHeight: Math.max(
          document.documentElement.scrollHeight,
          element.scrollHeight,
          window.innerHeight,
        ),
        onclone: (clonedDocument) => {
          clonedDocument.documentElement.classList.remove("dark");
          clonedDocument.body.classList.remove("dark");
          clonedDocument.body.style.backgroundColor = "#ffffff";
          clonedDocument.body.style.color = "#111827";

          const clonedElement = clonedDocument.getElementById(elementId);
          if (clonedElement) {
            clonedElement.style.backgroundColor = "#ffffff";
            clonedElement.style.color = "#111827";

            if (forceDesktopLayout) {
              clonedDocument.documentElement.style.width = `${desktopWidth}px`;
              clonedDocument.body.style.width = `${desktopWidth}px`;
              clonedElement.style.width = `${desktopWidth}px`;
              clonedElement.style.maxWidth = "none";
              clonedElement.style.minWidth = `${desktopWidth}px`;
            }
          }
        },
      });

      // Calcular dimensões
      const imgData = canvas.toDataURL("image/png");
      const logoData = includeInstitutionHeader
        ? await loadImageAsDataUrl(LOGO_PATH)
        : null;
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const headerHeight = includeInstitutionHeader ? 33 : 0;
      const contentTop = margin + headerHeight;
      const contentBottom = margin;
      const contentHeight = pageHeight - contentTop - contentBottom;

      const addInstitutionHeader = () => {
        if (!includeInstitutionHeader) return;

        pdf.setFillColor(255, 255, 255);
        pdf.rect(0, 0, pageWidth, contentTop - 3, "F");

        if (logoData) {
          pdf.addImage(logoData, "PNG", margin, 8, 18, 18);
        }

        pdf.setTextColor(17, 24, 39);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(13);
        pdf.text(institutionName, logoData ? 33 : margin, 14);

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(11);
        pdf.text(reportTitle, logoData ? 33 : margin, 21);

        pdf.setDrawColor(226, 232, 240);
        pdf.line(margin, contentTop - 6, pageWidth - margin, contentTop - 6);
      };

      // Calcular proporções
      const imgWidth = pageWidth - margin * 2;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = contentTop;

      // Adicionar imagem ao PDF (pode ocupar várias páginas)
      addInstitutionHeader();
      pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
      heightLeft -= contentHeight;

      while (heightLeft > 0) {
        pdf.addPage();
        addInstitutionHeader();
        position = contentTop + heightLeft - imgHeight;
        pdf.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
        heightLeft -= contentHeight;
      }

      // Download do PDF
      pdf.save(
        `${fileName}_${new Date().toLocaleDateString().replace(/\//g, "-")}.pdf`,
      );
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
    }
  };

  return { exportToPDF };
};
