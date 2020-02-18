import React from "react";

import { ForgotPasswordForm } from "../ForgotPassword/forgotpassword";
import { PasswordChangeForm } from "../PasswordChange/passwordchange";
import { withAuthorization } from "../Session/withAuthorization";
import { AuthUserContext } from "../Firebase/firebase";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <ForgotPasswordForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
