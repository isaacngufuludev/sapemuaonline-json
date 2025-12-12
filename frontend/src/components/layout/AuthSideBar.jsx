function AuthSideBar({ children }) {
  return (
    <aside className="row-span-full overflow-auto border border-l-[0.1px] dark:border-gray-700 border-slate-200 ">
      {children}
    </aside>
  );
}

export default AuthSideBar;
