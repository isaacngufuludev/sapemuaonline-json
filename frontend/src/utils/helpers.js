export function formateDate(dateStr, type = "long") {
  return new Intl.DateTimeFormat("pt", {
    day: "numeric",
    month: type,
    year: "numeric",
  }).format(dateStr);
}

export function calcAge(year) {
  const birthYear = new Date(year).getFullYear();
  return Number(new Date().getFullYear()) - Number(birthYear);
}
