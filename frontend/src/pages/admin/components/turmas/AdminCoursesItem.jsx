import { HiOutlineTrash } from "react-icons/hi";
import BtnEdit from "../../../../components/ui/BtnEdit";
import Title4 from "../../../../components/ui/Title4";
import AdminAddHeader from "../AdminAddHeader";
import { useModal } from "../../../../contexts/ModalContext";

function AdminCoursesItem({ item }) {
  const { toggleCourse } = useModal();

  return (
    <li>
      <AdminAddHeader type="turma">
        <Title4>{item.courseName}</Title4>
        <BtnEdit type="delete" onClick={toggleCourse}>
          <HiOutlineTrash />
        </BtnEdit>
      </AdminAddHeader>
    </li>
  );
}

export default AdminCoursesItem;
