import React from "react";
import Menu from "../Components/DashboardMenuComponents/dashboard_menu";
import TopBar from "../Components/TopBar/TopBar";

export default function Dashboard() {
  return (
    <div className="flex">
      <div className=" md:w-20 lg:w-44 absolute h-screen ">
        <Menu />
      </div>
      <div className="w-screen ml-12 md:ml-20 lg:ml-44">
        <TopBar />
      </div>
    </div>
  );
}
