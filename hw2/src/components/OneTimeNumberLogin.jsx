import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin-top: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-top: 22px;
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 92%;
  text-align: center;
  font-size: medium;
  height: 18px;
`;

const LoginButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #09aa5c;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: larger;
  cursor: pointer;
  width: 100%;
  height: 50px;
  &:hover {
    background-color: #17b300;
  }
`;

const Instruction = styled.p`
  color: #666; /* 글자 색상을 회색으로 설정 */
  margin-bottom: 10px; /* 아래쪽 여백 추가 */
  font-size: 15px;
`;

const HighlightedText = styled.span`
  color: #09aa5c; /* 글자 색상을 초록색으로 설정 */
`;

const OneTimeNumberLogin = () => (
  <Container>
    <Instruction>
      네이버앱의
      <HighlightedText>
        &nbsp; 메뉴 &gt; 설정 &gt; 로그인 아이디 관리 &gt; <br />
        더보기 &gt; 일회용 로그인 번호
      </HighlightedText>
      에 보이는 번호를 입력해 주세요.
    </Instruction>
    <Form>
      <Input type="text" placeholder="번호를 입력하세요." />
      <LoginButton type="submit">로그인</LoginButton>
    </Form>
  </Container>
);

export default OneTimeNumberLogin;
