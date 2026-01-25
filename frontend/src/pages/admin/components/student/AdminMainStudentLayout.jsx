import { HiOutlinePlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import Title3 from "../../../../components/ui/Title3";
import AdminButton from "../AdminButton";
import AdminSearch from "./AdminSearchStudent";
import AdminStudentTitle from "./AdminStudentTitle";
import AdminStudentList from "./AdminStudentList";
import AdminHeading from "../AdminHeading";
import { useStudents } from "../../../../hooks/useStudents";
import Message from "../../../../components/ui/Message";
import Loading from "../../../../components/shared/Loading";

function AdminMainStudentLayout() {
  const navigate = useNavigate();
  const { students } = useStudents();

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
      {students.length > 0 ? (
        <div className="rounded-md ">
          <AdminSearch />
          <AdminStudentTitle />
          <AdminStudentList />
        </div>
      ) : (
        ""
      )}

      <div className="mt-20">
        {!students.length ? (
          <Message message="Adicione o primeiro estudante a plataforma clicando no botão acima" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AdminMainStudentLayout;
