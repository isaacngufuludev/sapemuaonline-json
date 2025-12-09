function AuthSideBar({ children }) {
  return (
    <aside className="row-span-full overflow-auto border border-l-[0.1px] dark:border-gray-700 border-stone-100">
      {children}
    </aside>
  );
}

export default AuthSideBar;
