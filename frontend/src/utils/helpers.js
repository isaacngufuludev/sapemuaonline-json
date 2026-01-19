import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import html2canvas from "html2canvas";

export function formateDate(dateStr) {
  return new Intl.DateTimeFormat("pt", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(dateStr);
}
