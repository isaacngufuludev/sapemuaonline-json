import { get, patch, post } from "./api";

const MIN_GRADE = 0;
const MAX_GRADE = 20;

function isBlank(value) {
  return value == null || String(value).trim() === "";
}

function toNumber(value) {
  if (isBlank(value)) return NaN;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : NaN;
}

export function calculateAverage(mac, npp, npt) {
  const values = [mac, npp, npt].map((value) => toNumber(value));

  if (values.some((value) => Number.isNaN(value))) return "";

  return Math.round(values.reduce((sum, value) => sum + value, 0) / 3);
}

export function validateGradeRange(value, label) {
  if (isBlank(value)) return "";

  const parsed = toNumber(value);

  if (Number.isNaN(parsed)) {
    throw new Error(`${label} deve ser numérico.`);
  }

  if (parsed < MIN_GRADE || parsed > MAX_GRADE) {
    throw new Error(`${label} deve estar entre ${MIN_GRADE} e ${MAX_GRADE}.`);
  }

  return parsed;
}

function hasAverage(grade) {
  return !Number.isNaN(toNumber(grade.average));
}

export function normalizeTerm(term) {
  const parsed = toNumber(term);
  if (![1, 2, 3].includes(parsed)) {
    throw new Error("Trimestre inválido. Use 1, 2 ou 3.");
  }
  return parsed;
}

export function ensureTeacherPermission({ teacher, subject, turmaId }) {
  if (!teacher?.id) {
    throw new Error("Professor inválido.");
  }

  if (!Array.isArray(teacher.subjects) || !teacher.subjects.includes(subject)) {
    throw new Error("Você não pode lançar notas para esta disciplina.");
  }

  if (!Array.isArray(teacher.turmasId) || !teacher.turmasId.includes(turmaId)) {
    throw new Error("Você não está autorizado para esta turma.");
  }
}

function findExistingGrade(grades, { studentId, subject, term }) {
  return grades.find(
    (grade) =>
      grade.student_id === studentId &&
      grade.subject === subject &&
      Number(grade.term) === Number(term),
  );
}

export async function getGradesByStudent(studentId) {
  return get(`grades?student_id=${studentId}`);
}

export async function getGradesByClass(classId, { term } = {}) {
  const students = await get(`users?role=student&classId=${classId}`);
  const studentIds = new Set(students.map((student) => student.id));
  const grades = await get("grades");

  return grades.filter((grade) => {
    if (!studentIds.has(grade.student_id)) return false;
    if (term == null) return true;
    return Number(grade.term) === Number(term);
  });
}

export async function saveOrUpdateGrade({
  student,
  teacher,
  turmaId,
  subject,
  term,
  mac,
  npp,
  npt,
}) {
  if (!student?.id) throw new Error("Aluno inválido.");
  if (!subject) throw new Error("Selecione uma disciplina.");

  const normalizedTerm = normalizeTerm(term);
  ensureTeacherPermission({ teacher, subject, turmaId });

  if (student.turmaId !== turmaId) {
    throw new Error("Aluno não pertence à turma selecionada.");
  }

  const validMac = validateGradeRange(mac, "MAC");
  const validNpp = validateGradeRange(npp, "NPP");
  const validNpt = validateGradeRange(npt, "NPT");
  const average = calculateAverage(validMac, validNpp, validNpt);
  const now = new Date().toISOString();

  const allGrades = await get("grades", { forceFresh: true });
  const existing = findExistingGrade(allGrades, {
    studentId: student.id,
    subject,
    term: normalizedTerm,
  });

  const payload = {
    student_id: student.id,
    teacher_id: teacher.id,
    subject,
    term: normalizedTerm,
    mac: validMac,
    npp: validNpp,
    npt: validNpt,
    average,
    updated_at: now,
  };

  if (existing) {
    return patch("grades", existing.id, payload);
  }

  return post("grades", {
    ...payload,
    created_at: now,
  });
}

export function getSubjectFinalAverage(grades, studentId, subject) {
  const matches = grades.filter(
    (grade) =>
      grade.student_id === studentId &&
      grade.subject === subject &&
      hasAverage(grade),
  );

  if (!matches.length) return null;
  const total = matches.reduce((sum, grade) => sum + Number(grade.average), 0);
  return Number((total / matches.length).toFixed(2));
}

export function getStudentGeneralAverage(grades, studentId) {
  const matches = grades.filter(
    (grade) => grade.student_id === studentId && hasAverage(grade),
  );

  if (!matches.length) return null;
  const total = matches.reduce((sum, grade) => sum + Number(grade.average), 0);
  return Number((total / matches.length).toFixed(2));
}
