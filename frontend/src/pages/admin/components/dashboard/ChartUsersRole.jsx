import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import Title3 from "../../../../components/ui/Title3";
import { useRef } from "react";

const stats = [
  { name: "Estudantes", value: 100 },
  { name: "Professores", value: 40 },
  { name: "Administradores", value: 10 },
];

const COLORS = ["#6366f1", "#22c55e", "#f59e0b"];

function ChartUsersRole() {
  const PieChartRef = useRef(null);

  return (
    <div
      className="h-[320px] min-w-[260px] rounded-md border border-slate-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800 sm:h-[340px] sm:p-4"
      ref={PieChartRef}
    >
      <Title3>Usuários por Papel</Title3>

      <div className="h-[calc(100%-40px)]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
          <Pie
            data={stats}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="43%"
            innerRadius="42%"
            outerRadius="68%"
            paddingAngle={4}
          >
            {stats.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              borderRadius: 8,
              border: "none",
              fontSize: 12,
            }}
          />

          <Legend
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{
              fontSize: 12,
              paddingLeft: 0,
              lineHeight: "18px",
            }}
          />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartUsersRole;
