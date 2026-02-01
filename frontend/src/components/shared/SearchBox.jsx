function SearchBox({ children }) {
  return (
    <div className="bg-white flex items-center justify-between p-3 rounded-md dark:bg-gray-800">
      {children}
    </div>
  );
}

export default SearchBox;
