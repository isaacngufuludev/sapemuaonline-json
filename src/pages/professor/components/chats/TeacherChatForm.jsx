import { useEffect, useRef, useState } from "react";
import BtnSendMessages from "../../../../components/ui/BtnSendMessages";
import InputMessages from "../../../../components/ui/InputMessages";
import MessagesForm from "../../../../components/ui/MessagesForm";
import { HiOutlinePaperClip, HiOutlinePlus } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import { post } from "../../../../services/api";
import { useRefresh } from "../../../../contexts/RefreshContext";
import { uploadToCloudinary } from "../../../../services/cloudinary";
import { useToast } from "../../../../hooks/useToast";

function TeacherChatForm() {
  const [message, setMessage] = useState("");
  const [isUploadMenuOpen, setIsUploadMenuOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const uploadMenuRef = useRef(null);
  const turmaId = useLocation().hash.slice(1);
  const { user } = useAuth();
  const { triggerRefresh } = useRefresh();
  const { showError } = useToast();

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmedMessage = message.trim();
    if (!trimmedMessage && !selectedFile) return;

    try {
      setIsSending(true);
      const createdAt = new Date().toISOString();
      let savedFile = null;

      if (selectedFile) {
        const uploadedFile = await uploadToCloudinary(
          selectedFile,
          `sapemua/chats/${turmaId || "sem-turma"}`,
        );

        savedFile = await post("files", {
          ...uploadedFile,
          type: "file",
          turmaId,
          senderId: user.id,
          senderRole: user.role,
          createdAt,
        });
      }

      const newMessage = {
        message: trimmedMessage,
        turmaId,
        senderId: user.id,
        senderRole: user.role,
        createdAt,
      };

      if (savedFile) {
        newMessage.attachments = [
          {
            type: "file",
            fileId: savedFile.id,
            file: savedFile,
          },
        ];
      }

      await post("messages", newMessage);
      triggerRefresh();
      setMessage("");
      setSelectedFile(null);
    } catch (error) {
      showError(error.message || "Erro ao enviar ficheiro no chat");
    } finally {
      setIsSending(false);
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
    setSelectedFile(file);
    setIsUploadMenuOpen(false);
    e.target.value = "";
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
      {selectedFile && (
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs shadow-sm dark:border-gray-700 dark:bg-gray-800 md:text-sm">
          <p className="mb-2 font-semibold text-slate-700 dark:text-gray-100">
            Ficheiro selecionado
          </p>
          {selectedFile && (
            <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2 dark:bg-gray-900">
              <span className="font-medium text-slate-600 dark:text-gray-300">
                Ficheiro
              </span>
              <span className="truncate text-slate-800 dark:text-gray-100">
                {selectedFile.name}
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
                htmlFor="teacher-task-upload"
                className=" flex items-center gap-1 px-3 py-2 text-xs md:text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              >
                <span className="text-base">
                  <HiOutlinePaperClip />
                </span>
                <span>Arquivo</span>
              </label>
            </div>
          )}

          <input
            id="teacher-task-upload"
            type="file"
            className="hidden"
            onChange={handleTaskUpload}
          />
        </div>

        <InputMessages
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isSending}
        />
        <BtnSendMessages disabled={isSending} />
      </MessagesForm>
    </div>
  );
}

export default TeacherChatForm;
