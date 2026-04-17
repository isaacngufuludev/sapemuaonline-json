import { HiOutlineBookOpen, HiOutlineUserGroup } from "react-icons/hi";
import AdminTurmasLinksItem from "../../components/turmas/AdminTurmasLinksItem";

const links = [
  {
    icon: <HiOutlineUserGroup />,
    link: "Estudantes",
    to: "turma-students",
  },
  {
    icon: <HiOutlineBookOpen />,
    link: "Disciplinas",
    to: "turma-subjects",
  },
];

function AdminTurmasLinks() {
  return (
    <ul className="mb-4 flex flex-wrap items-center gap-2 sm:gap-4">
      {links.map((item) => (
        <AdminTurmasLinksItem item={item} key={item.link} />
      ))}
    </ul>
  );
}

export default AdminTurmasLinks;
