import React from 'react';

import { AuthPageContainer } from './auth.styles';

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const Auth = () => (
  <AuthPageContainer>
    <SignIn />
    <SignUp />
  </AuthPageContainer>
);

export default Auth;
