import AuthLayout from "../../components/layout/AuthLayout";
import AuthSideBar from "../../components/layout/AuthSideBar";
import AuthMain from "../../components/layout/AuthMain";
import AuthNav from "../../components/layout/AuthNav";
import AuthHeader from "../../components/layout/AuthHeader";
import LogoutModal from "../../components/shared/LogoutModal";
import Overlay from "../../components/shared/Overlay";

import { Outlet } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";
import Logo from "../../components/shared/Logo";
import StudentLinks from "./components/StudentLinks";
import { FiFileText, FiUser } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi";
import { BsChat } from "react-icons/bs";

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

  return (
    <AuthLayout>
      <AuthSideBar>
        <div className="flex items-center">
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
      <AuthHeader />
      <AuthMain type="noSpace">
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
