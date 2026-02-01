import AdminTurmasDetailItem from "./AdminTurmasDetailItem";

const data = [
  {
    turmaCategory: "B",
    class: "10ª Classe",
    course: "Informática",
    students: 10,
    teachers: 15,
    sala: 15,
    subjects: 10,
    period: "Manhã",
  },
];

function AdminTurmasDetailList() {
  return (
    <ul className="grid grid-cols-[0.8fr_3fr] gap-5">
      {data.map((item, i) => (
        <AdminTurmasDetailItem item={item} i={i} key={i} />
      ))}
    </ul>
  );
}

export default AdminTurmasDetailList;
