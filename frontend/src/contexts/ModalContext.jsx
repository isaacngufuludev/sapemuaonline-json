import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const [isTurmaModal, setIsTurmaModal] = useState(false);
  const [isNewsModal, setNewsModal] = useState(false);
  const [showTopBtn, setShowTopButton] = useState(false);

  function toggleLogoutModal() {
    setIsLogoutModal((modal) => !modal);
  }

  function toggleTurmaModal() {
    setIsTurmaModal((modal) => !modal);
  }
  function toggleNewsModal() {
    setNewsModal((modal) => !modal);
  }

  function toogleTopBtn() {
    setShowTopButton((btn) => !btn);
  }

  function toggle() {
    setIsTurmaModal(false);
    setIsLogoutModal(false);
    setNewsModal(false);
  }

  return (
    <ModalContext.Provider
      value={{
        isLogoutModal,
        isTurmaModal,
        isNewsModal,
        showTopBtn,
        toggleLogoutModal,
        toggleTurmaModal,
        toggleNewsModal,
        toogleTopBtn,
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
