import React from "react";
import { Link } from "react-router-dom";

import { AuthUserContext } from "../Firebase/firebase";

import SignOutButton from "../SignOut/signout";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to="/landing">Landing</Link>
    </li>
    <li>
      <Link to="/home">Home</Link>
    </li>
    <li>
      <Link to="/account">Account</Link>
    </li>
    <li>
      <Link to="/admin">Admin</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to="/signin">Sign In</Link>
    </li>
    <li>
      <Link to="/landing">Landing</Link>
    </li>
  </ul>
);

export default Navigation;
