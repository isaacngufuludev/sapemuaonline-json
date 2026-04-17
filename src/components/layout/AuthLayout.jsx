function AuthLayout({ children }) {
  return (
    <div className="grid h-[100dvh] grid-cols-1 grid-rows-[65px_1fr] dark:bg-gray-800 md:grid-cols-[auto_1fr]">
      {children}
    </div>
  );
}

export default AuthLayout;
