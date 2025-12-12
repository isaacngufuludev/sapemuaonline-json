import StudentNotasTitleItem from "./StudentNotasTitleItem";

const title = ["", "Disciplina", "MAC", "NPP", "NPT", "MT"];

function StudentNotasTitle() {
  return (
    <ul className="grid grid-cols-[0.3fr_2fr_1fr_1fr_1fr_1fr] items-center dark:bg-gray-900  bg-slate-100 p-4">
      {title.map((item) => (
        <StudentNotasTitleItem item={item} />
      ))}
    </ul>
  );
}

export default StudentNotasTitle;
