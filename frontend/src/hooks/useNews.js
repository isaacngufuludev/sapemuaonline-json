import { useEffect, useState } from "react";
import { useRefresh } from "../contexts/RefreshContext";
import { get } from "../services/api";

export function useNews() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { refreshKey } = useRefresh();

  useEffect(() => {
    fetchNews();
  }, [refreshKey]);

  async function fetchNews() {
    try {
      setIsLoading(true);
      const data = await get("news");
      setNews(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { news, isLoading, error, fetchNews };
}
