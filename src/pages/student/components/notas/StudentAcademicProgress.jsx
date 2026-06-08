import Title3 from "../../../../components/ui/Title3";
import { formatAverage } from "../../../../services/academicProgress";

const statusStyles = {
  success: {
    card: "border-green-200 bg-green-50 text-green-900 dark:border-green-900/60 dark:bg-green-950/30 dark:text-green-100",
    badge: "bg-green-700 text-white",
    dot: "bg-green-600",
  },
  warning: {
    card: "border-yellow-200 bg-yellow-50 text-yellow-950 dark:border-yellow-900/60 dark:bg-yellow-950/30 dark:text-yellow-100",
    badge: "bg-yellow-500 text-yellow-950",
    dot: "bg-yellow-500",
  },
  danger: {
    card: "border-red-200 bg-red-50 text-red-900 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-100",
    badge: "bg-red-700 text-white",
    dot: "bg-red-600",
  },
  neutral: {
    card: "border-slate-200 bg-slate-50 text-slate-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200",
    badge: "bg-slate-700 text-white",
    dot: "bg-slate-400",
  },
};

function TermCard({ summary }) {
  const styles = statusStyles[summary.status.tone] ?? statusStyles.neutral;

  return (
    <article className={`rounded-md border p-4 ${styles.card}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider opacity-80">
            {summary.term}º Trimestre
          </p>
          <h3 className="mt-1 text-base font-semibold">
            {summary.status.label}
          </h3>
        </div>
        <span
          className={`inline-flex h-3 w-3 shrink-0 rounded-full ${styles.dot}`}
          aria-hidden="true"
        />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-xs opacity-75">Média trimestral</p>
          <p className="text-xl font-semibold">
            {formatAverage(summary.average)}
          </p>
        </div>
        <div>
          <p className="text-xs opacity-75">Negativas</p>
          <p className="text-xl font-semibold">{summary.negativeCount}</p>
        </div>
      </div>

      <p className="mt-4 text-xs leading-5 opacity-85">
        {summary.status.reason}
      </p>

      <div className="mt-4">
        <p className="mb-2 text-xs font-semibold opacity-80">
          Disciplinas negativas
        </p>
        {summary.negativeSubjects.length ? (
          <div className="flex flex-wrap gap-2">
            {summary.negativeSubjects.map((subject) => (
              <span
                key={`${summary.term}-${subject}`}
                className={`rounded-full px-2 py-1 text-xs font-semibold ${styles.badge}`}
              >
                {subject}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-xs opacity-75">Nenhuma disciplina negativa.</p>
        )}
      </div>
    </article>
  );
}

function StudentAcademicProgress({ progress }) {
  const visibleTermSummaries = progress.termSummaries.filter(
    (summary) => summary.grades.length > 0,
  );
  const canShowFinalEvaluation = progress.termSummaries.every(
    (summary) => summary.grades.length > 0,
  );
  const finalStyles =
    statusStyles[progress.finalDecision.tone] ?? statusStyles.neutral;

  return (
    <section className="space-y-6 border-b border-slate-200 p-4 dark:border-gray-700">
      <div>
        <Title3>Gestão de Aprovação</Title3>
        <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
          Regra aplicada: aprovado com media iual ou superior a 10, exame
          extraordinário até 2 negativas e reprovado com mais de 2 negativas.
        </p>
      </div>

      {visibleTermSummaries.length > 0 && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {visibleTermSummaries.map((summary) => (
            <TermCard key={summary.term} summary={summary} />
          ))}
        </div>
      )}

      {canShowFinalEvaluation && (
        <article className={`rounded-md border p-4 ${finalStyles.card}`}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-80">
                Resultado final anual
              </p>
              <h3 className="mt-1 text-xl font-semibold">
                {progress.finalDecision.label}
              </h3>
              <p className="mt-2 text-sm leading-6 opacity-85">
                {progress.finalDecision.reason}
              </p>
            </div>
            <span
              className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${finalStyles.badge}`}
            >
              {progress.hasCompleteYear ? "Final" : "Parcial"}
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-2 text-xs font-semibold opacity-80">
                Disciplinas negativas finais
              </p>
              {progress.negativeFinals.length ? (
                <div className="flex flex-wrap gap-2">
                  {progress.negativeFinals.map((item) => (
                    <span
                      key={item.subject}
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${finalStyles.badge}`}
                    >
                      {item.subject}: {formatAverage(item.finalAverage)}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm opacity-75">
                  Nenhuma disciplina negativa.
                </p>
              )}
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold opacity-80">
                Médias finais por disciplina
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {progress.subjectFinals.length ? (
                  progress.subjectFinals.map((item) => (
                    <div
                      key={item.subject}
                      className="flex items-center justify-between gap-3 rounded-md bg-white/70 px-3 py-2 text-sm dark:bg-gray-950/30"
                    >
                      <span className="truncate">{item.subject}</span>
                      <span className="shrink-0 font-semibold">
                        {formatAverage(item.finalAverage)}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm opacity-75">
                    Sem médias para apresentar.
                  </p>
                )}
              </div>
            </div>
          </div>
        </article>
      )}
    </section>
  );
}

export default StudentAcademicProgress;
