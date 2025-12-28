import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const [isTurmaModal, setIsTurmaModal] = useState(false);
  const [isCourseModal, setIsCourseModal] = useState(false);
  const [isNewsModal, setNewsModal] = useState(false);
  const [isChatModal, setIsChatModal] = useState(false);
  const [isRemoveStudentModal, setIsRemoveStudentModal] = useState(false);
  const [isRemoveTeacherModal, setIsRemoveTeacherModal] = useState(false);
  const [isRemoveTurmaModal, setIsRemoveTurmaModal] = useState(false);
  const [isRemoveNewsModal, setIsRemoveNewsModal] = useState(false);
  const [isRemoveCourseModal, setIsRemoveCourseModal] = useState(false);
  const [isShowTeachers, setIsShowTeachers] = useState(false);
  const [isGalleryModal, setIsGalleryModal] = useState(false);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(null);

  function toggleLogoutModal() {
    setIsLogoutModal((modal) => !modal);
  }

  function toggleTurmaModal() {
    setIsTurmaModal((modal) => !modal);
  }
  function toggleCourseModal() {
    setIsCourseModal((modal) => !modal);
  }

  function toggleNewsModal() {
    setNewsModal((modal) => !modal);
  }

  function toggleChatBoot() {
    setIsChatModal((modal) => !modal);
  }

  function toggleRemoveStudent() {
    setIsRemoveStudentModal((modal) => !modal);
  }

  function toggleRemoveTeacher() {
    setIsRemoveTeacherModal((modal) => !modal);
  }

  function toggleTurmas() {
    setIsRemoveTurmaModal((modal) => !modal);
  }
  function toggleCourse() {
    setIsRemoveCourseModal((modal) => !modal);
  }

  function toggleNews() {
    setIsRemoveNewsModal((modal) => !modal);
  }

  function toggleTeachers() {
    setIsShowTeachers((show) => !show);
  }

  function toggleGalleryModal() {
    setIsGalleryModal((modal) => !modal);
  }

  function setGalleryImage(image) {
    setSelectedGalleryImg(image);
  }

  function toggle() {
    setIsTurmaModal(false);
    setIsCourseModal(false);
    setIsLogoutModal(false);
    setNewsModal(false);
    setIsChatModal(false);
    setIsRemoveStudentModal(false);
    setIsRemoveTeacherModal(false);
    setIsRemoveTurmaModal(false);
    setIsRemoveNewsModal(false);
    setIsRemoveCourseModal(false);
    setIsGalleryModal(false);
  }

  return (
    <ModalContext.Provider
      value={{
        isLogoutModal,
        isTurmaModal,
        isCourseModal,
        isNewsModal,
        isChatModal,
        isRemoveStudentModal,
        isRemoveTeacherModal,
        isRemoveTurmaModal,
        isRemoveNewsModal,
        isRemoveCourseModal,
        isShowTeachers,
        isGalleryModal,
        selectedGalleryImg,
        toggleLogoutModal,
        toggleTurmaModal,
        toggleCourseModal,
        toggleNewsModal,
        toggleChatBoot,
        toggleRemoveStudent,
        toggleRemoveTeacher,
        toggleTurmas,
        toggleNews,
        toggleCourse,
        toggleTeachers,
        toggleGalleryModal,
        setGalleryImage,
        toggle,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

const useModal = function () {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error("ModalContext was used outside of ModalProvider");
  return context;
};

export { ModalProvider, useModal };
