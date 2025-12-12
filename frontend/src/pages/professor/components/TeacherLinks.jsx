import { NavLink } from "react-router-dom";

function TeacherLinks({ item }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-blue-200 px-3 py-[10px] dark:bg-gray-900 flex items-center gap-1 text-sm"
            : "px-3 py-[10px] flex items-center gap-1 text-sm"
        }
        to={item.link}
      >
        <span className="text-base">{item.icon}</span>
        <span>{item.name}</span>
      </NavLink>
    </li>
  );
}

export default TeacherLinks;
