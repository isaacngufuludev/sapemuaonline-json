import { useEffect, useState } from "react";
import { get } from "../services/api";
import { useRefresh } from "../contexts/RefreshContext";

export function useClasses() {
  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { refreshKey } = useRefresh();

  useEffect(() => {
    fetchClasses();
  }, [refreshKey]);

  async function fetchClasses() {
    try {
      setIsLoading(true);
      const data = await get("classes");
      setClasses(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { classes, isLoading, error, fetchClasses };
}
