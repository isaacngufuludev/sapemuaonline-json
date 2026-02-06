import ChatMessage from "./ChatMessage";

const mensagens = [
  {
    id: 1,
    text: "Olá! sou seu assistente de suporte, como posso ajudar voçê hoje?",
    remetente: "bot",
  },
  {
    id: 2,
    text: "Quem foi o teu desenvolvedor?",
    remetente: "usuario",
  },
  {
    id: 3,
    text: `Fui desenvolvido por finalistas do SAPEMUA para a prova de aptdão profissional que são: DORIVALDO QUIZEMBE, HENRIQUES MANUEL, ISAAC NGUFULU YAMBI, LUZIA AGOSTINHO e KINAVUIDE DAVID
    `,
    remetente: "bot",
  },
  {
    id: 4,
    text: "Quando foi fundado a escola do SAPEMUA?",
    remetente: "usuario",
  },
  {
    id: 5,
    text: "O Instituto Politécnico Privado SAPEMUA foi fundado em 2007...",
    remetente: "bot",
  },
  {
    id: 4,
    text: "Quando foi fundado a escola do SAPEMUA?",
    remetente: "usuario",
  },
  {
    id: 5,
    text: "O Instituto Politécnico Privado SAPEMUA foi fundado em 2007...",
    remetente: "bot",
  },
  {
    id: 6,
    text: "Quando foi fundado a escola do SAPEMUA?",
    remetente: "usuario",
  },
  {
    id: 8,
    text: "O Instituto Politécnico Privado SAPEMUA foi fundado em 2007...",
    remetente: "bot",
  },
];

const ChatMessageList = () => {
  return (
    <ul className="flex-1 overflow-y-scroll scrollbar-none h-[500px] 2xl:h-[600px] p-2 space-y-4 no-scrollbar">
      {mensagens.map((item) => (
        <ChatMessage key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ChatMessageList;
