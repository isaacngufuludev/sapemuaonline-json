import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Title3 from "../../../../components/ui/Title3";
import { useMemo, useRef } from "react";
import { useStudents } from "../../../../hooks/useStudents";
import { useTeachers } from "../../../../hooks/useTeachers";
import { useCourses } from "../../../../hooks/useCourses";
import { useTurmas } from "../../../../hooks/useTurmas";
import { useNews } from "../../../../hooks/useNews";

function ChartUsersGrowth() {
  const LineChartRef = useRef(null);
  const { students } = useStudents();
  const { teachers } = useTeachers();
  const { courses } = useCourses();
  const { turmas } = useTurmas();
  const { news } = useNews();

  const userGrowthData = useMemo(
    () => [
      {
        category: "Estudantes",
        total: students.length,
        novos: students.length,
      },
      {
        category: "Professores",
        total: teachers.length,
        novos: teachers.length,
      },
      {
        category: "Cursos",
        total: courses.length,
        novos: courses.length,
      },
      {
        category: "Turmas",
        total: turmas.length,
        novos: turmas.length,
      },
      {
        category: "Notícias",
        total: news.length,
        novos: news.length,
      },
    ],
    [students.length, teachers.length, courses.length, turmas.length, news.length],
  );

  return (
    <div
      className="h-[320px] min-w-[260px] rounded-md border border-slate-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800 sm:h-[340px] sm:p-4"
      ref={LineChartRef}
    >
      <div className="mb-3">
        <Title3>Resumo do Painel</Title3>
      </div>

      <div className="h-[calc(100%-40px)]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={userGrowthData}
            margin={{ top: 5, right: 8, left: -18, bottom: 0 }}
          >
            <defs>
              <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="novosGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />

            <XAxis
              dataKey="category"
              tick={{ fill: "#94a3b8", fontSize: 10 }}
              minTickGap={24}
              interval="preserveStartEnd"
              tickMargin={8}
              axisLine={false}
              tickLine={false}
            />

            <YAxis width={32} tick={{ fill: "#94a3b8", fontSize: 10 }} axisLine={false} tickLine={false} />

            <Tooltip
              contentStyle={{
                backgroundColor: "#020617",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
              }}
              labelStyle={{ color: "#e5e7eb" }}
            />

            <Area type="monotone" dataKey="total" stroke="#6366f1" fill="url(#totalGradient)" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="novos" stroke="#22c55e" strokeWidth={2} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartUsersGrowth;
