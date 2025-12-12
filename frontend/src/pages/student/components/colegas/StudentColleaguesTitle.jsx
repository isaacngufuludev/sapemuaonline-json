import StudentColleaguesTitleItem from "./StudentColleaguesTitleItem";

const title = ["", "Nome", "Sexo", "Idade", "Telefone"];

function StudentColleaguesTitle() {
  return (
    <ul className="grid py-3 px-3 grid-cols-[0.3fr_1.8fr_1fr_1fr_1fr] bg-slate-100  dark:bg-gray-900 ">
      {title.map((item) => (
        <StudentColleaguesTitleItem item={item} />
      ))}
    </ul>
  );
}

export default StudentColleaguesTitle;
