import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import Title3 from "../../../../components/ui/Title3";

const usersByRoleData = [
  { name: "Estudantes", value: 100 },
  { name: "Professores", value: 40 },
  { name: "Administradores", value: 10 },
];

const COLORS = ["#6366f1", "#22c55e", "#f59e0b"];

function ChartUsersRole() {
  return (
    <div className="bg-white rounded-md p-4 dark:bg-gray-800 border border-slate-200 dark:border-gray-700">
      <Title3>Usuários por Papel</Title3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={usersByRoleData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={85}
            paddingAngle={4}
          >
            {usersByRoleData.map((_, index) => (
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
            layout="vertical"
            align="right"
            verticalAlign="middle"
            iconType="circle"
            wrapperStyle={{
              fontSize: 14,
              paddingLeft: 0,
              lineHeight: "40px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartUsersRole;
