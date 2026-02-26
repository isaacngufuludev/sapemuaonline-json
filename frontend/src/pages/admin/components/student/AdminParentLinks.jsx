import { NavLink } from "react-router-dom";

function AdminParentLinks({ item }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "rounded-sm bg-blue-700 px-3 py-1 text-xs text-white dark:bg-blue-700 sm:px-4 sm:text-sm"
            : "rounded-sm px-3 py-1 text-xs text-gray-700 dark:text-gray-200 sm:px-4 sm:text-sm"
        }
        to={item.to}
      >
        {item.name}
      </NavLink>
    </li>
  );
}

export default AdminParentLinks;
