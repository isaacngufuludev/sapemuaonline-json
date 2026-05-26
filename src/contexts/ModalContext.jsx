import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const [isTurmaModal, setIsTurmaModal] = useState(false);
  const [isCourseModal, setIsCourseModal] = useState(false);
  const [isClassModal, setIsClassModal] = useState(false);
  const [isNewsModal, setNewsModal] = useState(false);
  const [isChatModal, setIsChatModal] = useState(false);
  const [isRemoveStudentModal, setIsRemoveStudentModal] = useState(false);
  const [isRemoveTeacherModal, setIsRemoveTeacherModal] = useState(false);
  const [isRemoveTurmaModal, setIsRemoveTurmaModal] = useState(false);
  const [isRemoveNewsModal, setIsRemoveNewsModal] = useState(false);
  const [isRemoveCourseModal, setIsRemoveCourseModal] = useState(false);
  const [isRemoveMessageModal, setIsRemoveMessageModal] = useState(false);
  const [isShowTeachers, setIsShowTeachers] = useState(false);
  const [isGalleryModal, setIsGalleryModal] = useState(false);
  const [isGradesModal, setIsGradesModal] = useState(false);
  const [isSenderDetail, setIsSenderDetail] = useState(false);
  const [selectedGradeContext, setSelectedGradeContext] = useState(null);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [edited, setEdited] = useState(null);

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

  function toggleRemoveMessage() {
    setIsRemoveMessageModal((modal) => !modal);
  }

  function toggleClassModal() {
    setIsClassModal((modal) => !modal);
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

  function toggleSenderDetail() {
    setIsSenderDetail((show) => !show);
  }

  function toggleGradesModal() {
    setIsGradesModal((modal) => {
      const next = !modal;
      if (!next) setSelectedGradeContext(null);
      return next;
    });
  }

  function openGradesModal(context) {
    setSelectedGradeContext(context);
    setIsGradesModal(true);
  }

  function closeGradesModal() {
    setSelectedGradeContext(null);
    setIsGradesModal(false);
  }

  function setGalleryImage(image) {
    setSelectedGalleryImg(image);
  }

  function selectOptionItem(item) {
    setSelectedItem(item);
  }

  function selectEditedItem(item) {
    setEdited(item);
  }

  function toggle() {
    setIsTurmaModal(false);
    setIsCourseModal(false);
    setIsClassModal(false);
    setIsLogoutModal(false);
    setNewsModal(false);
    setIsChatModal(false);
    setIsRemoveStudentModal(false);
    setIsRemoveTeacherModal(false);
    setIsRemoveTurmaModal(false);
    setIsRemoveNewsModal(false);
    setIsRemoveCourseModal(false);
    setIsRemoveMessageModal(false);
    setIsGalleryModal(false);
    setIsGradesModal(false);
    setIsSenderDetail(false);
    setSelectedGradeContext(null);
  }

  return (
    <ModalContext.Provider
      value={{
        isLogoutModal,
        isTurmaModal,
        isCourseModal,
        isClassModal,
        isNewsModal,
        isChatModal,
        isRemoveStudentModal,
        isRemoveTeacherModal,
        isRemoveTurmaModal,
        isRemoveNewsModal,
        isRemoveCourseModal,
        isRemoveMessageModal,
        isShowTeachers,
        isGalleryModal,
        isSenderDetail,
        isGradesModal,
        selectedGradeContext,
        selectedGalleryImg,
        selectedItem,
        edited,
        selectEditedItem,
        setGalleryImage,
        setSelectedItem,
        selectOptionItem,
        toggleLogoutModal,
        toggleTurmaModal,
        toggleCourseModal,
        toggleNewsModal,
        toggleChatBoot,
        toggleRemoveStudent,
        toggleSenderDetail,
        toggleRemoveTeacher,
        toggleGradesModal,
        openGradesModal,
        closeGradesModal,
        toggleTurmas,
        toggleNews,
        toggleCourse,
        toggleRemoveMessage,
        toggleClassModal,
        toggleTeachers,
        toggleGalleryModal,
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
