import { useMemo, useState } from "react";
import AdminTeacherTitle from "./AdminTeacherTitle";
import AdminSearchTeacher from "./AdminSearchTeacher";
import AdminTeacherList from "./AdminTeacherList";
import AdminTeacherHeading from "./AdminTeacherHeading";
import { useTeachers } from "../../../../hooks/useTeachers";
import Message from "../../../../components/ui/Message";

function AdminMainTeacherLayout() {
  const { teachers } = useTeachers();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredTeachers = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    const filtered = teachers.filter((teacher) => {
      if (!normalizedSearch) return true;
      return (
        teacher.name?.toLowerCase().includes(normalizedSearch) ||
        teacher.id?.toLowerCase().includes(normalizedSearch) ||
        teacher.email?.toLowerCase().includes(normalizedSearch)
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
  }, [teachers, searchTerm, sortBy]);

  return (
    <div>
      <div>
        <AdminTeacherHeading />
        {teachers.length > 0 && (
          <div className="rounded-md ">
            <AdminSearchTeacher
              searchTerm={searchTerm}
              sortBy={sortBy}
              onSearchChange={(e) => setSearchTerm(e.target.value)}
              onSortChange={(e) => setSortBy(e.target.value)}
            />
            <AdminTeacherTitle />
            <AdminTeacherList teachers={filteredTeachers} />
          </div>
        )}

        <div className="mt-20">
          {!teachers.length && (
            <Message message="Adicione o Primeiro Professor a Plataforma clicando no botão acima" />
          )}
        </div>
      </div>
    </div>
  );
}
export default AdminMainTeacherLayout;
