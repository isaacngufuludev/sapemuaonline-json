function SearchBox({ children }) {
  return (
    <div className="bg-white flex flex-col items-stretch gap-2 overflow-visible p-3 rounded-md dark:bg-gray-800 sm:flex-row sm:items-center mb-5 lg:mb-0 sm:justify-between">
      {children}
    </div>
  );
}

export default SearchBox;
