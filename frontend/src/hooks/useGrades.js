import { useCallback, useEffect, useState } from "react";
import { useRefresh } from "../contexts/RefreshContext";
import { useToast } from "./useToast";
import { get } from "../services/api";
import {
  getGradesByClass,
  getGradesByStudent,
  getStudentGeneralAverage,
  getSubjectFinalAverage,
  saveOrUpdateGrade,
} from "../services/grades";

export function useGrades() {
  const [grades, setGrades] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { refreshKey, triggerRefresh } = useRefresh();
  const { showError } = useToast();

  const fetchGrades = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await get("grades");
      setGrades(data);
    } catch (err) {
      setError(err.message);
      showError("Erro ao carregar notas.");
    } finally {
      setIsLoading(false);
    }
  }, [showError]);

  useEffect(() => {
    fetchGrades();
  }, [fetchGrades, refreshKey]);

  const saveGrade = useCallback(
    async (payload) => {
      const saved = await saveOrUpdateGrade(payload);
      triggerRefresh();
      return saved;
    },
    [triggerRefresh],
  );

  const fetchByStudent = useCallback(async (studentId) => {
    return getGradesByStudent(studentId);
  }, []);

  const fetchByClass = useCallback(async (classId, options) => {
    return getGradesByClass(classId, options);
  }, []);

  const subjectAverage = useCallback(
    (studentId, subject) => getSubjectFinalAverage(grades, studentId, subject),
    [grades],
  );

  const generalAverage = useCallback(
    (studentId) => getStudentGeneralAverage(grades, studentId),
    [grades],
  );

  return {
    grades,
    isLoading,
    error,
    fetchGrades,
    saveGrade,
    fetchByStudent,
    fetchByClass,
    subjectAverage,
    generalAverage,
  };
}
