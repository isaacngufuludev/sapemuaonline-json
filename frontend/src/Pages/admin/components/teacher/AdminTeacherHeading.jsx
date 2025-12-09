import { HiOutlinePlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import Title3 from "../../../../components/ui/Title3";
import AdminButton from "../AdminButton";
import AdminHeading from "../AdminHeading";

function AdminTeacherHeading() {
  const navigate = useNavigate();

  return (
    <AdminHeading>
      <Title3>Professores</Title3>
      <AdminButton
        type="primary"
        onClick={() => navigate("/area/admin/adminTeacher/add-teacher")}
      >
        <p>
          <HiOutlinePlus />
        </p>
        <p>Professor</p>
      </AdminButton>
    </AdminHeading>
  );
}

export default AdminTeacherHeading;
