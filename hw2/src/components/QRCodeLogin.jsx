import React from "react";
import styled from "styled-components";

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

const QRCodeLogin = () => <LoginButton>QR코드 로그인</LoginButton>;

export default QRCodeLogin;
