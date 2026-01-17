import Links from "../shared/Links";
import Logo from "../shared/Logo";

function Header() {
  return (
    <header className="dark:bg-gray-900 z-20 w-full fixed h-16 flex justify-between px-3 md:px-6 xl:px-14 items-center shadow-md bg-white">
      <Logo />
      <Links />
    </header>
  );
}

export default Header;
