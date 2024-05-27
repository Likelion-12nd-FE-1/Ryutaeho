import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const LoginButton = styled.button`
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

const OneTimeNumberLogin = () => (
  <Form>
    <Input type="text" placeholder="번호 입력" />
    <LoginButton type="submit">로그인</LoginButton>
  </Form>
);

export default OneTimeNumberLogin;
