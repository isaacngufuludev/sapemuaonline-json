import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import BtnPagination from "../../../../components/ui/BtnPagination";
import { usePagination } from "../../../../hooks/UsePagination";
import { ITEMS_PER_PAGE } from "../../../../utils/constants";
import AdminStudentItem from "./AdminStudentItem";

const studentData = [
  {
    name: "Isaac Ngufulu Nzinga Yambi",
    id: 4355,
    class: "11ª Classe",
    course: "Informática",
    genero: "Masculino",
    idade: "29 anos",
  },
  {
    name: "Kinavuide Antonio Afonso David",
    id: 4355,
    class: "11ª Classe",
    course: "Informática",
    genero: "Masculino",
    idade: "29 anos",
  },
  {
    name: "Henriques Manuel Antonio Cidade",
    id: 4355,
    class: "11ª Classe",
    course: "Informática",
    genero: "Masculino",
    idade: "29 anos",
  },
  {
    name: "Dorivaldo Quimanga Quizembe",
    id: 4355,
    class: "11ª Classe",
    course: "Informática",
    genero: "Masculino",
    idade: "29 anos",
  },
];

function AdminStudentList() {
  const {
    currentData,
    currentPage,
    totalPages,
    handlerPrevPage,
    handlerNextPage,
  } = usePagination(studentData, ITEMS_PER_PAGE);

  return (
    <div>
      <ul className="bg-white dark:bg-gray-800 text-sm">
        {currentData.map((item, i) => (
          <AdminStudentItem item={item} i={i} key={i} />
        ))}
      </ul>

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
    </div>
  );
}

export default AdminStudentList;
