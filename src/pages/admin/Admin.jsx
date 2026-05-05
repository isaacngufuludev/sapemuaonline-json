import {
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiOutlineNewspaper,
  HiOutlineCog,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { Outlet } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";

import AuthHeader from "../../components/layout/AuthHeader";
import AuthMain from "../../components/layout/AuthMain";
import AuthNav from "../../components/layout/AuthNav";
import AuthSideBar from "../../components/layout/AuthSideBar";
import Logo from "../../components/shared/Logo";
import AuthLayout from "../../components/layout/AuthLayout";
import AdminLinks from "./components/AdminLinks";
import LogoutModal from "../../components/shared/LogoutModal";
import Overlay from "../../components/shared/Overlay";

const links = [
  {
    name: "Dashboard",
    icon: <HiOutlineViewGrid />,
    link: "AdminDashboard",
  },
  {
    name: "Estudantes",
    icon: <HiOutlineUserGroup />,
    link: "AdminStudents",
  },
  {
    name: "Professores",
    icon: <HiOutlineUsers />,
    link: "AdminTeacher",
  },
  {
    name: "Turmas e Séries",
    icon: <HiOutlineHome />,
    link: "AdminTurmas",
  },
  {
    name: "Noticias",
    icon: <HiOutlineNewspaper />,
    link: "AdminNews",
  },
  // {
  //   name: "Configurações",
  //   icon: <HiOutlineCog />,
  //   link: "AdminConfigs",
  // },
];

function Admin() {
  const { isLogoutModal } = useModal();

  return (
    <AuthLayout>
      <AuthSideBar>
        <div className="flex items-center">
          <Logo />
        </div>
        <AuthNav>
          <ul className="flex flex-col  ">
            {links.map((item, i) => (
              <AdminLinks item={item} key={i} />
            ))}
          </ul>
        </AuthNav>
      </AuthSideBar>
      <AuthHeader />
      <AuthMain>
        {isLogoutModal ? (
          <div>
            <LogoutModal />
            <Overlay />
          </div>
        ) : (
          ""
        )}
        <Outlet />
      </AuthMain>
    </AuthLayout>
  );
}

export default Admin;
