import React, {Component} from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:'',
      password: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (e) => {
    const { value, name} = e.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name={'email'}
            type={'email'}
            value={this.state.email}
            handleChange={this.handleChange}
            label={'Email'}
            required={true} />

          <FormInput
            name={'password'}
            type={'password'}
            value={this.state.password}
            handleChange={this.handleChange}
            label={'Password'}
            required={true} />

          <ButtonsBarContainer>
            <CustomButton type="submit">
              Sign In
            </CustomButton>
            <CustomButton type="button" isGoogleSignIn={true} onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
