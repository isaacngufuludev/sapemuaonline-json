import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const [isTurmaModal, setIsTurmaModal] = useState(false);
  const [isNewsModal, setNewsModal] = useState(false);
  const [isChatModal, setIsChatModal] = useState(false);
  const [isRemoveStudentModal, setIsRemoveStudentModal] = useState(false);
  const [isRemoveTeacherModal, setIsRemoveTeacherModal] = useState(false);
  const [isRemoveTurmaModal, setIsRemoveTurmaModal] = useState(false);
  const [isRemoveNewsModal, setIsRemoveNewsModal] = useState(false);

  function toggleLogoutModal() {
    setIsLogoutModal((modal) => !modal);
  }

  function toggleTurmaModal() {
    setIsTurmaModal((modal) => !modal);
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

  function toggleNews() {
    setIsRemoveNewsModal((modal) => !modal);
  }

  function toggle() {
    setIsTurmaModal(false);
    setIsLogoutModal(false);
    setNewsModal(false);
    setIsChatModal(false);
    setIsRemoveStudentModal(false);
    setIsRemoveTeacherModal(false);
    setIsRemoveTurmaModal(false);
    setIsRemoveNewsModal(false);
  }

  return (
    <ModalContext.Provider
      value={{
        isLogoutModal,
        isTurmaModal,
        isNewsModal,
        isChatModal,
        isRemoveStudentModal,
        isRemoveTeacherModal,
        isRemoveTurmaModal,
        isRemoveNewsModal,
        toggleLogoutModal,
        toggleTurmaModal,
        toggleNewsModal,
        toggleChatBoot,
        toggleRemoveStudent,
        toggleRemoveTeacher,
        toggleTurmas,
        toggleNews,
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
    throw new Error("ModalContext was used outside od MosalProvider");
  return context;
};

export { ModalProvider, useModal };
