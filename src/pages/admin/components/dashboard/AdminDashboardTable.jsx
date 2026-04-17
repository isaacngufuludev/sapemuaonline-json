import BtnPagination from "../../../../components/ui/BtnPagination";
import Title3 from "../../../../components/ui/Title3";

import { usePagination } from "../../../../hooks/UsePagination";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ITEMS_PER_PAGE } from "../../../../utils/constants";
import { usePDFExport } from "../../../../contexts/PDFExportContext";

const updates = [
  {
    id: 1,
    action: "Novo estudante registrado",
    user: "Admin",
    time: "Agora",
    status: "success",
  },
  {
    id: 2,
    action: "Professor adicionado",
    user: "Admin",
    time: "5 min atrás",
    status: "success",
  },
  {
    id: 3,
    action: "Turma criada",
    user: "Professor João",
    time: "20 min atrás",
    status: "pending",
  },
  {
    id: 4,
    action: "Curso atualizado",
    user: "Admin",
    time: "Hoje, 09:15",
    status: "success",
  },
  {
    id: 5,
    action: "Falha no login",
    user: "Sistema",
    time: "Hoje, 08:50",
    status: "error",
  },
];

function AdminDashboardTable() {
  const { isExporting } = usePDFExport();

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
                Usuário
              </p>
              <p className="break-words text-sm">{item.user}</p>

              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Data
              </p>
              <p className="break-words text-sm">{item.time}</p>

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
              <th className="text-left py-3 text-sm font-semibold">Usuário</th>
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
                <td>{item.user}</td>
                <td>{item.time}</td>
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
