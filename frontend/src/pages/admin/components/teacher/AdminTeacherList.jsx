import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import BtnPagination from "../../../../components/ui/BtnPagination";
import { usePagination } from "../../../../hooks/UsePagination";
import { ITEMS_PER_PAGE } from "../../../../utils/constants";
import AdminTeacherItem from "./AdminTeacherItem";

const teacherData = [
  {
    name: "Isaac Ngufulu Nzinga Yambi",
    id: 4355,
    qualification: "Técnico Médio",
    telefone: "+244 930886401",
    genero: "Masculino",
    idade: "29 anos",
    email: "isaacngufulu70@gmail.com",
    formation: "Informática",
  },
  {
    name: "Kinavuide Antonio Afonso David",
    id: 4355,
    qualification: "Licenciatura",
    telefone: "+244 930886401",
    genero: "Masculino",
    idade: "29 anos",
    email: "isaacngufulu70@gmail.com",
    formation: "Informática",
  },
  {
    name: "Henriques Manuel Antonio Cidade",
    id: 4355,
    qualification: "Técnico Médio",
    telefone: "+244 930886401",
    genero: "Masculino",
    idade: "29 anos",
    email: "isaacngufulu70@gmail.com",
    formation: "Informática",
  },
  {
    name: "Dorivaldo Quimanga Quizembe",
    id: 4355,
    qualification: "Licenciatura",
    telefone: "+244 930886401",
    genero: "Masculino",
    idade: "29 anos",
    email: "isaacngufulu70@gmail.com",
    formation: "Informática",
  },
];

function AdminTeacherList() {
  const {
    currentData,
    currentPage,
    totalPages,
    handlerPrevPage,
    handlerNextPage,
  } = usePagination(teacherData, ITEMS_PER_PAGE);

  return (
    <div>
      <ul className="bg-white dark:bg-gray-800 text-sm">
        {currentData.map((item, i) => (
          <AdminTeacherItem item={item} i={i} key={i} />
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

export default AdminTeacherList;
