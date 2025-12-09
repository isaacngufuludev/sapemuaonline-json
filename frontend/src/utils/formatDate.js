export function formateDate(dateStr) {
  return new Intl.DateTimeFormat("pt", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(dateStr);
}
