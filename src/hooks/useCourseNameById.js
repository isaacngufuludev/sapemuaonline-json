import { useMemo } from "react";
import { useCourses } from "./useCourses";

export function useCourseNameById() {
  const { courses } = useCourses();

  const courseNameById = useMemo(
    () =>
      courses.reduce((acc, course) => {
        acc[course.id] = course.courseName;
        return acc;
      }, {}),
    [courses],
  );

  return { courseNameById };
}
