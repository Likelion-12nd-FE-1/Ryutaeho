import React, { useState } from "react";
import styled from "styled-components";
import { FaUser, FaLock } from "react-icons/fa";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
`;

const InputContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const IconContainer = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 15px;
  border: none;
  width: 100%;
  box-sizing: border-box;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 10px 0;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: #666;
  cursor: pointer;
  font-size: 14px; /* 텍스트 크기를 줄임 */
`;

const CheckboxInput = styled.input`
  display: none;
`;

const Checkmark = styled.span`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid ${({ checked }) => (checked ? "#1ec800" : "#ccc")};
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({ checked }) => (checked ? "#1ec800" : "white")};
  transition: background-color 0.3s;
  &::after {
    content: "\\2713"; /* 항상 체크 표시 */
    font-size: 14px;
    color: ${({ checked }) =>
      checked ? "white" : "#ccc"}; /* 체크하지 않았을 때 체크 기호 색상 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SliderContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 18px;
  margin-left: 10px;
`;

const SliderInput = styled.input`
  display: none;
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ checked }) => (checked ? "#1ec800" : "#ccc")};
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 14px;
    border-radius: 50%;
    background-color: white;
    top: 2px;
    left: ${({ checked }) => (checked ? "calc(100% - 18px)" : "2px")};
    transition: left 0.3s;
  }

  ${SliderInput}:checked + & {
    background-color: #1ec800;
  }
`;

const LoginButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #09aa5c;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: larger;
  cursor: pointer;
  width: 90%;
  height: 50px;
  &:hover {
    background-color: #17b300;
  }
`;

const IDLogin = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSecureIP, setIsSecureIP] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSecureIPChange = () => {
    setIsSecureIP(!isSecureIP);
  };

  return (
    <Form>
      <InputContainer>
        <InputWrapper>
          <IconContainer>
            <FaUser />
          </IconContainer>
          <Input type="text" placeholder="아이디" />
        </InputWrapper>
        <InputWrapper>
          <IconContainer>
            <FaLock />
          </IconContainer>
          <Input type="password" placeholder="비밀번호" />
        </InputWrapper>
      </InputContainer>
      <CheckboxContainer>
        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <Checkmark checked={isChecked} />
          로그인 상태 유지
        </CheckboxLabel>
        <CheckboxLabel>
          IP보안
          <SliderContainer>
            <SliderInput
              type="checkbox"
              checked={isSecureIP}
              onChange={handleSecureIPChange}
            />
            <Slider checked={isSecureIP} />
          </SliderContainer>
        </CheckboxLabel>
      </CheckboxContainer>
      <LoginButton type="submit">로그인</LoginButton>
    </Form>
  );
};

export default IDLogin;
