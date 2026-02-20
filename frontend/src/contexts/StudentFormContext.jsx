import { createContext, useContext, useEffect, useState } from "react";
import { useModal } from "./ModalContext";

const StudentFormContext = createContext();

export const StudentFormProvider = ({ children }) => {
  const [fatherName, setFatherName] = useState("");
  const [fatherPhoneNumber, setFatherPhoneNumber] = useState("");
  const [fatherJob, setFatherJob] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherPhoneNumber, setMotherPhoneNumber] = useState("");
  const [motherJob, setMotherJob] = useState("");
  const [guardionName, setGuardionName] = useState("");
  const [guardionPhoneNumber, setGuardionPhoneNumber] = useState("");
  const [guardionJob, setGuardionJob] = useState("");
  const { edited: editedItem } = useModal();

  useEffect(() => {
    if (editedItem) {
      setFatherName(editedItem.fatherName);
      setFatherPhoneNumber(editedItem.fatherPhoneNumber?.replace("+244 ", ""));
      setFatherJob(editedItem.fatherJob);
      setMotherName(editedItem.motherName);
      setMotherPhoneNumber(editedItem.motherPhoneNumber?.replace("+244 ", ""));
      setMotherJob(editedItem.motherJob);
      setGuardionName(editedItem.guardionName);
      setGuardionPhoneNumber(
        editedItem?.guardionPhoneNumber?.replace("+244 ", ""),
      );
      setGuardionJob(editedItem.guardionJob);
    } else {
      setFatherName("");
      setFatherPhoneNumber("");
      setFatherJob("");
      setMotherName("");
      setMotherPhoneNumber("");
      setMotherJob("");
      setGuardionName("");
      setGuardionPhoneNumber("");
      setGuardionJob("");
    }
  }, [editedItem]);

  const value = {
    fatherJob,
    fatherPhoneNumber,
    fatherName,
    motherJob,
    motherName,
    motherPhoneNumber,
    guardionJob,
    guardionName,
    guardionPhoneNumber,
    setFatherJob,
    setFatherName,
    setFatherPhoneNumber,
    setMotherName,
    setMotherPhoneNumber,
    setMotherJob,
    setGuardionName,
    setGuardionPhoneNumber,
    setGuardionJob,
  };

  return (
    <StudentFormContext.Provider value={value}>
      {children}
    </StudentFormContext.Provider>
  );
};

export const useStudentForm = () => {
  const context = useContext(StudentFormContext);
  if (!context) {
    throw new Error(
      "useStudentForm deve ser usado dentro de StudentFormProvider",
    );
  }
  return context;
};
