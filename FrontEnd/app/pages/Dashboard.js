import DashboardCard from "../Components/DashboardPageComponents/Dashboard_Card/dashboard_card";
import React, { useContext } from "react";
import AuthContext from "../Auth/AuthContext";
import Chart from "../Components/DashboardPageComponents/Dashboard_chart";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12">
      <div className=" col-span-12 md:col-span-7 ">
        <DashboardCard />
        {/* <Component {...pageProps} /> */}
      </div>
      <div className=" col-span-12 md:col-span-5">
        <Chart />
      </div>
    </div>
  );
}
