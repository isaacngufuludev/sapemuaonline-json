import StudentNotasTitle from "./StudentNotasTitle";
import StudentNotasHeader from "./StudentNotasHeader";
import StudentNotasLayout from "./StudentNotasLayout";
import StudentNotasList from "./StudentNotasList";

function StudentNotas() {
  return (
    <div className="p-10">
      <StudentNotasLayout>
        <StudentNotasHeader />
        <StudentNotasTitle />
        <StudentNotasList />
      </StudentNotasLayout>
    </div>
  );
}

export default StudentNotas;
