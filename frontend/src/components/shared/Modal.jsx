function Modal({ children }) {
  return (
    <div className="fixed left-1/2 top-1/2 z-50 max-h-[calc(100dvh-1.5rem)] w-[calc(80vw-1.5rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-white p-4 dark:bg-gray-800 sm:max-h-[calc(100dvh-2rem)] sm:w-[calc(100vw-2rem)] sm:max-w-sm sm:p-5 lg:absolute lg:left-[40%] lg:top-[30%] lg:max-h-none md:w-80 xl:w-96 lg:max-w-none lg:-translate-x-0 lg:-translate-y-0 lg:overflow-visible">
      {children}
    </div>
  );
}

export default Modal;
