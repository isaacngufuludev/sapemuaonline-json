import BtnPagination from "../../../../components/ui/BtnPagination";
import Title3 from "../../../../components/ui/Title3";

import { usePagination } from "../../../../hooks/UsePagination";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ITEMS_PER_PAGE } from "../../../../utils/constants";
import AdminButton from "../AdminButton";
import { usePDFExport } from "./AdminDashboardLayout";

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
      <div className="bg-white rounded-md px-5 mt-4 dark:bg-gray-800 mb-7">
        <table className="w-full text-sm">
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
                    className={`px-2 py-1 rounded-full text-xs font-medium
                ${
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
