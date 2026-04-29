import { useEffect, useRef, useState } from "react";
import BtnSendMessages from "../../../../components/ui/BtnSendMessages";
import InputMessages from "../../../../components/ui/InputMessages";
import MessagesForm from "../../../../components/ui/MessagesForm";
import { HiOutlinePaperClip, HiOutlinePlus } from "react-icons/hi";
import { useAuth } from "../../../../contexts/AuthContext";
import { useLocation } from "react-router-dom";
import { post } from "../../../../services/api";
import { useRefresh } from "../../../../contexts/RefreshContext";
import { FaPaperclip } from "react-icons/fa";

function StudentChatForm() {
  const [message, setMessage] = useState("");
  const [isUploadMenuOpen, setIsUploadMenuOpen] = useState(false);
  const [selectedTaskFile, setSelectedTaskFile] = useState(null);
  const [selectedEvaluationFile, setSelectedEvaluationFile] = useState(null);
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
      setSelectedTaskFile(null);
      setSelectedEvaluationFile(null);
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
    setSelectedTaskFile(file);
    console.log("Upload tarefa:", file.name);
    setIsUploadMenuOpen(false);
  };

  const handleEvaluationUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedEvaluationFile(file);
    console.log("Upload avaliacao:", file.name);
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
    <div className="w-full space-y-3">
      {(selectedTaskFile || selectedEvaluationFile) && (
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs shadow-sm dark:border-gray-700 dark:bg-gray-800 md:text-sm">
          <p className="mb-2 font-semibold text-slate-700 dark:text-gray-100">
            Arquivos selecionados
          </p>
          {selectedTaskFile && (
            <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2 dark:bg-gray-900">
              <span className="font-medium text-slate-600 dark:text-gray-300">
                Tarefa
              </span>
              <span className="truncate text-slate-800 dark:text-gray-100">
                {selectedTaskFile.name}
              </span>
            </div>
          )}
          {selectedEvaluationFile && (
            <div className="mt-2 flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2 dark:bg-gray-900">
              <span className="font-medium text-slate-600 dark:text-gray-300">
                Avaliacao
              </span>
              <span className="truncate text-slate-800 dark:text-gray-100">
                {selectedEvaluationFile.name}
              </span>
            </div>
          )}
        </div>
      )}

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
                className="flex items-center gap-1 px-3 py-2 text-xs md:text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              >
                <span className="text-base">
                  <HiOutlinePaperClip />
                </span>
                <span>Tarefa</span>
              </label>
              <label
                htmlFor="student-evaluation-upload"
                className=" border-t flex items-center gap-1 border-slate-200 px-3 py-2 text-xs md:text-sm cursor-pointer hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-900 transition-colors"
              >
                <span className="text-base">
                  <HiOutlinePaperClip />
                </span>
                <span>Avaliacao</span>
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
    </div>
  );
}

export default StudentChatForm;
