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
        <div className="flex flex-col h-screen">
          {/* Side Bar grid */}
          <div className=" h-20 absolute md:h-screen ">
            <SideBar />
          </div>
          <div className="flex flex-col">
            {/* Top Bar grid  */}
            <div className="fixed">
              <TopBar />
            </div>
            {/* Content grid */}
            <div className=" md:ml-20 lg:ml-44 mt-16 md:mt-18">
              {/* <Component {...pageProps} /> */}
              {/* <Products /> */}
              {/* <Table /> */}
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AuthContext.Provider>
  );
}

export default MyApp;
