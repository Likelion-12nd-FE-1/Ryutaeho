import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
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

const LoginLink = styled(Link)`
  margin-right: 10px;
  color: #1ec800;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 로그인 처리 로직을 추가하세요.
    console.log("로그인 시도:", username, password);
  };

  return (
    <LoginContainer>
      <h2>로그인</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        <LoginLink to="/forgot-password">비밀번호 찾기</LoginLink>|
        <LoginLink to="/find-id">아이디 찾기</LoginLink>|
        <LoginLink to="/signup">회원가입</LoginLink>
      </LinkContainer>
    </LoginContainer>
  );
};

export default Login;
