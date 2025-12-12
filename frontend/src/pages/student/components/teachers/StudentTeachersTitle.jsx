import StudentTeachersTitleItem from "./StudentTeachersTitleItem";

const title = ["", "Disciplinas", "Nome", "Email", "Telefone"];

function StudentTeachersTitle() {
  return (
    <ul className="grid py-3 px-3 grid-cols-[0.3fr_2fr_1fr_1fr_1fr] bg-slate-100  dark:bg-gray-900 ">
      {title.map((item) => (
        <StudentTeachersTitleItem item={item} />
      ))}
    </ul>
  );
}

export default StudentTeachersTitle;
