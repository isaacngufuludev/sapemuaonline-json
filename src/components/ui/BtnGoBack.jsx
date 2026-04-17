import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function BtnGoBack() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="absolute z-10 2xl:left-4 lg:left-3 left-3 sm:left-10 border-stone-300 rounded-md dark:border-gray-700 py-1 px-2 border text-lg top-10 flex gap-1 items-center"
    >
      <BsChevronLeft />
      <p className="text-sm">Voltar</p>
    </button>
  );
}

export default BtnGoBack;
