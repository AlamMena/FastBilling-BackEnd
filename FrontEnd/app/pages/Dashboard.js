import React from "react";
import SideBar from "../Components/SideBarMenuComponents/sidebar_menu";
import TopBar from "../Components/TopBarComponents/TopBar";
import DashboardCard from "../Components/DashboardPageComponents/Dashboard_Card/dashboard_card";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      {/* Side Bar grid */}
      <div className=" h-20 absolute md:h-screen ">
        <SideBar />
      </div>
      <div className="flex flex-col">
        {/* Top Bar grid  */}
        <div className="fixed">
          <TopBar />
        </div>
        <div className=" md:ml-20 lg:ml-44 grid grid-cols-12 mt-20">
          {/* Content grid */}
          <div className="ml-3 col-span-12 md:col-span-10 lg:col-span-7">
            <DashboardCard />
          </div>
        </div>
      </div>
    </div>
  );
}
