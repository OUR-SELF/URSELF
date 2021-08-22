import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SocialButton from 'components/SocialButton';

const Signup = () => {
  return (
    <Container>
      <Wrapper>
        <Title>가입하기</Title>
        <SocialButton type="google" content="Google로 가입하기" />
        <SocialButton type="kakao" content="카카오톡으로 가입하기" />
        <SocialButton type="naver" content="네이버로 가입하기" />
        <Line />
        <SocialButton
          type="email"
          content="이메일로 가입하기"
          to="/signup/email"
        />
        <AskItem>
          <span>이미 회원이신가요?</span>
          <Link to="/login">로그인</Link>
        </AskItem>
      </Wrapper>
    </Container>
  );
};

export default Signup;

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

const AskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 15px;
  span {
    margin-right: 5px;
  }
`;

const Title = styled.h1`
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 24px;
  margin-bottom: 30px;
`;

const Line = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 0.3px;
  background: #c4c4c4;
`;
