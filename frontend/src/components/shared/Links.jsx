import { NavLink } from "react-router-dom";
import ToggleDarkMode from "./ToggleDarkMode";

function Links() {
  return (
    <nav>
      <ul className="flex items-center text-sm gap-9 font-semibold">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Sobre">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/ChatBoot">Chat</NavLink>
        </li>
        <li className="bg-blue-700 text-white px-4 py-1 rounded-full">
          <NavLink
            className={(isActive) => (isActive ? "text-white" : "")}
            to="/Login"
          >
            Login
          </NavLink>
        </li>
        <ToggleDarkMode />
      </ul>
    </nav>
  );
}

export default Links;
