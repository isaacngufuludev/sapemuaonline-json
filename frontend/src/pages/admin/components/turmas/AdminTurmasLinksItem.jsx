import { NavLink } from "react-router-dom";

function AdminTurmasLinksItem({ item }) {
  return (
    <li className=" ">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-blue-700 px-4 py-1 dark:bg-blue-700 rounded-md text-white flex items-center gap-1 border dark:border-gray-700"
            : "px-4 py-1 rounded-md bg-white dark:bg-gray-800 flex items-center gap-1"
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
