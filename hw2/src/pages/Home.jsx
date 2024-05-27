import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginButton = styled(Link)`
  padding: 10px 20px;
  background-color: #1ec800;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

const Home = () => (
  <HomeContainer>
    <LoginButton to="/login">로그인</LoginButton>
  </HomeContainer>
);

export default Home;
