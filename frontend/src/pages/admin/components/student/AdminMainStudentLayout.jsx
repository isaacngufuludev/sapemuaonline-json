import { HiOutlinePlus } from "react-icons/hi";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import Title3 from "../../../../components/ui/Title3";
import AdminButton from "../AdminButton";
import AdminSearch from "./AdminSearchStudent";
import AdminStudentTitle from "./AdminStudentTitle";
import AdminStudentList from "./AdminStudentList";
import AdminHeading from "../AdminHeading";
import { useStudents } from "../../../../hooks/useStudents";
import Message from "../../../../components/ui/Message";

function AdminMainStudentLayout() {
  const navigate = useNavigate();
  const { students } = useStudents();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredStudents = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filtered = students.filter((student) => {
      if (!normalizedSearch) return true;
      return (
        student.name?.toLowerCase().includes(normalizedSearch) ||
        student.id?.toLowerCase().includes(normalizedSearch)
      );
    });

    const sorted = [...filtered];
    if (sortBy === "name-asc") {
      sorted.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
    } else if (sortBy === "name-desc") {
      sorted.sort((a, b) => (b.name || "").localeCompare(a.name || ""));
    } else if (sortBy === "age-asc") {
      sorted.sort((a, b) => Number(a.age || 0) - Number(b.age || 0));
    } else if (sortBy === "age-desc") {
      sorted.sort((a, b) => Number(b.age || 0) - Number(a.age || 0));
    }

    return sorted;
  }, [students, searchTerm, sortBy]);

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
        <div className="rounded-md  ">
          <AdminSearch
            searchTerm={searchTerm}
            sortBy={sortBy}
            onSearchChange={(e) => setSearchTerm(e.target.value)}
            onSortChange={(e) => setSortBy(e.target.value)}
          />
          <AdminStudentTitle />
          <AdminStudentList students={filteredStudents} />
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
