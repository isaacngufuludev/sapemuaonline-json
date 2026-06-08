const PASSING_GRADE = 10;
const TERMS = [1, 2, 3];

function isBlank(value) {
  return value == null || String(value).trim() === "";
}

function toNumber(value) {
  if (isBlank(value)) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

export function formatAverage(value) {
  const parsed = toNumber(value);
  if (parsed == null) return "-";
  return Number(parsed.toFixed(2));
}

function average(values) {
  const validValues = values
    .map((value) => toNumber(value))
    .filter((value) => value != null);

  if (!validValues.length) return null;

  const total = validValues.reduce((sum, value) => sum + value, 0);
  return Number((total / validValues.length).toFixed(2));
}

function getTermStatus(negativeCount, gradesCount) {
  if (!gradesCount) {
    return {
      label: "Sem notas lançadas",
      tone: "neutral",
      reason: "Ainda não existem notas lançadas para este trimestre.",
    };
  }

  if (negativeCount === 0) {
    return {
      label: "Aprovado no Trimestre",
      tone: "success",
      reason: "Sem disciplinas negativas no trimestre.",
    };
  }

  if (negativeCount <= 2) {
    return {
      label: "Em Risco",
      tone: "warning",
      reason: "Possui até 2 disciplinas negativas no trimestre.",
    };
  }

  return {
    label: "Reprovado no Trimestre",
    tone: "danger",
    reason: "Possui mais de 2 disciplinas negativas no trimestre.",
  };
}

function hasGradeValue(grade) {
  return [grade.mac, grade.npp, grade.npt, grade.average].some(
    (value) => toNumber(value) != null,
  );
}

function getFinalDecision(negativeCount, hasCompleteYear, hasSubjects) {
  if (!hasSubjects) {
    return {
      label: "Sem dados",
      tone: "neutral",
      reason: "Ainda não existem notas lançadas para calcular o resultado.",
    };
  }

  if (!hasCompleteYear) {
    return {
      label: "Resultado Parcial",
      tone: "warning",
      reason:
        "Ainda existem disciplinas sem notas nos 3 trimestres. O resultado final será fechado após o lançamento completo.",
    };
  }

  if (negativeCount === 0) {
    return {
      label: "Aprovado",
      tone: "success",
      reason: "Todas as disciplinas têm média final igual ou superior a 10.",
    };
  }

  if (negativeCount <= 2) {
    return {
      label: "Exame Extraordinário",
      tone: "warning",
      reason: "Possui até 2 disciplinas com média final inferior a 10.",
    };
  }

  return {
    label: "Reprovado",
    tone: "danger",
    reason: "Possui mais de 2 disciplinas com média final inferior a 10.",
  };
}

export function buildAcademicProgress(grades, expectedSubjects = []) {
  const gradeSubjects = grades.map((grade) => grade.subject).filter(Boolean);
  const subjects = [...new Set([...expectedSubjects, ...gradeSubjects])].sort(
    (a, b) => a.localeCompare(b),
  );

  const termSummaries = TERMS.map((term) => {
    const termGrades = grades.filter((grade) => Number(grade.term) === term);
    const filledTermGrades = termGrades.filter(hasGradeValue);
    const negativeSubjects = termGrades
      .filter((grade) => {
        const average = toNumber(grade.average);
        return average != null && average < PASSING_GRADE;
      })
      .map((grade) => grade.subject);
    const termAverage = average(filledTermGrades.map((grade) => grade.average));

    return {
      term,
      grades: filledTermGrades,
      average: termAverage,
      negativeSubjects,
      negativeCount: negativeSubjects.length,
      status: getTermStatus(negativeSubjects.length, filledTermGrades.length),
    };
  });

  const subjectFinals = subjects.map((subject) => {
    const subjectGrades = grades.filter(
      (grade) => grade.subject === subject && toNumber(grade.average) != null,
    );
    const finalAverage = average(subjectGrades.map((grade) => grade.average));
    const completedTerms = new Set(
      subjectGrades.map((grade) => Number(grade.term)),
    );

    return {
      subject,
      finalAverage,
      completedTerms: completedTerms.size,
      isComplete: TERMS.every((term) => completedTerms.has(term)),
      isNegative: finalAverage != null && finalAverage < PASSING_GRADE,
    };
  });

  const negativeFinals = subjectFinals.filter((item) => item.isNegative);
  const hasCompleteYear =
    subjectFinals.length > 0 && subjectFinals.every((item) => item.isComplete);

  return {
    termSummaries,
    subjectFinals,
    negativeFinals,
    finalDecision: getFinalDecision(
      negativeFinals.length,
      hasCompleteYear,
      subjectFinals.length > 0,
    ),
    hasCompleteYear,
  };
}
