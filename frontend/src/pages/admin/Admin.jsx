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
import { FiUser } from "react-icons/fi";

import AuthHeader from "../../components/layout/AuthHeader";
import AuthMain from "../../components/layout/AuthMain";
import AuthNav from "../../components/layout/AuthNav";
import AuthSideBar from "../../components/layout/AuthSideBar";
import Logo from "../../components/shared/Logo";
import ToggleDarkMode from "../../components/shared/ToggleDarkMode";
import AuthLayout from "../../components/layout/AuthLayout";
import AdminLinks from "./components/AdminLinks";
import LogoutBtn from "../../components/shared/LogoutBtn";
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
  {
    name: "Configurações",
    icon: <HiOutlineCog />,
    link: "AdminConfigs",
  },
];

function Admin() {
  const { isLogoutModal } = useModal();

  return (
    <AuthLayout>
      <AuthSideBar>
        <div className="pl-4 flex items-center">
          <Logo />
        </div>
        <AuthNav>
          <ul className="flex flex-col ">
            {links.map((item, i) => (
              <AdminLinks item={item} key={i} />
            ))}
          </ul>
        </AuthNav>
      </AuthSideBar>
      <AuthHeader>
        <div>
          <p>Bem Vindo de volta, Isaac</p>
        </div>
        <div className="flex items-center gap-4">
          <ToggleDarkMode />
          <div>
            <div className="flex items-center gap-3 ">
              <div className="text-2xl bg-blue-200 p-3 rounded-full dark:bg-gray-900 ">
                <FiUser />
              </div>
              <div>
                <p className="leading-3 font-semibold">Isaac Ngufulu</p>
                <p className="text-xs">Administrador</p>
              </div>
            </div>
          </div>
          <LogoutBtn />
        </div>
      </AuthHeader>
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
