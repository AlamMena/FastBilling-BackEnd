import AuthContext from "../Auth/AuthContext";
import PrivateRoute from "../Auth/PrivateRoute";
import useAuth from "../Auth/useAuth";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { user, LogOut } = useAuth();
  return (
    <AuthContext.Provider value={(user, LogOut)}>
      <PrivateRoute>
        <Component {...pageProps} />
      </PrivateRoute>
    </AuthContext.Provider>
  );
}

export default MyApp;
