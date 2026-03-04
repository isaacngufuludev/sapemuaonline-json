import StudentNotasItem from "./StudentNotasItem";

function StudentNotasList({ grades }) {
  return (
    <ul>
      {grades.length === 0 && (
        <li className="p-4 text-sm text-gray-500 dark:text-gray-400 border-t-[0.1px] dark:border-gray-700 border-slate-200">
          Nenhuma nota encontrada.
        </li>
      )}
      {grades.map((item, i) => (
        <StudentNotasItem key={`${item.disciplina}-${i}`} item={item} i={i} />
      ))}
    </ul>
  );
}

export default StudentNotasList;
