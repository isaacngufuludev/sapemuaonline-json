import { NavLink } from "react-router-dom";

function AdminTurmasLinksItem({ item }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-1 rounded-md border border-gray-700 bg-blue-700 px-3 py-1 text-xs text-white dark:bg-blue-700 sm:px-4 sm:text-sm"
            : "flex items-center gap-1 rounded-md bg-white px-3 py-1 text-xs dark:bg-gray-800 sm:px-4 sm:text-sm"
        }
        to={item.to}
      >
        <p>{item.icon}</p>
        <p>{item.link}</p>
      </NavLink>
    </li>
  );
}

export default AdminTurmasLinksItem;
