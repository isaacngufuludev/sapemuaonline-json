import AuthLayout from "../../components/layout/AuthLayout";
import AuthSideBar from "../../components/layout/AuthSideBar";
import AuthMain from "../../components/layout/AuthMain";
import AuthNav from "../../components/layout/AuthNav";
import AuthHeader from "../../components/layout/AuthHeader";
import LogoutBtn from "../../components/shared/LogoutBtn";
import LogoutModal from "../../components/shared/LogoutModal";
import Overlay from "../../components/shared/Overlay";

import { Outlet } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";
import Logo from "../../components/shared/Logo";
import StudentLinks from "./components/StudentLinks";
import ToggleDarkMode from "../../components/shared/ToggleDarkMode";
import { FiFileText, FiUser } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi";
import { BsChat } from "react-icons/bs";
import { useAuth } from "../../contexts/AuthContext";

const links = [
  {
    name: "Perfil",
    link: "student-profile",
    icon: <FiUser />,
  },
  {
    name: "Colegas",
    link: "student-colleagues",
    icon: <HiOutlineUsers />,
  },
  {
    name: "Professores",
    link: "student-teacher",
    // icon: <FaChalkboardTeacher />,
    icon: <LuGraduationCap />,
  },
  {
    name: "Chat",
    link: "student-chat",
    icon: <BsChat />,
  },
  {
    name: "Notas",
    link: "student-notas",
    icon: <FiFileText />,
  },
];

function Student() {
  const { isLogoutModal } = useModal();
  const { user } = useAuth();
  const firstName = user?.name?.split(" ")[0] ?? "Estudante";

  return (
    <AuthLayout>
      <AuthSideBar>
        <div className="pl-4 flex items-center">
          <Logo />
        </div>
        <AuthNav>
          <ul className="flex flex-col ">
            {links.map((item) => (
              <StudentLinks item={item} key={item.link} />
            ))}
          </ul>
        </AuthNav>
      </AuthSideBar>
      <AuthHeader>
        <div>
          <p>Bem Vindo de volta, {firstName}</p>
        </div>
        <div className="flex items-center gap-4">
          <ToggleDarkMode />
          <div>
            <div className="flex items-center gap-3 ">
              <div className="text-2xl bg-blue-200 p-3 rounded-full dark:bg-gray-900 ">
                <FiUser />
              </div>
              <div>
                <p className="leading-3 font-semibold">{user?.name ?? "-"}</p>
                <p className="text-xs">{user?.role ?? "-"}</p>
              </div>
            </div>
          </div>
          <LogoutBtn />
        </div>
      </AuthHeader>
      <AuthMain type="noSpace">
        {isLogoutModal ? (
          <div>
            <LogoutModal />
            <Overlay />
          </div>
        ) : null}

        <Outlet />
      </AuthMain>
    </AuthLayout>
  );
}

export default Student;
