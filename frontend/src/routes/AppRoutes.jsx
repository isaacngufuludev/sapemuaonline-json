import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "../contexts/ThemeContext";
import { ModalProvider } from "../contexts/ModalContext";

import Home from "../pages/website/Home";
import Sobre from "../pages/website/Sobre";
import Gallery from "../pages/website/Gallery";
import Login from "../pages/auth/Login";
import Area from "../pages/areas/Area";
import Admin from "../pages/admin/Admin";
import AdminStudents from "../pages/admin/components/student/AdminStudents";
import AdminTeacher from "../pages/admin/components/teacher/AdminTeacher";
import AdminTurmas from "../pages/admin/components/turmas/AdminTurmas";
import AdminNews from "../pages/admin/components/news/AdminNews";
import AdminConfigs from "../pages/admin/components/configs/AdminConfigs";
import AdminAddStudent from "../pages/admin/components/student/AdminAddStudent";
import AdminMainStudentLayout from "../pages/admin/components/student/AdminMainStudentLayout";
import AdminAddFatherInfo from "../pages/admin/components/student/AdminAddFatherInfo";
import AdminAddMotherInfo from "../pages/admin/components/student/AdminAddMotherInfo";
import AdminAddGuardionInfo from "../pages/admin/components/student/AdminAddGuardionInfo";
import AdminMainTeacherLayout from "../pages/admin/components/teacher/AdminMainTeacherLayout";
import AdminAddTeacher from "../pages/admin/components/teacher/AdminAddTeacher";
import Student from "../pages/student/Student";
import StudentProfile from "../pages/student/components/perfil/StudentProfile";
import StudentColleagues from "../pages/student/components/colegas/StudentColleagues";
import StudentTeacher from "../pages/student/components/teachers/StudentTeacher";
import StudentNotas from "../pages/student/components/notas/StudentNotas";
import Teacher from "../pages/professor/Teacher";
import TeacherProfile from "../pages/professor/components/perfil/TeacherProfile";
import TeacherTurmas from "../pages/professor/components/turmas/TeacherTurmas";
import TeacherNotas from "../pages/professor/components/notas/TeacherNotas";
import TeacherTurmasInfo from "../pages/professor/components/turmas/TeacherTurmasInfo";
import TeacherAllTurmas from "../pages/professor/components/turmas/TeacherAllTurmas";

function AppRoutes() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/gallery" element={<Gallery />} />
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
              <Route path="teacher" element={<Teacher />}>
                <Route
                  index
                  element={<Navigate replace to="teacher-profile" />}
                />
                <Route path="teacher-profile" element={<TeacherProfile />} />
                <Route path="teacher-turmas" element={<TeacherTurmas />}>
                  <Route index element={<Navigate to="teacher-all-turmas" />} />
                  <Route
                    path="teacher-all-turmas"
                    element={<TeacherAllTurmas />}
                  />
                  <Route path="teacher-info" element={<TeacherTurmasInfo />} />
                </Route>
                <Route path="teacher-notas" element={<TeacherNotas />} />
              </Route>
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
