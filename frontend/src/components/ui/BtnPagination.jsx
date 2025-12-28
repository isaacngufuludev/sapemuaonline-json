function BtnPagination({ children, onClick, disabled }) {
  return (
    <button
      className={` text-white px-2 py-2 font-semibold ${
        disabled ? "opacity-50 cursor-not-allowed " : "bg-blue-700"
      } `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default BtnPagination;
