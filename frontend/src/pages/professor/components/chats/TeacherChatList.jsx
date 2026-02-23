import Title from "../../../../components/ui/Title";
import TeacherChatItem from "./TeacherChatItem";

const conversations = [
  {
    id: 1,
    name: "Informática 11-BM",
    lastMessage: "Bom dia professor!",
    time: "10:30",
    unread: 2,
  },
  {
    id: 2,
    name: "Informática 12-BM",
    lastMessage: "Sobre o trabalho...",
    time: "09:15",
    unread: 0,
  },
  {
    id: 3,
    name: "Eletrônica 11-BM",
    lastMessage: "Quando é a prova?",
    time: "Ontem",
    unread: 1,
  },
  {
    id: 4,
    name: "Gestão 10-BM",
    lastMessage: "Obrigado professor",
    time: "Seg",
    unread: 0,
  },
  {
    id: 5,
    name: "Contabilidade 9-A",
    lastMessage: "Dúvida no exercício 5",
    time: "Ter",
    unread: 3,
  },
  {
    id: 6,
    name: "Matemática 10-B",
    lastMessage: "Fórmula da derivada",
    time: "Seg",
    unread: 0,
  },
  // {
  //   id: 7,
  //   name: "Física 11-A",
  //   lastMessage: "Experimento de amanhã",
  //   time: "Ontem",
  //   unread: 1,
  // },
  // {
  //   id: 8,
  //   name: "Química 12-B",
  //   lastMessage: "Reação química",
  //   time: "Qua",
  //   unread: 0,
  // },
  // {
  //   id: 9,
  //   name: "Português 8-A",
  //   lastMessage: "Análise sintática",
  //   time: "Qui",
  //   unread: 2,
  // },
  // {
  //   id: 10,
  //   name: "Inglês 9-B",
  //   lastMessage: "Listening exercise",
  //   time: "Sex",
  //   unread: 0,
  // },
  // {
  //   id: 11,
  //   name: "Biologia 10-A",
  //   lastMessage: "Fotossíntese",
  //   time: "Hoje",
  //   unread: 1,
  // },
  // {
  //   id: 12,
  //   name: "História 9-C",
  //   lastMessage: "Revolução Industrial",
  //   time: "Ontem",
  //   unread: 0,
  // },
  // {
  //   id: 13,
  //   name: "Geografia 11-B",
  //   lastMessage: "Clima tropical",
  //   time: "Seg",
  //   unread: 2,
  // },
  // {
  //   id: 14,
  //   name: "Educação Física 8-B",
  //   lastMessage: "Torneio escolar",
  //   time: "Ter",
  //   unread: 0,
  // },
  // {
  //   id: 15,
  //   name: "Artes 10-D",
  //   lastMessage: "Projeto artístico",
  //   time: "Qua",
  //   unread: 1,
  // },
];

function TeacherChatList() {
  return (
    <div className="fixed dark:bg-gray-900 bg-gray-100 left-[230px] top-[65px] w-[300px] lg:w-[400px] h-[calc(100dvh-65px)] border-r border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden z-30">
      <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">Mensagens</h1>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Turmas Vinculadas
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {conversations.map((item) => (
            <TeacherChatItem item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TeacherChatList;
