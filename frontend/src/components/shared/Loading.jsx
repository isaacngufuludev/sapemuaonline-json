import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading({ size = 28, type }) {
  const base = "animate-spin";

  const styles = {
    small: base + " text-white",
    medium: base + " text-white",
    large: base + " text-white",
  };

  return (
    <div className="flex items-center justify-center py-6">
      <AiOutlineLoading3Quarters className={styles[type]} size={size} />
    </div>
  );
}
