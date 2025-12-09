import Title3 from "../../../../components/ui/Title3";

import { HiOutlineTrash } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";
import AdminBtnEdit from "../AdminBtnEdit";

function AdminNewsItem({ item }) {
  return (
    <li className="flex flex-col gap-2 justify-between p-3 dark:border-gray-700 rounded-md duration-300 border border-gray-200">
      <div className="flex items-center justify-between">
        <Title3>{item.titulo}</Title3>
        <p className="text-xs font-medium text-gray=700">{item.date}</p>
      </div>
      <p className="text-sm  leading-6">{item.conteudo}</p>
      <div className="flex gap-1 justify-end">
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

export default AdminNewsItem;
