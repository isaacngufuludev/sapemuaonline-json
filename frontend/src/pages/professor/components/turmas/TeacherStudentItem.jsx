import BtnEdit from "../../../../components/ui/BtnEdit";
import { BsPencilSquare } from "react-icons/bs";

function TeacherStudentItem({ item, i }) {
  const media = (item.mac + item.npp + item.npt) / 3;

  return (
    <li className="items-center text-sm font-semibold p-4 border-b-[0.1px] dark:border-gray-700 border-slate-200 grid grid-cols-[0.5fr_3fr_0.7fr_0.7fr_0.7fr_0.7fr_0.3fr]">
      <p className="font-semibold rounded-full w-2/4 flex items-center justify-center py-3 px-4 bg-slate-100  dark:bg-gray-900">
        {i + 1}
      </p>
      <p>{item.name}</p>
      <p className={`${item.mac >= 10 ? "text-blue-700" : "text-red-700"}`}>
        {item.mac}
      </p>
      <p className={`${item.npp >= 10 ? "text-blue-700" : "text-red-700"}`}>
        {item.npp}
      </p>
      <p className={`${item.npt >= 10 ? "text-blue-700" : "text-red-700"}`}>
        {item.npt}
      </p>
      <p className={`${media >= 10 ? "text-blue-700" : "text-red-700"}`}>
        {media.toFixed(1)}
      </p>
      <BtnEdit type="edit">
        <BsPencilSquare />
      </BtnEdit>
    </li>
  );
}

export default TeacherStudentItem;
