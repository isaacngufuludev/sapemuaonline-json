import StudentChatMessageItem from "./StudentChatMessageItem";

const messages = [
  {
    id: 1,
    sender: "João Silva",
    message:
      "Bom dia professor! Gostaria de tirar uma dúvida sobre o trabalho de algoritmos.",
    time: "10:30",
    isMine: false,
  },
  {
    id: 2,
    sender: "Professor",
    message: "Bom dia João! Claro, pode perguntar.",
    time: "10:32",
    isMine: true,
  },
  {
    id: 3,
    sender: "João Silva",
    message:
      "Na questão 3, quando fala sobre complexidade, qual seria o melhor algoritmo para usar?",
    time: "10:33",
    isMine: false,
  },
  {
    id: 4,
    sender: "Maria Santos",
    message: "Oi professor, também tenho dúvida nessa questão.",
    time: "10:35",
    isMine: false,
  },
  {
    id: 5,
    sender: "Professor",
    message:
      "Para complexidade, o algoritmo de ordenação mais eficiente seria o QuickSort com complexidade O(n log n) na média.",
    time: "10:36",
    isMine: true,
  },
  {
    id: 6,
    sender: "João Silva",
    message: "Entendi! Mas e quando temos dados já parcialmente ordenados?",
    time: "10:37",
    isMine: false,
  },
  {
    id: 7,
    sender: "Professor",
    message:
      "Nesse caso, o Insertion Sort pode ser mais eficiente pois tem complexidade O(n) no melhor caso.",
    time: "10:38",
    isMine: true,
  },
  {
    id: 8,
    sender: "Carlos Eduardo",
    message:
      "Professor, posso entregar o trabalho amanhã? Tive problemas com o computador.",
    time: "10:40",
    isMine: false,
  },
  {
    id: 9,
    sender: "Professor",
    message:
      "Carlos, tudo bem, mas lembre-se que o prazo é importante. Traga uma justificativa por escrito.",
    time: "10:41",
    isMine: true,
  },
  {
    id: 10,
    sender: "Ana Paula",
    message:
      "Oi professor! Sobre a aula de hoje, não entendi o conceito de recursão. Pode explicar melhor?",
    time: "10:45",
    isMine: false,
  },
  {
    id: 11,
    sender: "Professor",
    message:
      "Claro Ana! Recursão é quando uma função chama a si mesma. Por exemplo, o cálculo de fatorial: fatorial(n) = n * fatorial(n-1), com caso base fatorial(0) = 1.",
    time: "10:46",
    isMine: true,
  },
  {
    id: 12,
    sender: "João Silva",
    message: "Obrigado professor! Agora entendi melhor sobre os algoritmos.",
    time: "10:47",
    isMine: false,
  },
];

function StudentChatMessagesList() {
  return (
    <ul className="space-y-6">
      {messages.map((item) => (
        <StudentChatMessageItem item={item} />
      ))}
    </ul>
  );
}

export default StudentChatMessagesList;
