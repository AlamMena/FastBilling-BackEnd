import AuthContext from "../Auth/AuthContext";
import PrivateRoute from "../Auth/PrivateRoute";
import useAuth from "../Auth/useAuth";
import SideBar from "../Components/SideBarMenuComponents/sidebar_menu";
import TopBar from "../Components/TopBarComponents/TopBar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { user, LogOut } = useAuth();
  return (
    <AuthContext.Provider value={(user, LogOut)}>
      <PrivateRoute>
        <div className="flex flex-col">
          <div className=" h-20 md:w-20 lg:w-44 absolute md:h-screen ">
            <SideBar />
          </div>
          <div className="flex flex-col">
            <div className="ml-12 md:ml-20 lg:ml-44">
              <TopBar />
            </div>
            <div className=" md:ml-20 lg:ml-44 grid grid-cols-12">
              <div className="ml-3 col-span-12 md:col-span-10 lg:col-span-7">
                {/* <DashboardCard /> */}
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AuthContext.Provider>
  );
}

export default MyApp;
