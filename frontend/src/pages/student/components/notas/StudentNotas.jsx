import StudentNotasTitle from "./StudentNotasTitle";
import StudentNotasHeader from "./StudentNotasHeader";
import StudentNotasLayout from "./StudentNotasLayout";
import StudentNotasList from "./StudentNotasList";

function StudentNotas() {
  return (
    <StudentNotasLayout>
      <StudentNotasHeader />
      <StudentNotasTitle />
      <StudentNotasList />
    </StudentNotasLayout>
  );
}

export default StudentNotas;
