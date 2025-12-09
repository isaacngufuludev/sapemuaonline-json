import Links from "../shared/Links";
import Logo from "../shared/Logo";

function Header() {
  return (
    <header className=" dark:bg-gray-900 z-10 w-full fixed h-16 flex justify-between px-8 items-center shadow-md bg-white">
      <Logo />
      <Links />
    </header>
  );
}

export default Header;
