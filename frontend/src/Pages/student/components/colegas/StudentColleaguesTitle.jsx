import StudentColleaguesTitleItem from "./StudentColleaguesTitleItem";

const title = ["Nome", "Sexo", "Idade", "Telefone"];

function StudentColleaguesTitle() {
  return (
    <ul className=" grid grid-cols-4 bg-slate-100  dark:bg-gray-900 ">
      {title.map((item) => (
        <StudentColleaguesTitleItem item={item} />
      ))}
    </ul>
  );
}

export default StudentColleaguesTitle;
