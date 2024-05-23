import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Signup = () => {
  return (
    <SignupContainer>
      <SignupBox>
        <Title>회원가입</Title>
        <SignupForm>
          <InputGroup>
            <Label htmlFor="username">아이디</Label>
            <Input type="text" id="username" name="username" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">비밀번호</Label>
            <Input type="password" id="password" name="password" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="confirmPassword">비밀번호 확인</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="name">이름</Label>
            <Input type="text" id="name" name="name" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="birthdate">생년월일</Label>
            <Input type="date" id="birthdate" name="birthdate" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="gender">성별</Label>
            <Select id="gender" name="gender">
              <option value="">선택</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="countryCode">국가번호</Label>
            <Input type="text" id="countryCode" name="countryCode" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="phoneNumber">휴대전화번호</Label>
            <Input type="text" id="phoneNumber" name="phoneNumber" />
          </InputGroup>
          <Button>인증요청</Button>
        </SignupForm>
        <Links>
          <Link to="/login">로그인 화면으로 돌아가기</Link>
        </Links>
      </SignupBox>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f1;
`;

const SignupBox = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #2db400;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

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

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
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

const Links = styled.div`
  margin-top: 15px;
  text-align: center;
  a {
    color: #2db400;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Signup;
