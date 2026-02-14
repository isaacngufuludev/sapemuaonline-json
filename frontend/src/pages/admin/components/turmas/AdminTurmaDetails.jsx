import { HiOutlinePlus, HiPlus } from "react-icons/hi";
import Title3 from "../../../../components/ui/Title3";
import AdminButton from "../AdminButton";
import AdminHeading from "../AdminHeading";
import AdminTurmasDetailList from "./AdminTurmasDetailList";
import { useParams } from "react-router-dom";
import { useTurmas } from "../../../../hooks/useTurmas";
import { useCourses } from "../../../../hooks/useCourses";
import { useEffect, useState } from "react";
import { useClasses } from "../../../../hooks/useClasses";
import { get } from "../../../../services/api";

function AdminTurmaDetails() {
  const { turmaId } = useParams();
  const [turma, setTurma] = useState(null);
  const { classes } = useClasses();
  const { courses } = useCourses();
  const turmaCourse = courses.find((c) => c.id === turma?.courseId);
  const turmaClasse = classes.find((c) => c.id === turma?.classId);

  useEffect(() => {
    async function fetchTurma() {
      const data = await get(`turmas/${turmaId}`);
      setTurma(data);
    }
    fetchTurma();
  }, [turmaId]);

  if (!turma) return;

  return (
    <div>
      <AdminHeading>
        <Title3>
          {turmaCourse?.courseName}-{turmaClasse.classYear}-{turma?.period}
        </Title3>
        <AdminButton type="primary">
          <p>
            <HiOutlinePlus />
          </p>
          <p>Disciplina</p>
        </AdminButton>
      </AdminHeading>
      <div>
        <AdminTurmasDetailList />
      </div>
    </div>
  );
}

export default AdminTurmaDetails;
