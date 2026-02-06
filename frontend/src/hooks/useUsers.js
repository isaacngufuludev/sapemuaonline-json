import { useEffect, useState } from "react";
import { get } from "../services/api";
import { useRefresh } from "../contexts/RefreshContext";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { refreshKey } = useRefresh();

  async function fetchUsers() {
    try {
      setLoading(true);
      const data = await get("users");
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [refreshKey]);

  return { users, isLoading, error, fetchUsers };
}
