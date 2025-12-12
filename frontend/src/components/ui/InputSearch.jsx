import { HiOutlineSearch } from "react-icons/hi";

function InputSearch({ placeholder }) {
  return (
    <div className="flex items-center gap-1 border dark:border-gray-700 border-slate-200  p-1 rounded-md">
      <p className="border-r pr-1 dark:border-gray-700 border-slate-200  ">
        <HiOutlineSearch />
      </p>
      <input
        type="text"
        placeholder={placeholder}
        className="focus:outline-none text-sm  dark:bg-gray-800"
      />
    </div>
  );
}

export default InputSearch;
