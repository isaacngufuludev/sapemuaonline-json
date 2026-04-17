import { useMemo } from "react";
import { useUsers } from "./useUsers";

export function useTeachers() {
  const { users, isLoading } = useUsers();

  const teachers = useMemo(
    () => users.filter((user) => user.role === "teacher"),
    [users],
  );

  return { teachers, isLoading };
}
