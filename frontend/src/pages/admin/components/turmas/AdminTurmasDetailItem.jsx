import Title4 from "../../../../components/ui/Title4";
import Title3 from "../../../../components/ui/Title3";
import { Links, Outlet } from "react-router-dom";
import AdminTurmasLinks from "./AdminTurmasLinks";

function AdminTurmasDetailItem({ item }) {
  return (
    <>
      <li className="rounded-md bg-white dark:bg-gray-800 flex flex-col gap-3 border-[0.1px] dark:border-gray-700 border-slate-200">
        <div className="flex justify-between items-center py-3 px-5 border-b-[0.1px] dark:border-gray-700 border-slate-200">
          <Title3>Turma</Title3>
          <p className="text-sm dark:bg-green-500 bg-green-200 text-green-700 dark:text-green-100 py-1 px-3 rounded-full">
            activo
          </p>
        </div>
        <div className="px-5 pb-3 flex flex-col gap-5 text-sm">
          <div className="flex items-center justify-between">
            <Title4>Turma</Title4>
            <p>{item.turmaCategory}</p>
          </div>
          <div className="flex items-center justify-between">
            <Title4>Classe</Title4>
            <p>{item.class}</p>
          </div>
          <div className="flex items-center justify-between">
            <Title4>Curso</Title4>
            <p>{item.course}</p>
          </div>
          <div className="flex items-center justify-between">
            <Title4>Periodo</Title4>
            <p>{item.period}</p>
          </div>
          <div className="flex items-center justify-between">
            <Title4>Sala</Title4>
            <p>{item.sala}</p>
          </div>
          <div className="flex items-center justify-between ">
            <Title4>Total Alunos</Title4>
            <p>{item.students}</p>
          </div>
          <div className="flex items-center justify-between ">
            <Title4>Total Professores</Title4>
            <p>{item.teachers}</p>
          </div>
          <div className="flex items-center justify-between ">
            <Title4>Total Disciplinas</Title4>
            <p>{item.subjects}</p>
          </div>
        </div>
      </li>

      <li>
        <AdminTurmasLinks />
        <Outlet />
      </li>
    </>
  );
}

export default AdminTurmasDetailItem;
