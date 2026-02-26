import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ITEMS_PER_PAGE } from "../../../../utils/constants";
import { usePagination } from "../../../../hooks/UsePagination";
import BtnPagination from "../../../../components/ui/BtnPagination";
import AdminStudentItem from "./AdminStudentItem";
import Loading from "../../../../components/shared/Loading";
import { useStudents } from "../../../../hooks/useStudents";

function AdminStudentList({ students = [] }) {
  const { isLoading } = useStudents();

  const {
    currentData,
    currentPage,
    totalPages,
    handlerPrevPage,
    handlerNextPage,
  } = usePagination(students, ITEMS_PER_PAGE);

  return (
    <div>
      <div>
        {isLoading ? (
          <Loading type="blue" size={40} />
        ) : students.length === 0 ? (
          <div className="rounded-md bg-white p-4 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400">
            Nenhum estudante encontrado para os filtros aplicados.
          </div>
        ) : (
          <ul className="bg-white dark:bg-gray-800 text-sm">
            {currentData.map((item, i) => (
              <AdminStudentItem item={item} i={i} key={i} />
            ))}
          </ul>
        )}
      </div>

      {totalPages > 1 ? (
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

export default AdminStudentList;
