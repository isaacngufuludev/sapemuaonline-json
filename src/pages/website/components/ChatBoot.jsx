import { useState } from "react";

import ChatHeader from "./ChatHeader";
import ChatForm from "./ChatForm";
import ChatMessageList from "./ChatMessagesList";

function ChatBoot() {
  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      text: "Olá! sou seu assistente de suporte, como posso ajudar voçê hoje?",
      remetente: "bot",
    },
  ]);

  const [loading, setLoading] = useState(false);

  async function enviarMensagem(texto) {
    if (!texto.trim()) return;

    const novaMensagem = {
      id: Date.now(),
      text: texto,
      remetente: "usuario",
    };

    setMensagens((prev) => [...prev, novaMensagem]);

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: texto,
        }),
      });

      const data = await response.json();

      setLoading(false);

      const respostaBot = {
        id: Date.now() + 1,
        text: data.resposta,
        remetente: "bot",
      };

      setMensagens((prev) => [...prev, respostaBot]);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  }

  return (
    <div className="fixed z-30 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-7 top-2 bottom-2 md:top-[10%] md:bottom-24 w-[calc(100vw-1rem)] md:w-full max-w-[400px] lg:max-w-[450px] p-3 sm:p-4 bg-white dark:bg-gray-900 rounded-2xl border-[0.1px] border-stone-300 dark:border-gray-700 flex flex-col overflow-hidden">
      <ChatHeader />

      <ChatMessageList mensagens={mensagens} loading={loading} />

      <ChatForm enviarMensagem={enviarMensagem} />
    </div>
  );
}

export default ChatBoot;
