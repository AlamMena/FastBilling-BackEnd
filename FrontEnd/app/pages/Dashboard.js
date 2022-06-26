import React from "react";
import Menu from "../Components/DashboardMenuComponents/dashboard_menu";
import TopBar from "../Components/TopBar/TopBar";

export default function Dashboard() {
  return (
    // <div className=" grid grid-flow-col ">
    //   <div className="col-start-1 bg-white">
    // <Menu />
    //   </div>
    <div className="flex">
      <div className=" md:w-20 lg:w-44 relative ">
        <Menu />
      </div>
      <div>
        <TopBar className="relative" />
      </div>
    </div>
  );
}
