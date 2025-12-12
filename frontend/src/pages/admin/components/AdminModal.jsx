function AdminModal({ children }) {
  return (
    <div className="max-w-96 dark:bg-gray-800 bg-white p-4 rounded-md z-20 absolute left-[38%] top-[30%] ">
      {children}
    </div>
  );
}

export default AdminModal;
