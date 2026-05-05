import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function FullScreenLoading({ isVisible = false }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center gap-4">
        <AiOutlineLoading3Quarters
          className="animate-spin text-blue-700"
          size={60}
        />
        {/* <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
          Carregando dados...
        </p> */}
      </div>
    </div>
  );
}
