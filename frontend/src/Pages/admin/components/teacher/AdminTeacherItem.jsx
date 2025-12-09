import { HiOutlineTrash } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";

import AdminBtnEdit from "../AdminBtnEdit";

function AdminTeacherItem({ item }) {
  return (
    <li className="grid grid-cols-[1.8fr_1fr_1fr_1fr_1fr_0.5fr_0.3fr] items-center dark:border-gray-700 border-b border-gray-100 px-4 py-2">
      <p>{item.name}</p>
      <p>{item.id}</p>
      <p>{item.qualification}</p>
      <p>{item.telefone}</p>
      <p>{item.genero}</p>
      <p>{item.idade}</p>
      <div className="flex gap-1 items-center">
        <AdminBtnEdit type="delete">
          <HiOutlineTrash />
        </AdminBtnEdit>
        <AdminBtnEdit type="edit">
          <BsPencilSquare />
        </AdminBtnEdit>
      </div>
    </li>
  );
}

export default AdminTeacherItem;
