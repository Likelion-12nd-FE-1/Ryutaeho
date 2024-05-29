import React, { useState } from "react";
import styled, { css } from "styled-components";
// IDLogin과 OneTimeNumberLogin 컴포넌트를 임포트합니다.
import IDLogin from "../components/IDLogin";
import OneTimeNumberLogin from "../components/OneTimeNumberLogin";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  max-width: 460px;
  margin: 40px auto;
`;

const NaverTitle = styled.h1`
  color: #03c75a;
  font-size: 40px;
  font-weight: bolder;
  padding: 10px;
`;

const LoginMethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid;
  border-color: ${({ active }) => (active ? "#f5f5f5" : "transparent")};
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 300px;
`;

const LoginMethodsList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 60px;
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
    line-height: 40px;
    cursor: pointer;
  }

  ${({ active }) =>
    active &&
    css`
      a {
        background-color: #fff;
      }
    `}
`;

const Separator = styled.span`
  color: #b7b7b7;
`;

const LinkContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
`;

const StyledLink = styled.a`
  margin: 0 5px;
  color: #939393;
  text-decoration: none;
  font-size: small;
  &:hover {
    text-decoration: underline;
  }
`;
const Login = () => {
  // 현재 선택된 로그인 방법을 관리하기 위한 상태입니다.
  const [selectedLoginMethod, setSelectedLoginMethod] = useState(null);

  return (
    <Wrapper>
      <NaverTitle>NAVER</NaverTitle>
      <LoginMethodsContainer active={selectedLoginMethod !== null}>
        <LoginMethodsList>
          <LoginMethodItem active={selectedLoginMethod === "ID"}>
            {/* onClick 핸들러에서 setSelectedLoginMethod를 이용해 상태를 업데이트합니다. */}
            <a onClick={() => setSelectedLoginMethod("ID")}>ID 로그인</a>
          </LoginMethodItem>
          <LoginMethodItem active={selectedLoginMethod === "OneTimeNumber"}>
            <a onClick={() => setSelectedLoginMethod("OneTimeNumber")}>
              일회용 번호
            </a>
          </LoginMethodItem>
          <LoginMethodItem active={selectedLoginMethod === "QRCode"}>
            <a onClick={() => setSelectedLoginMethod("QRCode")}>QR 코드</a>
          </LoginMethodItem>
        </LoginMethodsList>
        {/* 선택된 로그인 방법에 따라 다른 컴포넌트를 렌더링합니다. */}
        {selectedLoginMethod === "ID" && <IDLogin />}
        {selectedLoginMethod === "OneTimeNumber" && <OneTimeNumberLogin />}
        {/* QR 코드 로그인 컴포넌트가 필요하다면 여기에 추가합니다. */}
      </LoginMethodsContainer>
      <LinkContainer>
        <StyledLink href=""> 비밀번호 찾기 </StyledLink>
        <Separator>|</Separator>
        <StyledLink href="">아이디 찾기</StyledLink>
        <Separator>|</Separator>
        <StyledLink href="/signup">회원가입</StyledLink>
      </LinkContainer>
    </Wrapper>
  );
};

export default Login;
