import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineMail } from 'react-icons/ai';

const SocialButton = ({ type, content, to }) => {
  return (
    <>
      <Button to={to}>
        {type === 'google' && <FcGoogle size={18} />}
        {type === 'kakao' && <Kakao />}
        {type === 'naver' && <Naver />}
        {type === 'email' && <AiOutlineMail size={18} />}
        <Content>{content}</Content>
      </Button>
    </>
  );
};

export default SocialButton;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 35px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  margin: 10px 0;
`;

const Content = styled.span`
  font-size: 12px;
  margin-left: 15px;
`;

const Kakao = styled.div`
  width: 18px;
  height: 18px;
  background-image: url('/images/kakao.png');
  background-size: contain;
`;

const Naver = styled(Kakao)`
  background-image: url('/images/naver.png');
`;
