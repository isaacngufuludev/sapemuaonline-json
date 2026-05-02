import { HiOutlineArrowLeft, HiOutlineBookOpen } from "react-icons/hi";
import Title4 from "../ui/Title4";
import { FiMail, FiPhone } from "react-icons/fi";
import { useModal } from "../../contexts/ModalContext";
import { useUsers } from "../../hooks/useUsers";
import UserAvatar from "./UserAvatar";

function SenderDetail({ selectedSender }) {
  const { toggleSenderDetail } = useModal();
  const { users } = useUsers();
  const sender = users.find((user) => user.id === selectedSender.senderId);
  const isTeacher = sender?.role === "teacher";

  return (
    <div className=" h-full w-[30%] bg-white p-4  dark:bg-gray-800 z-10 absolute top-0 right-0 shadow-xl ">
      <div className="flex items-center gap-2 mb-8">
        <button onClick={toggleSenderDetail}>
          <HiOutlineArrowLeft size={18} />
        </button>
        <Title4>Detalhes do emissor</Title4>
      </div>

      <div className="flex items-center justify-center flex-col mb-7">
        <UserAvatar user={sender} size="xl" className="mb-1" />
        <p className="text-base font-semibold">{sender?.name}</p>
        <p className="text-gray-500 text-sm dark:text-gray-200">
          {sender?.role}
        </p>
      </div>

      <div>
        <Title4>Informaçóes Basica</Title4>
        <div className="flex items-center gap-3 mb-3 mt-5">
          <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
            <FiPhone />
          </p>
          <div className="flex flex-col ">
            <Title4>Telefone</Title4>
            <p className="text-sm">{sender?.phoneNumber}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
            <FiMail />
          </p>
          <div className="flex flex-col ">
            <Title4>Email</Title4>
            <p className="text-sm"> {sender?.email} </p>
          </div>
        </div>

        {isTeacher && (
          <div className="flex items-center gap-3">
            <p className=" bg-slate-100 p-4 rounded-md dark:bg-gray-900 text-lg">
              <HiOutlineBookOpen />
            </p>

            <div className="flex flex-col ">
              <Title4>Disciplinas</Title4>
              <p className="text-sm"> {sender.subjects.join(", ")} </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SenderDetail;
