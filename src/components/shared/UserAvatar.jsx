function getFileUrl(file) {
  if (!file) return "";
  if (typeof file === "string") return file;
  return file.url || "";
}

function getInitials(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const initials = parts
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return initials.toUpperCase() || "U";
}

function UserAvatar({ user, name, photo, size = "md", className = "" }) {
  const userName = name || user?.name || "";
  const imageUrl = getFileUrl(photo || user?.photo);

  const sizes = {
    xs: "h-7 w-7 text-xs",
    sm: "h-9 w-9 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-16 w-16 text-xl",
    xl: "h-20 w-20 text-2xl",
  };

  const sizeClass = sizes[size] || sizes.md;

  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={userName || "Utilizador"}
        className={`${sizeClass} shrink-0 rounded-full border border-slate-200 object-cover dark:border-gray-700 ${className}`}
      />
    );
  }

  return (
    <span
      className={`${sizeClass} inline-flex shrink-0 items-center justify-center rounded-full bg-slate-100 font-semibold text-gray-700 dark:bg-gray-900 dark:text-white ${className}`}
    >
      {getInitials(userName)}
    </span>
  );
}

export default UserAvatar;
