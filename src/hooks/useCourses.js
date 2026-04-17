import { useEffect, useState } from "react";
import { get } from "../services/api";
import { useRefresh } from "../contexts/RefreshContext";

export function useCourses() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { refreshKey } = useRefresh();

  useEffect(() => {
    fetchCourses();
  }, [refreshKey]);

  async function fetchCourses() {
    try {
      setIsLoading(true);
      const data = await get("courses");
      setCourses(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { courses, isLoading, error, fetchCourses };
}
