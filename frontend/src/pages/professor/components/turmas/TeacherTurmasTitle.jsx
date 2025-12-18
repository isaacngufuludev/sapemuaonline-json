import TeacherTurmasTitleItem from "./TeacherTurmasTitleItem";

const title = ["", "Nome Completo", "MAC", "NPP", "NPT", "MT", ""];

function TeacherTurmasTitle() {
  return (
    <ul className="grid grid-cols-[0.5fr_3fr_0.7fr_0.7fr_0.7fr_0.7fr_0.3fr] items-center dark:bg-gray-900  bg-slate-100 p-4">
      {title.map((item) => (
        <TeacherTurmasTitleItem item={item} />
      ))}
    </ul>
  );
}

export default TeacherTurmasTitle;
