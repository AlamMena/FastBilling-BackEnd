import React from "react";
import Menu from "../Components/DashboardMenuComponents/Menu";

export default function Dashboard() {
  return (
    <div className=" grid grid-flow-col ">
      <div className=" col-span-1 ">
        <Menu />
      </div>
      <div className="col-span-10">
        <p>Component 2</p>
      </div>
    </div>
  );
}
