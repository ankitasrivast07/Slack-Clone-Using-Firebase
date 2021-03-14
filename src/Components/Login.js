import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <InnerContainer>
        <img
          src="https://manage-website.s3.amazonaws.com/353fdaf8-bc3f-4b56-8e1a-23de7124cf6bslack.png"
          alt=""
        />
        <h1>Sign in to the XYZ Company</h1>
        <p>xyz.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </InnerContainer>
    </LoginContainer>
  );
}

export default Login;

const InnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white-space;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
    height: 100px;
    margin-top: 40px;
  }
  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 90vh;
  display: grid;
  place-items: center;
`;
