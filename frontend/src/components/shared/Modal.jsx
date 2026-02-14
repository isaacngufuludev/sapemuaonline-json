function Modal({ children }) {
  return (
    <div className="w-96 dark:bg-gray-800 bg-white p-4 rounded-md z-20 absolute left-[40%] top-[30%] ">
      {children}
    </div>
  );
}

export default Modal;
