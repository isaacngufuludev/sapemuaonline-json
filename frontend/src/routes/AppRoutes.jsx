import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "../contexts/ThemeContext";
import { ModalProvider } from "../contexts/ModalContext";

import Home from "../Pages/website/Home";
import Sobre from "../Pages/website/Sobre";
import ChatBoot from "../Pages/website/ChatBoot";
import Login from "../Pages/auth/Login";
import Area from "../Pages/areas/Area";
import Admin from "../Pages/admin/Admin";
import AdminStudents from "../Pages/admin/components/student/AdminStudents";
import AdminTeacher from "../Pages/admin/components/teacher/AdminTeacher";
import AdminTurmas from "../Pages/admin/components/turmas/AdminTurmas";
import AdminNews from "../Pages/admin/components/news/AdminNews";
import AdminConfigs from "../Pages/admin/components/configs/AdminConfigs";
import AdminAddStudent from "../Pages/admin/components/student/AdminAddStudent";
import AdminMainStudentLayout from "../Pages/admin/components/student/AdminMainStudentLayout";
import AdminAddFatherInfo from "../Pages/admin/components/student/AdminAddFatherInfo";
import AdminAddMotherInfo from "../Pages/admin/components/student/AdminAddMotherInfo";
import AdminAddGuardionInfo from "../Pages/admin/components/student/AdminAddGuardionInfo";
import AdminMainTeacherLayout from "../Pages/admin/components/teacher/AdminMainTeacherLayout";
import AdminAddTeacher from "../Pages/admin/components/teacher/AdminAddTeacher";
import Student from "../Pages/student/Student";
import StudentProfile from "../Pages/student/components/perfil/StudentProfile";
import StudentColleagues from "../Pages/student/components/colegas/StudentColleagues";
import StudentTeacher from "../Pages/student/components/teachers/StudentTeacher";
import StudentNotas from "../Pages/student/components/notas/StudentNotas";
import Teacher from "../Pages/professor/Teacher";

function AppRoutes() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/chatBoot" element={<ChatBoot />} />
            <Route path="/login" element={<Login />} />
            <Route path="/area" element={<Area />}>
              <Route path="admin" element={<Admin />}>
                <Route
                  index
                  element={<Navigate replace to="adminStudents" />}
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
                  <Route path="add-student" element={<AdminAddStudent />}>
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
                  <Route path="add-teacher" element={<AdminAddTeacher />} />
                </Route>
                <Route path="adminTurmas" element={<AdminTurmas />} />
                <Route path="adminNews" element={<AdminNews />} />
                <Route path="adminConfigs" element={<AdminConfigs />} />
              </Route>
              <Route path="teacher" element={<Teacher />} />
              <Route path="student" element={<Student />}>
                <Route
                  index
                  element={<Navigate replace to="student-profile" />}
                />
                <Route path="student-profile" element={<StudentProfile />} />
                <Route
                  path="student-colleagues"
                  element={<StudentColleagues />}
                />
                <Route path="student-teacher" element={<StudentTeacher />} />
                <Route path="student-notas" element={<StudentNotas />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default AppRoutes;
