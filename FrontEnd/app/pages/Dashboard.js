import React from "react";
import Menu from "../Components/DashboardMenuComponents/dashboard_menu";

export default function Dashboard() {
  return (
    // <div className=" grid grid-flow-col ">
    //   <div className="col-start-1 bg-white">
    // <Menu />
    //   </div>
    <div className="flex ">
      <div className=" absolute bg-white">
        <Menu />
      </div>
      <div className=" ml-44">
        <p>Component 2</p>
      </div>
    </div>
  );
}
