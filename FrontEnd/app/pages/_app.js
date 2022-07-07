import "../styles/globals.css";
import React from "react";
import SideBar from "../Components/SideBarMenuComponents/Sidebar_menu";
import TopBar from "../Components/TopBarComponents/Top_Bar";
import useAuth from "../Auth/useAuth";
import AuthContext from "../Auth/AuthContext";
import PrivateRoute from "../Auth/PrivateRoute";
import Dashboard from "./Dashboard";
import Products from "./Products";

function MyApp({ Component, pageProps }) {
  const { user } = useAuth();

  return (
    <AuthContext.Provider value={user}>
      <PrivateRoute>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
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
                <div className="mb-10 overflow-x-hidden col-span-12 md:col-span-10 lg:col-span-12 mt-10 mx-5">
                  <Component {...pageProps} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AuthContext.Provider>
  );
}

export default MyApp;
