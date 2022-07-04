import "../styles/globals.css";
import React from "react";
import SideBar from "../Components/SideBarMenuComponents/Sidebar_menu";
import TopBar from "../Components/TopBarComponents/Top_Bar";
import useAuth from "../Auth/useAuth";
import AuthContext from "../Auth/AuthContext";
import PrivateRoute from "../Auth/PrivateRoute";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Table from "../Components/Globals/Tables/Table";

function MyApp({ Component, pageProps }) {
  const { user } = useAuth();

  return (
    <AuthContext.Provider value={user}>
      <PrivateRoute>
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
            <div className=" md:ml-20 lg:ml-56 grid grid-cols-12 mt-16">
              {/* Content grid */}
              <div className="col-span-12">
                <Component {...pageProps} />
              </div>
              <div className="m-3 col-span-12">
                <Table />
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AuthContext.Provider>
  );
}

export default MyApp;
