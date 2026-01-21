export function formateDate(dateStr) {
  return new Intl.DateTimeFormat("pt", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(dateStr);
}
