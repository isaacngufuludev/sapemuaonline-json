function InputMessages({ value, onChange, onKeyPress, disabled = false }) {
  return (
    <input
      className="focus:ring-1 dark:bg-gray-800 dark:text-white h-8 md:h-10 text-xs md:text-sm dark:border-gray-700 ring-blue-700 pl-4 w-full border border-stone-300 focus:outline-none rounded-full disabled:cursor-not-allowed disabled:opacity-60"
      type="text"
      placeholder="Digite a sua mensagem..."
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      disabled={disabled}
    />
  );
}

export default InputMessages;
