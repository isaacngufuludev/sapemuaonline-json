import { useEffect, useState } from "react";
import { get } from "../services/api";
import { useRefresh } from "../contexts/RefreshContext";

export function useTurmas() {
  const [turmas, setTurmas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const { refreshKey } = useRefresh();

  useEffect(() => {
    fetchTurmas();
  }, [refreshKey]);

  async function fetchTurmas() {
    try {
      setIsLoading(true);
      const data = await get("turmas");
      setTurmas(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { turmas, isLoading, error, fetchTurmas };
}
