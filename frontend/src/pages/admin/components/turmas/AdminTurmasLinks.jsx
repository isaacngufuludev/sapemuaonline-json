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
    <ul className="flex items-center gap-4 mb-4">
      {links.map((item) => (
        <AdminTurmasLinksItem item={item} key={item.link} />
      ))}
    </ul>
  );
}

export default AdminTurmasLinks;
