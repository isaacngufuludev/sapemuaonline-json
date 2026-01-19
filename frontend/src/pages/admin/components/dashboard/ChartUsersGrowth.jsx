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
import { useRef } from "react";

const userGrowthData = [
  { date: "Jan 01", total: 320, novos: 45 },
  { date: "Jan 03", total: 420, novos: 100 },
  { date: "Jan 05", total: 350, novos: 30 },
  { date: "Jan 07", total: 500, novos: 150 },
  { date: "Jan 09", total: 430, novos: 60 },
  { date: "Jan 11", total: 620, novos: 190 },
  { date: "Jan 13", total: 480, novos: 50 },
  { date: "Jan 15", total: 700, novos: 220 },
  { date: "Jan 17", total: 560, novos: 80 },
  { date: "Jan 19", total: 780, novos: 240 },
  { date: "Jan 21", total: 600, novos: 70 },
  { date: "Jan 23", total: 850, novos: 280 },
  { date: "Jan 25", total: 650, novos: 90 },
  { date: "Jan 27", total: 920, novos: 300 },
  { date: "Jan 29", total: 720, novos: 110 },
  { date: "Jan 31", total: 1000, novos: 350 },
  { date: "Feb 02", total: 780, novos: 120 },
  { date: "Feb 04", total: 1100, novos: 380 },
  { date: "Feb 06", total: 850, novos: 140 },
  { date: "Feb 08", total: 1250, novos: 420 },
  { date: "Feb 10", total: 980, novos: 160 },
  { date: "Feb 12", total: 1400, novos: 500 },
];

function ChartUsersGrowth() {
  const LineChartRef = useRef(null);

  return (
    <div
      className="bg-white dark:bg-gray-800 p-6 rounded-md border border-slate-200 dark:border-gray-700"
      ref={LineChartRef}
    >
      <Title3>Crescimento de Usuários</Title3>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={userGrowthData}>
          {/* Gradientes */}
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

          {/* Grid minimalista */}
          <CartesianGrid stroke="rgba(255,255,255,0.05)" vertical={false} />

          {/* Eixos */}
          <XAxis
            dataKey="date"
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#94a3b8", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          {/* Tooltip custom */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
            }}
            labelStyle={{ color: "#e5e7eb" }}
          />

          {/* Área total */}
          <Area
            type="monotone"
            dataKey="total"
            stroke="#6366f1"
            fill="url(#totalGradient)"
            strokeWidth={2}
            dot={{ r: 3 }}
          />

          {/* Linha novos usuários */}
          <Line
            type="monotone"
            dataKey="novos"
            stroke="#22c55e"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartUsersGrowth;
