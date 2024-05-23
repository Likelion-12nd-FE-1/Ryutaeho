import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <h1>홈 화면</h1>
      <Links>
        <Link to="/login">로그인으로 이동</Link>
      </Links>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f1;
`;

const Links = styled.div`
  margin-top: 15px;
  a {
    margin: 0 5px;
    color: #2db400;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Home;
