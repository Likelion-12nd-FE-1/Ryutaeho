import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>네이버 로그인</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">아이디</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className="login-button">
            로그인
          </button>
        </form>
        <div className="links">
          <a href="#">아이디 찾기</a>
          <a href="#">비밀번호 찾기</a>
          <a href="#">회원가입</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
