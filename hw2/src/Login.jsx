import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  const [selectedOption, setSelectedOption] = useState("id");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [oneTimeCode, setOneTimeCode] = useState("");
  const [isLoginStateChecked, setIsLoginStateChecked] = useState(false);
  const [isIPSecurityChecked, setIsIPSecurityChecked] = useState(false);

  return (
    <LoginContainer>
      <Title>네이버 로그인</Title>
      <LoginOptions>
        <OptionButton
          onClick={() => setSelectedOption("id")}
          selected={selectedOption === "id"}
        >
          ID 로그인
        </OptionButton>
        <OptionButton
          onClick={() => setSelectedOption("oneTimeCode")}
          selected={selectedOption === "oneTimeCode"}
        >
          일회용 번호
        </OptionButton>
        <OptionButton
          onClick={() => setSelectedOption("qr")}
          selected={selectedOption === "qr"}
        >
          QR 로그인
        </OptionButton>
      </LoginOptions>
      {selectedOption === "id" && (
        <LoginForm>
          <InputGroup>
            <Label htmlFor="username">아이디</Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <AdditionalOptions>
            <CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                checked={isLoginStateChecked}
                onChange={() => setIsLoginStateChecked(!isLoginStateChecked)}
              />
              로그인 상태 유지
            </CheckboxLabel>
            <CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                checked={isIPSecurityChecked}
                onChange={() => setIsIPSecurityChecked(!isIPSecurityChecked)}
              />
              IP 보안
            </CheckboxLabel>
          </AdditionalOptions>
        </LoginForm>
      )}
      {selectedOption === "oneTimeCode" && (
        <LoginForm>
          <InputGroup>
            <Label htmlFor="oneTimeCode">일회용 번호</Label>
            <Input
              type="text"
              id="oneTimeCode"
              name="oneTimeCode"
              value={oneTimeCode}
              onChange={(e) => setOneTimeCode(e.target.value)}
            />
          </InputGroup>
        </LoginForm>
      )}
      <Link to="/">
        <LoginButton>로그인</LoginButton>
      </Link>
      <SignupLink to="/signup">회원가입</SignupLink>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #2db400;
`;

const LoginOptions = styled.div`
  display: flex;
`;

const OptionButton = styled.button`
  flex: 1;
  padding: 10px;
  background-color: ${({ selected }) => (selected ? "#2db400" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#333")};
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${({ selected }) => (selected ? "#2db400" : "#f1f1f1")};
  }
`;

const LoginForm = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

// 계속된 부분

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AdditionalOptions = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

const CheckboxInput = styled.input`
  margin-right: 5px;
`;

const LoginButton = styled.button`
  width: 300px;
  margin-top: 10px;
  padding: 10px;
  background-color: #2db400;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #249600;
  }
`;

const SignupLink = styled(Link)`
  margin-top: 20px;
  color: #2db400;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Login;
