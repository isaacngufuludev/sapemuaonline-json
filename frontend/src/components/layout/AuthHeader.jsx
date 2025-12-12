function AuthHeader({ children }) {
  return (
    <header className="text-sm px-4 border-b-[0.1px] dark:border-gray-700 border-slate-200  flex gap-4 items-center justify-between ">
      {children}
    </header>
  );
}

export default AuthHeader;
