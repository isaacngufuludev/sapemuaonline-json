import StudentTeachersTitleItem from "./StudentTeachersTitleItem";

const title = ["", "Disciplinas", "Nome", "Email", "Telefone"];

function StudentTeachersTitle() {
  return (
    <ul className="hidden md:grid py-3 px-3 grid-cols-[0.4fr_2fr_1.2fr_1.4fr_1.2fr] bg-slate-100 dark:bg-gray-900">
      {title.map((item, index) => (
        <StudentTeachersTitleItem key={`${item}-${index}`} item={item} />
      ))}
    </ul>
  );
}

export default StudentTeachersTitle;
