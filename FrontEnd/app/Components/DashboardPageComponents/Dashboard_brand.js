import react from "react";
import {
  AiOutlineEllipsis,
  AiOutlineUser,
  AiOutlineHeatMap,
} from "react-icons/ai";
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

export default function Dashboard_Brands(data) {
  const Marca = data.map((item, index) => {
    return (
      <div className="flex justify-between" key={index}>
        <div className="flex items-center">
          <div className=" text-3xl p-1">
            <AiOutlineHeatMap />
          </div>
          <div className="font-bold text-sm p-1">
            <div>{item.name}</div>
          </div>
        </div>
        <div className="text-gray-400 text-xs">{item.description}</div>
      </div>
    );
  });
  return (
    <div className=" h-80 w-full bg-white rounded-lg p-3 flex flex-col ">
      <div className="p-1 mb-3">
        <div className="text-lg font-semibold tracking-wide">Marcas</div>
      </div>
      {Marca}
      <div className="mt-auto">
        <button className=" border-2 border-gray-400 p-2 w-full rounded-lg = text-gray-700 tracking-wide font-semibold">
          Nueva Marca
        </button>
      </div>
    </div>
  );
}
