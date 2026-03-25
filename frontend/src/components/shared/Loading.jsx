import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading({ size = 25, type = "white" }) {
  const base = "animate-spin ";

  const styles = {
    blue: base + " text-blue-700",
    white: base + " text-white",
  };

  return (
    <div className="flex items-center justify-center">
      <AiOutlineLoading3Quarters className={styles[type]} size={size} />
    </div>
  );
}
