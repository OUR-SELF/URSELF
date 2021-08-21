import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SocialButton from 'components/SocialButton';
import PurpleButton from 'components/PurpleButton';

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>로그인</Title>
        <Item>
          <label htmlFor="email">이메일</label>
          <Input type="email" id="email" />
        </Item>
        <Item>
          <label htmlFor="password">비밀번호</label>
          <Input type="password" id="password" />
        </Item>
        <StringItem>
          <div>
            <input type="checkbox" />
            <span>아이디 저장하기</span>
          </div>
          <Link>아이디/비밀번호 찾기 ></Link>
        </StringItem>
        <PurpleButton>로그인</PurpleButton>
        <Line />
        <SocialButton type="google" content="Google로 로그인" />
        <SocialButton type="kakao" content="카카오톡으로 로그인" />
        <SocialButton type="naver" content="네이버로 로그인" />
        <AskItem>
          <span>처음 방문하셨나요?</span>
          <Link to="/signup">회원가입</Link>
        </AskItem>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 50px auto;
  width: 300px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  label {
    margin-bottom: 7.5px;
  }
`;

const AskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 15px;
  span {
    margin-right: 5px;
  }
`;

const StringItem = styled(AskItem)`
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Title = styled.h1`
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 24px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
`;

const Line = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 0.3px;
  background: #c4c4c4;
`;
