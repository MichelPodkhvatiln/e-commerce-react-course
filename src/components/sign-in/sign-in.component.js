import React, {useState} from 'react';
import {connect} from "react-redux";
import { googleSignInStart, emailSignInStart  } from "../../redux/user/user.actions";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: ''});

  const { email, password } = userCredentials;

  async function handleSubmit (e) {
    e.preventDefault();
    emailSignInStart(email, password);
  }

  function handleChange (e) {
    const { value, name} = e.target;
    setUserCredentials({...userCredentials, [name]: value });
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name={'email'}
          type={'email'}
          value={email}
          handleChange={handleChange}
          label={'Email'}
          required={true} />

        <FormInput
          name={'password'}
          type={'password'}
          value={password}
          handleChange={handleChange}
          label={'Password'}
          required={true} />

        <ButtonsBarContainer>
          <CustomButton type="submit">
            Sign In
          </CustomButton>
          <CustomButton type="button" isGoogleSignIn={true} onClick={googleSignInStart}>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
}

const mapDispatchToProps = (dispatch) =>({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({email, password})),
});

export default connect(null, mapDispatchToProps)(SignIn);
