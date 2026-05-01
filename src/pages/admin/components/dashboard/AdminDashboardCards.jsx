import AdminDashboardCardItem from "./AdminDashboardCardItem";
import {
  HiOutlineAcademicCap,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from "react-icons/hi";
import { useStudents } from "../../../../hooks/useStudents";
import { useTeachers } from "../../../../hooks/useTeachers";
import { useCourses } from "../../../../hooks/useCourses";
import { useTurmas } from "../../../../hooks/useTurmas";
import { useNews } from "../../../../hooks/useNews";

function AdminDashboardCards() {
  const { students } = useStudents();
  const { teachers } = useTeachers();
  const { courses } = useCourses();
  const { turmas } = useTurmas();
  const { news } = useNews();

  const cards = [
    {
      title: "Total de Estudantes",
      value: students.length,
      icon: <HiOutlineUserGroup />,
    },
    {
      title: "Total de Professores",
      value: teachers.length,
      icon: <HiOutlineUsers />,
    },
    {
      title: "Total de Cursos",
      value: courses.length,
      icon: <HiOutlineAcademicCap />,
    },
    {
      title: "Total de Turmas",
      value: turmas.length,
      icon: <HiOutlineHome />,
    },
    {
      title: "Total de Noticias",
      value: news.length,
      icon: <HiOutlineNewspaper />,
    },
  ];

  return (
    <ul className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {cards.map((item) => (
        <AdminDashboardCardItem key={item.title} item={item} />
      ))}
    </ul>
  );
}

export default AdminDashboardCards;
