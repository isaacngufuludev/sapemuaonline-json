import { useEffect, useRef, useState } from "react";
import BtnSendMessages from "../../../../components/ui/BtnSendMessages";
import InputMessages from "../../../../components/ui/InputMessages";
import MessagesForm from "../../../../components/ui/MessagesForm";
import { HiOutlinePlus } from "react-icons/hi";
import { useAuth } from "../../../../contexts/AuthContext";
import { useLocation } from "react-router-dom";
import { post } from "../../../../services/api";
import { useRefresh } from "../../../../contexts/RefreshContext";

function StudentChatForm() {
  const [message, setMessage] = useState("");
  const [isUploadMenuOpen, setIsUploadMenuOpen] = useState(false);
  const uploadMenuRef = useRef(null);
  const turmaId = useLocation().hash.slice(1);
  const { user } = useAuth();
  const { triggerRefresh } = useRefresh();

  async function handleSubmit(e) {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        message,
        turmaId,
        senderId: user.id,
        senderRole: user.role,
        createdAt: new Date().toISOString(),
      };

      await post("messages", newMessage);
      triggerRefresh();
      console.log(newMessage);
      setMessage("");
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleTaskUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    console.log("Upload tarefa:", file.name);
    e.target.value = "";
    setIsUploadMenuOpen(false);
  };

  const handleEvaluationUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    console.log("Upload avaliacao:", file.name);
    e.target.value = "";
    setIsUploadMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!uploadMenuRef.current?.contains(event.target)) {
        setIsUploadMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <MessagesForm onSubmit={handleSubmit}>
      <div className="relative shrink-0" ref={uploadMenuRef}>
        <button
          type="button"
          onClick={() => setIsUploadMenuOpen((state) => !state)}
          className="h-8 md:h-10 w-8 md:w-10 rounded-full border border-stone-300 dark:border-gray-700 flex items-center justify-center text-xl md:text-2xl hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          aria-label="Abrir opcoes de upload"
        >
          <HiOutlinePlus />
        </button>

        {isUploadMenuOpen && (
          <div className="absolute bottom-full left-0 mb-2 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-slate-200 dark:border-gray-700 z-50 overflow-hidden">
            <label
              htmlFor="student-task-upload"
              className="block px-3 py-2 text-xs md:text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              Tarefa
            </label>
            <label
              htmlFor="student-evaluation-upload"
              className="block px-3 py-2 text-xs md:text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors border-t border-slate-200 dark:border-gray-700"
            >
              Avaliacao
            </label>
          </div>
        )}

        <input
          id="student-task-upload"
          type="file"
          className="hidden"
          onChange={handleTaskUpload}
        />
        <input
          id="student-evaluation-upload"
          type="file"
          className="hidden"
          onChange={handleEvaluationUpload}
        />
      </div>

      <InputMessages
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <BtnSendMessages onClick={handleSubmit} />
    </MessagesForm>
  );
}

export default StudentChatForm;
