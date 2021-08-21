import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import SocialButton from 'components/SocialButton';
import PurpleButton from 'components/PurpleButton';

const EmailSignUp = () => {
  return (
    <Container>
      <Wrapper>
        <Title>이메일로 가입하기</Title>
        <RadioWrap>
          <input type="radio" id="normal" name="type" checked={true} />
          <label htmlFor="normal">개인 회원</label>
          <input type="radio" id="company" name="type" />
          <label htmlFor="company">기업 회원</label>
        </RadioWrap>
        <Item>
          <label htmlFor="email">이메일</label>
          <Input type="email" id="email" />
        </Item>
        <Item>
          <label htmlFor="password">비밀번호</label>
          <Input type="password" id="password" />
          <Input type="password" id="password" />
        </Item>
        <Item>
          <label htmlFor="name">이름</label>
          <Input type="text" id="name" />
        </Item>
        <Line />
        <Item>
          <span>성별</span>
          <RadioWrap>
            <input type="radio" id="male" name="gender" checked={true} />
            <label htmlFor="male">남성</label>
            <input type="radio" id="female" name="gender" />
            <label htmlFor="female">여성</label>
          </RadioWrap>
        </Item>
        <Item>
          <span>나이</span>
          <Input type="number" />
        </Item>
        <Item>
          <span>전화번호</span>
          <Input type="email" id="email" />
        </Item>
        <StringItem>
          <div>
            <input type="checkbox" />
            <span>서비스 이용 약관 동의</span>
          </div>
        </StringItem>

        <PurpleButton to="/login">회원가입</PurpleButton>

        <AskItem>
          <span>이미 회원이신가요?</span>
          <Link to="/login">로그인</Link>
        </AskItem>
      </Wrapper>
    </Container>
  );
};

export default EmailSignUp;

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
  input {
    margin-top: 7.5px;
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
  height: 34px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
`;

const Line = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 0.3px;
  background: #c4c4c4;
`;

const RadioWrap = styled.div`
  display: flex;

  width: 300px;
  height: 34px;
  margin: 10px 0;

  label {
    display:flex;
    align-items: center;
    justify-content:center;
    width: 50%;
    height: 100%;
    background: #fff;
    border: 1px solid #6432b7;
    padding: 5px 12.5px;
    cursor: pointer;
    transition: box-shadow 400ms ease;
    color: #6432b7;
}

    input[type='radio'] {
      display: none;
    }

    input[type='radio']:checked + label {
      background: #6432b7;
      color: #fff;
      border-color: #6432b7;
    }
  }
`;
