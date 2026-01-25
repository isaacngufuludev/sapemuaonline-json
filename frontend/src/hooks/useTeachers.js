import { useUsers } from "./useUsers";

export function useTeachers() {
  const { users, isLoading } = useUsers();

  const teachers = users.filter((user) => user.role === "teacher");

  return { teachers, isLoading };
}
