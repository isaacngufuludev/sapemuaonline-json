import { useState } from "react";
import { NavLink } from "react-router-dom";
import ToggleDarkMode from "./ToggleDarkMode";

function Links() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  const activeClass = ({ isActive }) => (isActive ? "underline" : "");

  return (
    <nav>
      {/* Desktop links */}
      <ul className="hidden md:flex items-center text-sm gap-9 font-semibold">
        <li>
          <NavLink className={activeClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={activeClass} to="/sobre">
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink className={activeClass} to="/gallery">
            Galeria
          </NavLink>
        </li>
        <li className="bg-blue-700 text-white px-4 py-1 rounded-full">
          <NavLink className={({ isActive }) => (isActive ? "text-white" : "text-white/90")} to="/login">
            Login
          </NavLink>
        </li>
        <ToggleDarkMode />
      </ul>

      {/* Mobile toggle button */}
      <div className="md:hidden flex items-center">
        <button
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
          className="p-2 rounded-md"
        >
          {/* simple hamburger icon */}
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile slide-over menu */}
      {open && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={close} />
          <aside className="absolute right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 p-6 shadow-lg transform transition-transform">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Menu</h3>
              <button aria-label="Fechar menu" onClick={close} className="p-2 rounded-md">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col gap-4 text-base">
              <li>
                <NavLink onClick={close} className={activeClass} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={close} className={activeClass} to="/sobre">
                  Sobre
                </NavLink>
              </li>
              <li>
                <NavLink onClick={close} className={activeClass} to="/gallery">
                  Galeria
                </NavLink>
              </li>
              <li>
                <NavLink onClick={close} className={activeClass} to="/login">
                  <span className="inline-block bg-blue-700 text-white px-4 py-1 rounded-full">Login</span>
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
