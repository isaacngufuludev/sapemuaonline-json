import { FiChevronUp } from "react-icons/fi";

function TopButton() {
  return (
    <button className="text-left bg-blue-700 text-white p-3 rounded-full text-lg fixed right-7 top-3/4">
      <a href="#">
        <FiChevronUp />
      </a>
    </button>
  );
}

export default TopButton;
