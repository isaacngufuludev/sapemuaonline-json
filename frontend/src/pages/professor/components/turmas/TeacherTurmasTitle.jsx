import TeacherTurmasTitleItem from "./TeacherTurmasTitleItem";

const title = ["", "Nome Completo", "MAC", "NPP", "NPT", "MT", ""];

function TeacherTurmasTitle() {
  return (
    <ul className="hidden md:grid grid-cols-[0.5fr_3fr_0.7fr_0.7fr_0.7fr_0.7fr_0.3fr] items-center dark:bg-gray-900 bg-slate-100 py-2">
      {title.map((item, index) => (
        <TeacherTurmasTitleItem key={`${item}-${index}`} item={item} />
      ))}
    </ul>
  );
}

export default TeacherTurmasTitle;
