//import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
/* import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";*/
import withRoot from "./modules/withRoot";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Home from "./pages/home";
import Packages from "./pages/Packages";
import Reviews from "./pages/Reviews";
import Tips from "./pages/Tips";
import Trips from "./pages/Trips";
import Profile from "./pages/Profile";

function App() {
  /*   const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return ;
  } */
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
export default withRoot(App);
