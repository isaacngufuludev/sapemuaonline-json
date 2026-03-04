import StudentColleaguesTitleItem from "./StudentColleaguesTitleItem";

const title = ["", "Nome", "Sexo", "Idade", "Telefone"];

function StudentColleaguesTitle() {
  return (
    <ul className="hidden md:grid py-3 px-3 grid-cols-[0.4fr_1.8fr_1fr_1fr_1.2fr] bg-slate-100 dark:bg-gray-900">
      {title.map((item, index) => (
        <StudentColleaguesTitleItem key={`${item}-${index}`} item={item} />
      ))}
    </ul>
  );
}

export default StudentColleaguesTitle;
