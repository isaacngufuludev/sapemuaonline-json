import { NavLink } from "react-router-dom";

function AdminParentLinks({ item }) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-blue-700 px-4 py-1 dark:bg-gray-900 rounded-sm text-white"
            : "px-4 py-1 rounded-sm text-whitw"
        }
        to={item.to}
      >
        {item.name}
      </NavLink>
    </li>
  );
}

export default AdminParentLinks;
