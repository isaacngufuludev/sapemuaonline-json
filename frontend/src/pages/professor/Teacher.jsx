import AuthLayout from "../../components/layout/AuthLayout";
import AuthSideBar from "../../components/layout/AuthSideBar";
import AuthMain from "../../components/layout/AuthMain";
import AuthNav from "../../components/layout/AuthNav";
import AuthHeader from "../../components/layout/AuthHeader";
import LogoutBtn from "../../components/shared/LogoutBtn";
import LogoutModal from "../../components/shared/LogoutModal";
import Overlay from "../../components/shared/Overlay";
import ToggleDarkMode from "../../components/shared/ToggleDarkMode";
import Logo from "../../components/shared/Logo";
import TeacherLinks from "./components/TeacherLinks";

import { Outlet } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";
import { FiUser, FiFileText } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";

const links = [
  {
    name: "Perfil",
    link: "teacher-profile",
    icon: <FiUser />,
  },
  {
    name: "Turmas",
    link: "teacher-turmas",
    icon: <HiOutlineHome />,
  },
  {
    name: "Lançar Notas",
    link: "teacher-notas",
    icon: <FiFileText />,
  },
];

function Teacher() {
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
              <TeacherLinks item={item} key={i} />
            ))}
          </ul>
        </AuthNav>
      </AuthSideBar>
      <AuthHeader>
        <div>
          <p>Bem Vindo de volta, Henriques</p>
        </div>
        <div className="flex items-center gap-4">
          <ToggleDarkMode />
          <div>
            <p className="leading-3 font-medium">Henriques Cidade</p>
            <p className="text-xs">Professor</p>
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

export default Teacher;
