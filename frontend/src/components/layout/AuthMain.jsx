function AuthMain({ children }) {
  return (
    <main className="overflow-auto bg-slate-100  dark:bg-gray-900 p-10">
      {children}
    </main>
  );
}

export default AuthMain;
