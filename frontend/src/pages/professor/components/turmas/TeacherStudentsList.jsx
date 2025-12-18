import TeacherStudentItem from "./TeacherStudentItem";

const notas = [
  {
    name: "Isaac Nzinga Ngufulu",
    mac: 12,
    npp: 9,
    npt: 15,
  },
  {
    name: "Kinavuide David",
    mac: 6,
    npp: 14,
    npt: 9,
  },
  {
    name: "Dorivaldo Quizembe",
    mac: 12,
    npp: 14,
    npt: 15,
  },
  {
    name: "Dorivaldo Quizembe",
    mac: 12,
    npp: 14,
    npt: 15,
  },
  {
    name: "Dorivaldo Quizembe",
    mac: 12,
    npp: 14,
    npt: 15,
  },
  {
    name: "Dorivaldo Quizembe",
    mac: 12,
    npp: 14,
    npt: 15,
  },
];

function TeacherStudentsList() {
  return (
    <ul className="overflow-y-scroll h-[308px] no-scrollbar">
      {notas.map((item, i) => (
        <TeacherStudentItem item={item} i={i} />
      ))}
    </ul>
  );
}

export default TeacherStudentsList;
