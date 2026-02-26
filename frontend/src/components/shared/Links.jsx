import { useState } from "react";
import { NavLink } from "react-router-dom";
import ToggleDarkMode from "./ToggleDarkMode";
import { FiMenu } from "react-icons/fi";
import { BsX } from "react-icons/bs";
import Title3 from "../ui/Title3";

function Links() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="font-roboto">
      {/* Desktop links */}
      <ul className="hidden md:flex items-center text-sm md:gap-6 lg:gap-9 xl:gap-10 font-semibold">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/sobre">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Galeria</NavLink>
        </li>
        <li className="bg-blue-700 text-white px-4 py-1 rounded-full">
          <NavLink
            className={({ isActive }) => (isActive ? "text-white" : "")}
            to="/auth"
          >
            Login
          </NavLink>
        </li>
        <ToggleDarkMode />
      </ul>

      {/* Mobile toggle button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setOpen(true)}
          className="text-2xl rounded-md cursor-pointer "
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile slide-over menu */}
      {open && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={close} />
          <aside className="absolute left-0 top-0 h-full w-[70%] bg-white/90 dark:bg-gray-900 p-6 shadow-lg transform  ease-in-out duration-300 ">
            <div className="flex items-center justify-between mb-6">
              <Title3 className="font-semibold">Menu</Title3>
              <button
                onClick={close}
                className=" text-2xl rounded-md cursor-pointer "
              >
                <BsX />
              </button>
            </div>

            <ul className="flex flex-col gap-6 text-sm font-semibold">
              <li>
                <NavLink onClick={close} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={close} to="/sobre">
                  Sobre
                </NavLink>
              </li>
              <li>
                <NavLink onClick={close} to="/gallery">
                  Galeria
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                  onClick={close}
                  to="/auth/login"
                >
                  <span className="bg-blue-700 text-white px-4 py-1 rounded-full">
                    Login
                  </span>
                </NavLink>
              </li>
              <li>
                <ToggleDarkMode />
              </li>
            </ul>
          </aside>
        </div>
      )}
    </nav>
  );
}

export default Links;
