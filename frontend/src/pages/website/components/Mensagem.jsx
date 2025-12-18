const Mensagem = ({ mensagem }) => {
  const isBot = mensagem.remetente === "bot";
  return (
    <li className={`flex ${isBot ? `justify-start ` : `justify-end`}`}>
      <div
        className={`max-w-xs px-4 py-3 rounded-2xl cursor-pointer
              ${
                isBot
                  ? ` bg-gray-100 dark:bg-gray-800`
                  : ` text-white bg-blue-700`
              }
            `}
      >
        <p className="text-sm "> {mensagem.text} </p>
      </div>
    </li>
  );
};

export default Mensagem;
