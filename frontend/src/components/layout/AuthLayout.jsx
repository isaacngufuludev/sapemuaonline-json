function AuthLayout({ children }) {
  return (
    <div className="grid grid-cols-[230px_1fr] grid-rows-[65px_1fr] h-[100dvh]  dark:bg-gray-800 ">
      {children}
    </div>
  );
}

export default AuthLayout;
