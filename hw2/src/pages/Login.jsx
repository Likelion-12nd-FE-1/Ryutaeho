import React, { useState } from "react";
import styled, { css } from "styled-components";
import IDLogin from "../components/IDLogin";
import OneTimeNumberLogin from "../components/OneTimeNumberLogin";
import QRCodeLogin from "../components/QRCodeLogin";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  max-width: 400px;
  margin: 80px auto;
`;

const LoginMethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid transparent; /* 초기 테두리 설정, 선택되지 않았을 때는 투명 */
  border-radius: 10px; /* 테두리 둥글게 */
  overflow: hidden; /* 자식 요소들이 테두리를 넘어가지 않도록 */
`;

const LoginMethodsList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0; /* 마진 조정 */
  width: 100%;
  background-color: #f5f5f5;
`;

const LoginMethodItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;

  a {
    padding: 10px;
    width: 100%;
    display: block;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    color: #666;
    background-color: transparent;
    transition: background-color 0.3s;
  }

  ${({ active }) =>
    active &&
    css`
      a {
        background-color: #fff;
        color: #03c75a;
      }
    `}
`;

const LinkContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
`;

const StyledLink = styled.a`
  margin: 0 5px;
  color: #03c75a;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  transition: all 0.3s ease-in-out;
`;

const Login = () => {
  const [loginMethod, setLoginMethod] = useState("id");

  const renderLoginComponent = () => {
    switch (loginMethod) {
      case "id":
        return <IDLogin />;
      case "onetime":
        return <OneTimeNumberLogin />;
      case "qrcode":
        return <QRCodeLogin />;
      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <h2 style={{ color: "#03C75A", marginBottom: "40px" }}>NAVER</h2>
      <LoginMethodsContainer active={loginMethod !== null}>
        <LoginMethodsList>
          <LoginMethodItem active={loginMethod === "id"}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setLoginMethod("id");
              }}
            >
              ID 로그인
            </a>
          </LoginMethodItem>
          <LoginMethodItem active={loginMethod === "onetime"}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setLoginMethod("onetime");
              }}
            >
              일회용 번호
            </a>
          </LoginMethodItem>
          <LoginMethodItem active={loginMethod === "qrcode"}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setLoginMethod("qrcode");
              }}
            >
              QR 코드
            </a>
          </LoginMethodItem>
        </LoginMethodsList>
        <LoginMethodContainer>{renderLoginComponent()}</LoginMethodContainer>
      </LoginMethodsContainer>
      <LinkContainer>
        <StyledLink href="">비밀번호 찾기</StyledLink>
        <StyledLink href="">아이디 찾기</StyledLink>
        <StyledLink href="/signup">회원가입</StyledLink>
      </LinkContainer>
    </Wrapper>
  );
};

export default Login;
