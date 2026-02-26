import { HiOutlineFilter } from "react-icons/hi";

const defaultOptions = [
  { value: "", label: "Ordenar" },
  { value: "name-asc", label: "Nome (A-Z)" },
  { value: "name-desc", label: "Nome (Z-A)" },
];

function SelectSearch({
  value = "",
  onChange,
  options = defaultOptions,
  name = "sort",
  id = "sort",
}) {
  return (
    <div className="relative z-20 flex w-full items-center gap-1 rounded-md border border-slate-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-800 sm:w-auto">
      <p className="border-r dark:border-gray-700 pr-1 border-slate-200 ">
        <HiOutlineFilter />
      </p>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="relative z-20 w-full bg-white text-sm text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-100 sm:w-auto"
      >
        {options.map((option) => (
          <option key={option.value || option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectSearch;
