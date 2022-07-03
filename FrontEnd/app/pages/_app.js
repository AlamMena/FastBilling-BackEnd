import "../styles/globals.css";
import React from "react";
import SideBar from "../Components/SideBarMenuComponents/sidebar_menu";
import TopBar from "../Components/TopBarComponents/Top_Bar";
import useAuth from "../Auth/useAuth";
import AuthContext from "../Auth/AuthContext";
import PrivateRoute from "../Auth/PrivateRoute";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Table from "../Components/Globals/Tables/table";

function MyApp({ Component, pageProps }) {
  const { user } = useAuth();

  return (
    <AuthContext.Provider value={user}>
      <PrivateRoute>
        <div className="flex flex-col h-screen w-screen">
          {/* Side Bar grid */}
          <div className=" h-20 absolute md:h-screen ">
            <SideBar />
          </div>
          <div className="flex flex-col">
            {/* Top Bar grid  */}
            <div className="fixed">
              <TopBar />
            </div>
            <div className=" md:ml-20 lg:ml-56 grid grid-cols-12 mt-24">
              {/* Content grid */}
              {/* lg:col-span 7 when you are done with the table */}
              <div className="ml-3 col-span-12 md:col-span-10 lg:col-span-12">
                {/* <DashboardCard /> */}
                <Table />
                {/* <Component {...pageProps} /> */}
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AuthContext.Provider>
  );
}

export default MyApp;
