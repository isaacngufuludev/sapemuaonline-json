import { useMemo } from "react";
import { useClasses } from "./useClasses";

export function useClassYearById() {
  const { classes } = useClasses();

  const classYearById = useMemo(
    () =>
      classes.reduce((acc, classItem) => {
        acc[classItem.id] = classItem.classYear;
        return acc;
      }, {}),
    [classes],
  );

  return { classYearById };
}
