import { HiOutlineFilter } from "react-icons/hi";

function SelectSearch() {
  return (
    <div className="flex items-center gap-1 border border-slate-200  dark:border-gray-700 p-1 rounded-md">
      <p className="border-r dark:border-gray-700 pr-1 border-slate-200 ">
        <HiOutlineFilter />
      </p>
      <select className="focus:outline-none text-sm dark:bg-gray-800">
        <option>Ordenar</option>
        <option value="crescente">Nome (A-Z)</option>
        <option value="decrescente">Nome (Z-A)</option>
      </select>
    </div>
  );
}

export default SelectSearch;
