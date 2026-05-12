import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "../contexts/ThemeContext";
import { ModalProvider } from "../contexts/ModalContext";
import { AuthProvider } from "../contexts/AuthContext";
import { StudentFormProvider } from "../contexts/StudentFormContext";
import { RefreshProvider } from "../contexts/RefreshContext";
import { AuthSidebarProvider } from "../contexts/AuthSidebarContext";

import Home from "../pages/website/Home";
import Sobre from "../pages/website/Sobre";
import Gallery from "../pages/website/Gallery";
import PageNotFound from "../pages/website/PageNotFound";
import Auth from "../pages/auth/Auth";
import Login from "../pages/auth/components/Login";
import ProtectedRoute from "../pages/website/ProtectedRoute";
import Area from "../pages/areas/Area";
import Admin from "../pages/admin/Admin";
import AdminDashboard from "../pages/admin/components/dashboard/AdminDashboard";
import AdminStudents from "../pages/admin/components/student/AdminStudents";
import AdminTeacher from "../pages/admin/components/teacher/AdminTeacher";
import AdminTurmas from "../pages/admin/components/turmas/AdminTurmas";
import AdminTurmaDetails from "../pages/admin/components/turmas/AdminTurmaDetails";
import AdminTurmasLayout from "../pages/admin/components/turmas/AdminTurmasLayout";
import TurmaStudents from "../pages/admin/components/turmas/TurmaStudents";
import TurmaSubjects from "../pages/admin/components/turmas/TurmaSubjects";
import AdminNews from "../pages/admin/components/news/AdminNews";
import AdminConfigs from "../pages/admin/components/configs/AdminConfigs";
import AdminAddStudent from "../pages/admin/components/student/AdminAddStudent";
import AdminStudentDetail from "../pages/admin/components/student/AdminStudentDetail";
import AdminMainStudentLayout from "../pages/admin/components/student/AdminMainStudentLayout";
import AdminAddFatherInfo from "../pages/admin/components/student/AdminAddFatherInfo";
import AdminAddMotherInfo from "../pages/admin/components/student/AdminAddMotherInfo";
import AdminAddGuardionInfo from "../pages/admin/components/student/AdminAddGuardionInfo";
import AdminMainTeacherLayout from "../pages/admin/components/teacher/AdminMainTeacherLayout";
import AdminAddTeacher from "../pages/admin/components/teacher/AdminAddTeacher";
import AdminTeacherDetail from "../pages/admin/components/teacher/AdminTeacherDetail";
import Student from "../pages/student/Student";
import StudentProfile from "../pages/student/components/perfil/StudentProfile";
import StudentColleagues from "../pages/student/components/colegas/StudentColleagues";
import StudentTeacher from "../pages/student/components/teachers/StudentTeacher";
import StudentNotas from "../pages/student/components/notas/StudentNotas";
import Teacher from "../pages/professor/Teacher";
import TeacherProfile from "../pages/professor/components/perfil/TeacherProfile";
import TeacherTurmas from "../pages/professor/components/turmas/TeacherTurmas";
import TeacherChats from "../pages/professor/components/chats/TeacherChats";
import TeacherTurmasInfo from "../pages/professor/components/turmas/TeacherTurmasInfo";
import TeacherAllTurmas from "../pages/professor/components/turmas/TeacherAllTurmas";
import TeacherChatLayout from "../pages/professor/components/chats/TeacherChatLayout";
import StudentChatLayout from "../pages/student/components/chat/StudentChatLayout";
import TeacherStudentDetail from "../pages/professor/components/turmas/TeacherStudentDetail";
import ForgotPassword from "../pages/auth/components/ForgotPassword";
import ResetPassword from "../pages/auth/components/ResetPassword";

function AppRoutes() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ModalProvider>
          <AuthSidebarProvider>
            <RefreshProvider>
              <BrowserRouter>
                <Routes>
                  <Route index path="/" element={<Home />} />
                  <Route path="/sobre" element={<Sobre />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route
                    path="/reset-password/:token"
                    element={<ResetPassword />}
                  />
                  <Route path="/auth" element={<Auth />}>
                    <Route index element={<Navigate replace to="login" />} />
                    <Route path="login" element={<Login />} />
                    <Route
                      path="forgot-password"
                      element={<ForgotPassword />}
                    />
                  </Route>

                  <Route path="*" element={<PageNotFound />} />
                  <Route
                    path="/area"
                    element={
                      <ProtectedRoute>
                        <Area />
                      </ProtectedRoute>
                    }
                  >
                    <Route path="admin" element={<Admin />}>
                      <Route
                        index
                        element={<Navigate replace to="adminDashboard" />}
                      />
                      <Route
                        path="adminDashboard"
                        element={<AdminDashboard />}
                      />
                      <Route path="adminStudents" element={<AdminStudents />}>
                        <Route
                          index
                          element={<Navigate replace to="main-student" />}
                        />
                        <Route
                          path="main-student"
                          element={<AdminMainStudentLayout />}
                        />
                        <Route
                          path="student-detail/:studentId"
                          element={<AdminStudentDetail />}
                        />
                        <Route
                          path="add-student/:id?"
                          element={
                            <StudentFormProvider>
                              <AdminAddStudent />
                            </StudentFormProvider>
                          }
                        >
                          <Route
                            index
                            element={<Navigate replace to="father-info" />}
                          />
                          <Route
                            path="father-info"
                            element={<AdminAddFatherInfo />}
                          />
                          <Route
                            path="mother-info"
                            element={<AdminAddMotherInfo />}
                          />
                          <Route
                            path="guardion-info"
                            element={<AdminAddGuardionInfo />}
                          />
                        </Route>
                      </Route>
                      <Route path="adminTeacher" element={<AdminTeacher />}>
                        <Route
                          index
                          element={<Navigate replace to="main-teacher" />}
                        />
                        <Route
                          path="main-teacher"
                          element={<AdminMainTeacherLayout />}
                        />
                        <Route
                          path="teacher-detail/:teacherId"
                          element={<AdminTeacherDetail />}
                        />
                        <Route
                          path="add-teacher/:id?"
                          element={<AdminAddTeacher />}
                        />
                      </Route>
                      <Route path="adminTurmas" element={<AdminTurmas />}>
                        <Route
                          index
                          element={<Navigate replace to="turma-layout" />}
                        />
                        <Route
                          path="turma-layout"
                          element={<AdminTurmasLayout />}
                        />
                        <Route
                          path="turma-detail/:turmaId"
                          element={<AdminTurmaDetails />}
                        >
                          <Route
                            index
                            element={<Navigate replace to="turma-students" />}
                          />
                          <Route
                            path="turma-students"
                            element={<TurmaStudents />}
                          />
                          <Route
                            path="turma-subjects"
                            element={<TurmaSubjects />}
                          />
                        </Route>
                      </Route>
                      <Route path="adminNews" element={<AdminNews />} />
                      <Route path="adminConfigs" element={<AdminConfigs />} />
                    </Route>
                    <Route path="teacher" element={<Teacher />}>
                      <Route
                        index
                        element={<Navigate replace to="teacher-profile" />}
                      />
                      <Route
                        path="teacher-profile"
                        element={<TeacherProfile />}
                      />
                      <Route path="teacher-turmas" element={<TeacherTurmas />}>
                        <Route
                          index
                          element={<Navigate to="teacher-all-turmas" />}
                        />
                        <Route
                          path="teacher-all-turmas"
                          element={<TeacherAllTurmas />}
                        />
                        <Route
                          path="teacher-info/:turmaId"
                          element={<TeacherTurmasInfo />}
                        />
                        <Route
                          path="teacher-student-detail/:studentId"
                          element={<TeacherStudentDetail />}
                        />
                      </Route>
                      <Route
                        path="teacher-chats"
                        element={<TeacherChatLayout />}
                      />
                    </Route>
                    <Route path="student" element={<Student />}>
                      <Route
                        index
                        element={<Navigate replace to="student-profile" />}
                      />
                      <Route
                        path="student-profile"
                        element={<StudentProfile />}
                      />
                      <Route
                        path="student-colleagues"
                        element={<StudentColleagues />}
                      />
                      <Route
                        path="student-teacher"
                        element={<StudentTeacher />}
                      />
                      <Route
                        path="student-chat"
                        element={<StudentChatLayout />}
                      />
                      <Route path="student-notas" element={<StudentNotas />} />
                    </Route>
                  </Route>
                </Routes>
              </BrowserRouter>
            </RefreshProvider>
          </AuthSidebarProvider>
        </ModalProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default AppRoutes;
