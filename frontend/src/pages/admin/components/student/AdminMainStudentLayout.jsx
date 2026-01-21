import { HiOutlinePlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import Title3 from "../../../../components/ui/Title3";
import AdminButton from "../AdminButton";
import AdminSearch from "./AdminSearchStudent";
import AdminStudentTitle from "./AdminStudentTitle";
import AdminStudentList from "./AdminStudentList";
import AdminHeading from "../AdminHeading";
import AdminStudentDetail from "./AdminStudentDetail";

function AdminMainStudentLayout() {
  const navigate = useNavigate();

  return (
    <div>
      <AdminHeading>
        <Title3>Estudantes</Title3>
        <AdminButton
          type="primary"
          onClick={() => navigate("/area/admin/adminStudents/add-student")}
        >
          <p>
            <HiOutlinePlus />
          </p>
          <p>Estudante</p>
        </AdminButton>
      </AdminHeading>
      <div className="rounded-md ">
        <AdminSearch />
        <AdminStudentTitle />
        <AdminStudentList />
      </div>

      {/* <AdminStudentDetail /> */}
    </div>
  );
}

export default AdminMainStudentLayout;
