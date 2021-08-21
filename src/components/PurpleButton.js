import React from 'react';
import styled from 'styled-components';

const PurpleButton = () => {
  return (
    <Button>
      <Content>로그인</Content>
    </Button>
  );
};

export default PurpleButton;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 40px;
  background: #6432b7;
  border-radius: 10px;
`;

const Content = styled.span`
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 14px;
  color: #fff;
`;
