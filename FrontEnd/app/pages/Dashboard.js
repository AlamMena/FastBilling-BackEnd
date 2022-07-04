import DashboardCard from "../Components/DashboardPageComponents/Dashboard_Card/Dashboard_card";
import React, { useContext } from "react";
import AuthContext from "../Auth/AuthContext";
import Chart from "../Components/DashboardPageComponents/Dashboard_chart";
import BigChart from "../Components/DashboardPageComponents/Dashboard_big_chart";
import Activity from "../Components/DashboardPageComponents/Dasboard_activity";

export default function Dashboard() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-12">
        <div className=" col-span-12 md:col-span-7 p-2 ">
          <DashboardCard />
          <BigChart />
        </div>
        <div className=" col-span-12 md:col-span-5 p-4">
          <Chart />
          <Activity />
        </div>
      </div>
    </div>
  );
}
