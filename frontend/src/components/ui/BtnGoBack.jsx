import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function BtnGoBack() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute left-5 text-lg top-10 flex gap-1 items-center"
    >
      <BsChevronLeft />
      <p className="text-sm">Voltar</p>
    </button>
  );
}

export default BtnGoBack;
