import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation/navigation";
import LandingPage from "../Landing/landing";
import SignUpPage from "../SignUp/signup";
import SignInPage from "../SignIn/signin";
import ForgotPasswordPage from "../ForgotPassword/forgotpassword";
import HomePage from "../Home/home";
import AccountPage from "../Account/account";
import AdminPage from "../Admin/admin";
import { withAuthentication } from "../Session/withAuthentication.js";

require("dotenv").config({ path: __dirname + "/.env" });

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />
      <Route exact path="/landing" component={LandingPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/pw-forgot" component={ForgotPasswordPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/account" component={AccountPage} />
      <Route path="/admin" component={AdminPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
