export function formateDate(dateStr, type = "long") {
  const date = new Date(dateStr);

  if (Number.isNaN(date.getTime())) {
    return dateStr;
  }

  if (type === "relative") {
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    if (diffInMinutes < 1) return "agora";
    if (diffInMinutes < 60) return `${diffInMinutes}min`;
    if (diffInHours < 24) return `${diffInHours}h`;

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const messageDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );

    if (messageDay.getTime() === today.getTime()) return "hoje";
    if (messageDay.getTime() === yesterday.getTime()) return "ontem";

    if (date.getFullYear() === now.getFullYear()) {
      return new Intl.DateTimeFormat("pt", {
        day: "numeric",
        month: "short",
      }).format(date);
    }

    return new Intl.DateTimeFormat("pt", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  }

  return new Intl.DateTimeFormat("pt", {
    day: "numeric",
    month: type,
    year: "numeric",
  }).format(date);
}

export function calcAge(year) {
  const birthYear = new Date(year).getFullYear();
  return Number(new Date().getFullYear()) - Number(birthYear);
}
