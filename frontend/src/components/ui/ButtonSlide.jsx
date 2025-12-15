function ButtonSlide({ children, onClick }) {
  return (
    <button
      className="dark:bg-blue-700 bg-blue-300 px-3 py-2 rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonSlide;
