import { toast } from "react-toastify";

export const useToast = () => {
  function showSuccess(message) {
    toast.success(message);
  }
  function showError(message) {
    toast.error(message);
  }
  function showInfo(message) {
    toast.info(message);
  }
  function showWarning(message) {
    toast.warning(message);
  }

  return { showSuccess, showError, showInfo, showWarning };
};
