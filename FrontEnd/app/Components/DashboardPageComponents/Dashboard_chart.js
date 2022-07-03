import react from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  // Chart data
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="bg-white h-72 rounded-2xl p-3">
      <div className="flex justify-between">
        <div className=" tracking-wide font-semibold">Ganancias este mes</div>
        <div className=" text-2xl">
          <AiOutlineEllipsis />{" "}
        </div>
      </div>
      <div className="font-bold text-2xl mb-4">$13,546</div>
      <ResponsiveContainer width="95%" height="70%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />

          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
