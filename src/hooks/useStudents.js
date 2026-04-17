import { useMemo } from "react";
import { useUsers } from "./useUsers";

export function useStudents() {
  const { users, isLoading } = useUsers();

  const students = useMemo(
    () => users.filter((user) => user.role === "student"),
    [users],
  );

  return { students, isLoading };
}
