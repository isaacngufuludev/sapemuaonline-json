import { FaHashtag } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

function StudentChatHeader({ conversation, onBack, showBackButton }) {
  const onlineLabel = conversation?.subtitle ?? "0 online";

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 md:px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {showBackButton && (
          <button
            type="button"
            onClick={onBack}
            className="md:hidden text-xl text-gray-600 dark:text-gray-300"
            aria-label="Voltar para conversas"
          >
            <FiArrowLeft />
          </button>
        )}
        <div className=" text-base p-3 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold">
          <FaHashtag />
        </div>
        <div className="">
          <h2 className="text-base font-semibold text-gray-900 dark:text-white">
            {conversation?.name ?? "Conversa"}
          </h2>
          <div className="flex items-center gap-1">
            <span className="inline-block p-1 rounded-full bg-blue-600"></span>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {onlineLabel}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
export default StudentChatHeader;
