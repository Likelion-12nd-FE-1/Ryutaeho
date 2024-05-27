import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // 추가
import IDLogin from "../components/IDLogin";
import OneTimeNumberLogin from "../components/OneTimeNumberLogin";
import QRCodeLogin from "../components/QRCodeLogin";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #1ec800;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #17b300;
  }
`;

const LinkContainer = styled.div`
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  margin-right: 10px;
  color: #1ec800;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const [loginMethod, setLoginMethod] = useState("id");

  return (
    <LoginContainer>
      <h2>NAVER</h2>
      <ButtonGroup>
        <LoginButton onClick={() => setLoginMethod("id")}>ID로그인</LoginButton>
        <LoginButton onClick={() => setLoginMethod("onetime")}>
          일회용 번호
        </LoginButton>
        <LoginButton onClick={() => setLoginMethod("qrcode")}>
          QR코드
        </LoginButton>
      </ButtonGroup>
      {loginMethod === "id" && <IDLogin />}
      {loginMethod === "onetime" && <OneTimeNumberLogin />}
      {loginMethod === "qrcode" && <QRCodeLogin />}
      <LinkContainer>
        <StyledLink to="">아이디 찾기</StyledLink>|
        <StyledLink to="">비밀번호 찾기</StyledLink>|
        <StyledLink to="/signup">회원가입</StyledLink>
      </LinkContainer>
    </LoginContainer>
  );
};

export default Login;
