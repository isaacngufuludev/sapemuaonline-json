import { useEffect, useState } from "react";
import { useRefresh } from "../contexts/RefreshContext";
import { get } from "../services/api";

export function useMessages() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { refreshKey } = useRefresh();

  async function fetchMessages() {
    try {
      setIsLoading(true);
      const data = await get("messages");
      setMessages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMessages();
  }, [refreshKey]);

  return { error, messages, isLoading, fetchMessages };
}
