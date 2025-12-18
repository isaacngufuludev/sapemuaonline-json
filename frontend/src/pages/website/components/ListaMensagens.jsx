import Mensagem from "./Mensagem";

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
    id: 4,
    text: "Quando foi fundado a escola do SAPEMUA?",
    remetente: "usuario",
  },
  {
    id: 5,
    text: "O Instituto Politécnico Privado SAPEMUA foi fundado em 2007...",
    remetente: "bot",
  },
];

const ListaMensagens = () => {
  return (
    <ul className="flex-1 overflow-y-scroll scrollbar-none h-[550px] p-4 space-y-4 no-scrollbar">
      {mensagens.map((mensagem) => (
        <Mensagem key={mensagem.id} mensagem={mensagem} />
      ))}
    </ul>
  );
};

export default ListaMensagens;
