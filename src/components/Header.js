import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

const Header = () => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <div>
        <Logo
          alt="logo"
          src="/images/URSELF-logo.png"
          onClick={() => history.push('/')}
        />
        <Link to="/project">제안된 프로젝트</Link>
        <Link to="/company">함께하고 있는 기업</Link>
      </div>
      <div>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  height: 40px;
  margin: 0 auto;
  div {
    height: 100%;
    display: flex;
    align-items: center;
    a {
      font-size: 12px;
      margin-right: 10px;
    }
  }
`;

const Logo = styled.img`
  height: 60%;
  cursor: pointer;
  margin-right: 20px;
  width:80px;
`;
