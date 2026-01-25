import { useUsers } from "./useUsers";

export function useStudents() {
  const { users, isLoading } = useUsers();

  const students = users.filter((user) => user.role === "student");

  return { students, isLoading };
}
