import StudentNotasTitleItem from "./StudentNotasTitleItem";

const title = ["", "Disciplina", "MAC", "NPP", "NPT", "MT", "Status"];

function StudentNotasTitle() {
  return (
    <ul className="hidden md:grid grid-cols-[0.4fr_2fr_1fr_1fr_1fr_1fr_1fr] items-center dark:bg-gray-900 bg-slate-100 py-4 px-4">
      {title.map((item, index) => (
        <StudentNotasTitleItem key={`${item}-${index}`} item={item} />
      ))}
    </ul>
  );
}

export default StudentNotasTitle;
