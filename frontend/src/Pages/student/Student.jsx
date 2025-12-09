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
    name: "Notas",
    link: "student-notas",
    icon: <FiFileText />,
  },
];

function Student() {
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
              <StudentLinks item={item} key={i} />
            ))}
          </ul>
        </AuthNav>
      </AuthSideBar>
      <AuthHeader>
        <div>
          <p>Bem Vindo de volta, Luzia</p>
        </div>
        <div className="flex items-center gap-4">
          <ToggleDarkMode />
          <div>
            <p className="leading-3 font-medium">Luzia Gonçalves</p>
            <p className="text-xs">Estudante</p>
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

export default Student;
