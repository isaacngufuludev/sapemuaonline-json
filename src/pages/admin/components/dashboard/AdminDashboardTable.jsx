import BtnPagination from "../../../../components/ui/BtnPagination";
import Title3 from "../../../../components/ui/Title3";

import { useEffect, useMemo, useState } from "react";
import { usePagination } from "../../../../hooks/UsePagination";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ITEMS_PER_PAGE } from "../../../../utils/constants";
import { usePDFExport } from "../../../../contexts/PDFExportContext";
import { useStudents } from "../../../../hooks/useStudents";
import { useTeachers } from "../../../../hooks/useTeachers";
import { useCourses } from "../../../../hooks/useCourses";
import { useTurmas } from "../../../../hooks/useTurmas";
import { useNews } from "../../../../hooks/useNews";
import { getLoginEvents } from "../../../../services/loginEvents";
import { getSystemEvents } from "../../../../services/systemEvents";
import { formateDate } from "../../../../utils/helpers";

function getLatestRecord(items = [], dateKeys = []) {
  if (!items?.length) return null;

  const recordsWithDate = items.map((item) => {
    const date = dateKeys
      .map((key) => item?.[key])
      .find((value) => value != null && value !== "");

    let timestamp = 0;
    if (date) {
      const parsedDate = new Date(date);
      timestamp = isNaN(parsedDate.getTime()) ? 0 : parsedDate.getTime();
    }

    return { item, timestamp };
  });

  return recordsWithDate
    .sort((a, b) => b.timestamp - a.timestamp)
    .map((record) => record.item)[0];
}

function getTimeLabel(item, dateKeys = []) {
  const date = dateKeys
    .map((key) => item?.[key])
    .find((value) => value != null && value !== "");

  return date ? formateDate(date, "relative") : "recentemente";
}

function getTimestamp(item, dateKeys = []) {
  const date = dateKeys
    .map((key) => item?.[key])
    .find((value) => value != null && value !== "");

  if (!date) return new Date().toISOString();

  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) return new Date().toISOString();

  return parsedDate.toISOString();
}

function AdminDashboardTable() {
  const { isExporting } = usePDFExport();
  const { students } = useStudents();
  const { teachers } = useTeachers();
  const { courses } = useCourses();
  const { turmas } = useTurmas();
  const { news } = useNews();

  const [loginEvents, setLoginEvents] = useState([]);
  const [systemEvents, setSystemEvents] = useState([]);

  useEffect(() => {
    setLoginEvents(getLoginEvents());
    setSystemEvents(getSystemEvents());

    const handleStorage = () => {
      setLoginEvents(getLoginEvents());
      setSystemEvents(getSystemEvents());
    };

    const handleSystemEvents = () => setSystemEvents(getSystemEvents());

    window.addEventListener("storage", handleStorage);
    window.addEventListener("system-events-changed", handleSystemEvents);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("system-events-changed", handleSystemEvents);
    };
  }, []);

  const latestStudent = useMemo(
    () => getLatestRecord(students, ["dateIn", "createdAt", "created_at"]),
    [students],
  );

  const latestTeacher = useMemo(
    () => getLatestRecord(teachers, ["dateIn", "createdAt", "created_at"]),
    [teachers],
  );

  const latestCourse = useMemo(
    () => getLatestRecord(courses, ["dateIn", "createdAt", "created_at"]),
    [courses],
  );

  const latestTurma = useMemo(
    () => getLatestRecord(turmas, ["dateIn", "createdAt", "created_at"]),
    [turmas],
  );

  const latestNews = useMemo(
    () => getLatestRecord(news, ["date", "createdAt", "created_at"]),
    [news],
  );

  const loginUpdates = useMemo(
    () =>
      loginEvents.map((event) => ({
        id: event.id,
        action: `${
          event.role === "teacher" ? "Professor" : "Estudante"
        } ${event.userName} iniciou sessão`,
        type: "Login",
        time: formateDate(event.timestamp, "relative"),
        timestamp: event.timestamp,
        status: "success",
      })),
    [loginEvents],
  );

  const systemUpdates = useMemo(
    () =>
      systemEvents.map((event) => ({
        id: event.id,
        action: event.action,
        type: event.type,
        time: formateDate(event.timestamp, "relative"),
        timestamp: event.timestamp,
        status: event.status || "success",
      })),
    [systemEvents],
  );

  const updates = useMemo(() => {
    const items = [...loginUpdates, ...systemUpdates];

    if (latestStudent) {
      items.push({
        id: "student",
        action: `Novo estudante cadastrado: ${latestStudent.name}`,
        type: "Estudante",
        time: getTimeLabel(latestStudent, ["dateIn", "createdAt", "created_at"]),
        timestamp: getTimestamp(latestStudent, ["dateIn", "createdAt", "created_at"]),
        status: "success",
      });
    }

    if (latestTeacher) {
      items.push({
        id: "teacher",
        action: `Novo professor cadastrado: ${latestTeacher.name}`,
        type: "Professor",
        time: getTimeLabel(latestTeacher, ["dateIn", "createdAt", "created_at"]),
        timestamp: getTimestamp(latestTeacher, ["dateIn", "createdAt", "created_at"]),
        status: "success",
      });
    }

    if (latestCourse) {
      items.push({
        id: "course",
        action: `Novo curso cadastrado: ${latestCourse.name || latestCourse.title || "curso novo"}`,
        type: "Curso",
        time: getTimeLabel(latestCourse, ["dateIn", "createdAt", "created_at"]),
        timestamp: getTimestamp(latestCourse, ["dateIn", "createdAt", "created_at"]),
        status: "success",
      });
    }

    if (latestTurma) {
      items.push({
        id: "turma",
        action: `Nova turma criada: ${latestTurma.name || latestTurma.title || "turma nova"}`,
        type: "Turma",
        time: getTimeLabel(latestTurma, ["dateIn", "createdAt", "created_at"]),
        timestamp: getTimestamp(latestTurma, ["dateIn", "createdAt", "created_at"]),
        status: "success",
      });
    }

    if (latestNews) {
      items.push({
        id: "news",
        action: `Nova notícia publicada: ${latestNews.title || latestNews.name || "notícia"}`,
        type: "Notícia",
        time: getTimeLabel(latestNews, ["date", "createdAt", "created_at"]),
        timestamp: getTimestamp(latestNews, ["date", "createdAt", "created_at"]),
        status: "success",
      });
    }

    return items.length
      ? items.sort((a, b) => {
          const aTime = new Date(a.timestamp).getTime();
          const bTime = new Date(b.timestamp).getTime();
          return (isNaN(bTime) ? 0 : bTime) - (isNaN(aTime) ? 0 : aTime);
        })
      : [
          {
            id: "empty",
            action: "Nenhuma atualização recente disponível",
            type: "Sistema",
            time: "-",
            status: "pending",
          },
        ];
  }, [latestStudent, latestTeacher, latestCourse, latestTurma, latestNews]);

  const {
    currentData,
    currentPage,
    totalPages,
    handlerPrevPage,
    handlerNextPage,
  } = usePagination(updates, ITEMS_PER_PAGE);

  const dataToDisplay = isExporting ? updates : currentData;

  return (
    <div>
      <Title3>Atualizações Recentes</Title3>
      <div className="mt-4 mb-7 rounded-md bg-white px-3 py-3 dark:bg-gray-800 sm:px-5 sm:py-4">
        <div className="flex flex-col gap-3 md:hidden">
          {dataToDisplay.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-slate-200 p-3 shadow-sm dark:border-gray-700 sm:p-4"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">Ação</p>
              <p className="break-words text-sm font-semibold">{item.action}</p>

              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Tipo
              </p>
              <p className="break-words text-sm">{item.type}</p>

              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Data
              </p>
              <p className="break-words text-sm capitalize">{item.time}</p>

              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Estado
              </p>
              <span
                className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                  item.status === "success"
                    ? "bg-green-100 text-green-700 dark:bg-green-500 dark:text-green-100"
                    : item.status === "pending"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500 dark:text-yellow-100"
                      : "bg-red-100 text-red-700 dark:bg-red-500 dark:text-red-100"
                }`}
              >
                {item.status}
              </span>
            </article>
          ))}
        </div>

        <table className="hidden w-full text-sm md:table">
          <thead className="border-b border-slate-200 dark:border-gray-700">
            <tr>
              <th className="text-left py-3 text-sm font-semibold">Ação</th>
              <th className="text-left py-3 text-sm font-semibold">Tipo</th>
              <th className="text-left py-3 text-sm font-semibold">Data</th>
              <th className="text-left py-3 text-sm font-semibold">Estado</th>
            </tr>
          </thead>

          <tbody>
            {dataToDisplay.map((item) => (
              <tr
                key={item.id}
                className="border-b last:border-0 border-slate-200 dark:border-gray-700"
              >
                <td className="py-4">{item.action}</td>
                <td>{item.type}</td>
                <td className="capitalize">{item.time}</td>
                <td>
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      item.status === "success"
                        ? "bg-green-100 text-green-700 dark:bg-green-500 dark:text-green-100"
                        : item.status === "pending"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500 dark:text-yellow-100"
                          : "bg-red-100 text-red-700 dark:bg-red-500 dark:text-red-100"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!isExporting && totalPages > 1 ? (
        <div className="flex gap-2 justify-end mt-3 items-center ">
          <BtnPagination onClick={handlerPrevPage} disabled={currentPage === 1}>
            <BsChevronLeft />
          </BtnPagination>
          <p>
            {currentPage} de {totalPages}
          </p>
          <BtnPagination
            onClick={handlerNextPage}
            disabled={currentPage === totalPages}
          >
            <BsChevronRight />
          </BtnPagination>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminDashboardTable;
