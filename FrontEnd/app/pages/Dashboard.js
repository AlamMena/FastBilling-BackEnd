import React from "react";
import Menu from "../Components/DashboardMenuComponents/dashboard_menu";
import TopBar from "../Components/TopBarComponents/TopBar";
import DashboardPage from "../Components/DashboardPageComponents.js/dashboard_page";

export default function Dashboard() {
  return (
    <div className="flex">
      <div className=" h-20 md:w-20 lg:w-44 absolute md:h-screen ">
        <Menu />
      </div>
      <div className=" w-screen ml-12 md:ml-20 lg:ml-44">
        <TopBar />
        <div className="">
          <DashboardPage />
        </div>
      </div>
    </div>
  );
}
