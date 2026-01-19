import AdminDashboardCardItem from "./AdminDashboardCardItem";
import {
  HiOutlineAcademicCap,
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlineUserGroup,
  HiOutlineUsers,
} from "react-icons/hi";

const cards = [
  {
    title: "Total de Estudantes",
    value: 1200,
    icon: <HiOutlineUserGroup />,
  },
  {
    title: "Total de Professores",
    value: 40,
    icon: <HiOutlineUsers />,
  },
  {
    title: "Total de Cursos",
    value: 4,
    icon: <HiOutlineAcademicCap />,
  },
  {
    title: "Total de Turmas",
    value: 20,
    icon: <HiOutlineHome />,
  },
  {
    title: "Total de Noticias",
    value: 3,
    icon: <HiOutlineNewspaper />,
  },
];

function AdminDashboardCards() {
  return (
    <ul className="grid grid-cols-5 gap-4 mb-6">
      {cards.map((item) => (
        <AdminDashboardCardItem key={item.title} item={item} />
      ))}
    </ul>
  );
}

export default AdminDashboardCards;
