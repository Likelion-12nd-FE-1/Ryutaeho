import React from "react";
import styled from "styled-components";

const SignUpContainer = styled.div`
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

const Select = styled.select`
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

const SignUp = () => {
  return (
    <SignUpContainer>
      <Form>
        <Input type="text" placeholder="아이디" required />
        <Input type="password" placeholder="비밀번호" required />
        <Input type="password" placeholder="비밀번호 확인" required />
        <Input type="text" placeholder="이름" required />
        <Input type="text" placeholder="생년월일 8자리" required />
        <Select required>
          <option value="">성별</option>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </Select>
        <Select required>
          <option value="">국가</option>
          {/* 국가 목록을 추가하세요. 예시: */}
          <option value="82">대한민국 (+82)</option>
          <option value="1">미국 (+1)</option>
        </Select>
        <Input type="text" placeholder="휴대전화번호" required />
        <Button type="submit">회원가입</Button>
      </Form>
    </SignUpContainer>
  );
};

export default SignUp;
