import { HiOutlineSearch } from "react-icons/hi";

function InputSearch({
  placeholder,
  onChange,
  name = "search",
  id = "search",
}) {
  return (
    <div className="flex w-full items-center gap-1 rounded-md border border-slate-200 p-1 dark:border-gray-700 sm:w-auto">
      <p className="border-r pr-1 dark:border-gray-700 border-slate-200  ">
        <HiOutlineSearch />
      </p>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full focus:outline-none text-sm dark:bg-gray-800 sm:w-auto"
      />
    </div>
  );
}

export default InputSearch;
