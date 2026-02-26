import { NavLink } from "react-router-dom";
import { useAuthSidebar } from "../../../context/AuthSidebarContext";

function AdminLinks({ item }) {
  const { isSidebarOpen } = useAuthSidebar();

  return (
    <li className="hover:bg-blue-200 duration-300 hover:dark:bg-gray-900 ">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `bg-blue-200 px-3 py-[10px] dark:bg-gray-900 flex items-center text-sm transition-all duration-300 ${
                isSidebarOpen ? "gap-1" : "justify-center"
              }`
            : `px-3 py-[10px] flex items-center text-sm transition-all duration-300 ${
                isSidebarOpen ? "gap-1" : "justify-center"
              }`
        }
        to={item.link}
      >
        <span className={`${isSidebarOpen ? "text-xl" : "text-2xl"} `}>
          {item.icon}
        </span>
        <span
          className={`whitespace-nowrap transition-all duration-300 ${
            isSidebarOpen
              ? "w-auto opacity-100"
              : "w-0 overflow-hidden opacity-0"
          }`}
        >
          {item.name}
        </span>
      </NavLink>
    </li>
  );
}

export default AdminLinks;
