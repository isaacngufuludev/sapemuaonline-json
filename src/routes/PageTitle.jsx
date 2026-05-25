import { matchPath, useLocation } from "react-router-dom";
import { useEffect } from "react";

const APP_NAME = "Sapemua Online";

const pageTitles = [
  { path: "/", title: `Pagina Inicial | ${APP_NAME}` },
  { path: "/sobre", title: `Sobre | ${APP_NAME}` },
  { path: "/gallery", title: `Galeria | ${APP_NAME}` },
  { path: "/auth", title: `Autenticação | ${APP_NAME}` },
  { path: "/auth/login", title: `Login | ${APP_NAME}` },
  {
    path: "/auth/forgot-password",
    title: `Recuperar palavra-passe | ${APP_NAME}`,
  },
  {
    path: "/reset-password/:token",
    title: `Redefinir palavra-passe | ${APP_NAME}`,
  },
  {
    path: "/primeiro-acesso/:token",
    title: `Primeiro acesso | ${APP_NAME}`,
  },
  { path: "/area", title: `Área reservada | ${APP_NAME}` },
  { path: "/area/admin", title: `Painel Administrativo | ${APP_NAME}` },
  {
    path: "/area/admin/adminDashboard",
    title: `Dashboard | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminStudents",
    title: `Estudantes | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminStudents/main-student",
    title: `Estudantes | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminStudents/student-detail/:studentId",
    title: `Detalhes do estudante | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminStudents/add-student/:id?",
    title: `Formulário do estudante | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminStudents/add-student/:id?/father-info",
    title: `Dados do encarregado | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminStudents/add-student/:id?/mother-info",
    title: `Dados da mãe | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminStudents/add-student/:id?/guardion-info",
    title: `Dados do responsável | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminTeacher",
    title: `Professores | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminTeacher/main-teacher",
    title: `Professores | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminTeacher/teacher-detail/:teacherId",
    title: `Detalhes do professor | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminTeacher/add-teacher/:id?",
    title: `Formulário do professor | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminTurmas",
    title: `Turmas | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminTurmas/turma-layout",
    title: `Turmas | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminTurmas/turma-detail/:turmaId",
    title: `Detalhes da turma | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminTurmas/turma-detail/:turmaId/turma-students",
    title: `Estudantes da turma | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminTurmas/turma-detail/:turmaId/turma-subjects",
    title: `Disciplinas da turma | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminNews",
    title: `Notícias | Painel Administrativo | ${APP_NAME}`,
  },
  {
    path: "/area/admin/adminConfigs",
    title: `Configurações | Painel Administrativo | ${APP_NAME}`,
  },
  { path: "/area/teacher", title: `Painel do Professor | ${APP_NAME}` },
  {
    path: "/area/teacher/teacher-profile",
    title: `Perfil | Painel do Professor | ${APP_NAME}`,
  },
  {
    path: "/area/teacher/teacher-turmas",
    title: `Turmas | Painel do Professor | ${APP_NAME}`,
  },
  {
    path: "/area/teacher/teacher-turmas/teacher-all-turmas",
    title: `Turmas | Painel do Professor | ${APP_NAME}`,
  },
  {
    path: "/area/teacher/teacher-turmas/teacher-info/:turmaId",
    title: `Detalhes da turma | Painel do Professor | ${APP_NAME}`,
  },
  {
    path: "/area/teacher/teacher-turmas/teacher-student-detail/:studentId",
    title: `Detalhes do estudante | Painel do Professor | ${APP_NAME}`,
  },
  {
    path: "/area/teacher/teacher-chats",
    title: `Chat | Painel do Professor | ${APP_NAME}`,
  },
  { path: "/area/student", title: `Painel do Estudante | ${APP_NAME}` },
  {
    path: "/area/student/student-profile",
    title: `Perfil | Painel do Estudante | ${APP_NAME}`,
  },
  {
    path: "/area/student/student-colleagues",
    title: `Colegas | Painel do Estudante | ${APP_NAME}`,
  },
  {
    path: "/area/student/student-teacher",
    title: `Professores | Painel do Estudante | ${APP_NAME}`,
  },
  {
    path: "/area/student/student-chat",
    title: `Chat | Painel do Estudante | ${APP_NAME}`,
  },
  {
    path: "/area/student/student-notas",
    title: `Notas | Painel do Estudante | ${APP_NAME}`,
  },
];

function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const currentPage = pageTitles.find(({ path }) =>
      matchPath({ path, end: true }, pathname),
    );

    document.title =
      currentPage?.title || `Página não encontrada | ${APP_NAME}`;
  }, [pathname]);

  return null;
}

export default PageTitle;
