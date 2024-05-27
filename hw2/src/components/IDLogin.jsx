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

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
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

const IDLogin = () => (
  <Form>
    <Input type="text" placeholder="아이디" />
    <Input type="password" placeholder="비밀번호" />
    <CheckboxContainer>
      <label>
        <input type="checkbox" /> 로그인 상태 유지
      </label>
      <span>IP보안</span>
    </CheckboxContainer>
    <LoginButton type="submit">로그인</LoginButton>
  </Form>
);

export default IDLogin;
