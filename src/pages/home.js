//import { useEffect, useState } from "react";
//import { Routes, Route } from "react-router-dom";
//import { getLoggedIn, logout } from "./services/auth";
//import routes from "./config/routes";
//import * as USER_HELPERS from "./utils/userToken";
import AppAppBar from "../modules/views/AppAppBar";
import AppFooter from "../modules/views/AppFooter";
import ProductCTA from "../modules/views/ProductCTA";
import ProductCategories from "../modules/views/ProductCategories";
import ProductHero from "../modules/views/ProductHero";
import ProductHowItWorks from "../modules/views/ProductHowItWorks";
import ProductSmokingHero from "../modules/views/ProductSmokingHero";
import ProductValues from "../modules/views/ProductValues";
import withRoot from "../modules/withRoot";


function App() {
  /* const [user, setUser] = useState(null);

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
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </div>
  );
}
export default withRoot(App);
