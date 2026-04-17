import { HiOutlineLogout } from "react-icons/hi";
import { useModal } from "../../contexts/ModalContext";

function LogoutBtn() {
  const { toggleLogoutModal } = useModal();

  return (
    <button
      onClick={toggleLogoutModal}
      className="bg-gray-200 dark:bg-gray-800 p-2 text-xl rounded-md"
    >
      <HiOutlineLogout />
    </button>
  );
}

export default LogoutBtn;
