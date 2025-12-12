import { HiOutlineTrash } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";

import BtnEdit from "../../../../components/ui/BtnEdit";

function AdminTeacherItem({ item, i }) {
  return (
    <li className="grid grid-cols-[0.3fr_1.5fr_0.7fr_0.7fr_0.7fr_0.5fr_0.3fr_0.3fr] items-center dark:border-gray-700 border-b border-slate-200  px-4 py-2">
      <p className="font-semibold rounded-full w-2/4 flex items-center justify-center py-2 px-4 bg-slate-100  dark:bg-gray-900">
        {i + 1}
      </p>
      <div>
        <p className="font-semibold"> {item.name}</p>
        <p className="text-xs">{item.email}</p>
      </div>
      <p>{item.id}</p>
      <div>
        <p className="font-semibold">{item.qualification}</p>
        <p className="text-xs">{item.formation}</p>
      </div>
      <p>{item.telefone}</p>
      <p>{item.genero}</p>
      <p>{item.idade}</p>
      <div className="flex gap-1 items-center">
        <BtnEdit type="delete">
          <HiOutlineTrash />
        </BtnEdit>
        <BtnEdit type="edit">
          <BsPencilSquare />
        </BtnEdit>
      </div>
    </li>
  );
}

export default AdminTeacherItem;
