import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Card from './Card';

const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Top = styled.div`
  font-family: 'GmarketSansBold', sans-serif;
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 20px;
`;

const Plus = styled.div`
  font-family: 'GmarketSansMedium', sans-serif;
  font-size: 15px;
  width: 60px;
  padding-right: 10px;
`;

const Title = styled.span`
  font-size: 32px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

function HomeIdea() {
  const list = [
    {
      src: '/img/card1.jpg',
      title: '끈적임 없는 참마크림, 비건크림',
      category: '뷰티',
      username: '강민정',
      numofPeople: 34,
      days: 24,
      price: '50,000',
      totalprice: '560,000',
    },
    {
      src: '/img/card1.jpg',
      title: '끈적임 없는 참마크림, 비건크림',
      category: '뷰티',
      username: '강민정',
      numofPeople: 34,
      days: 24,
      price: '50,000',
      totalprice: '560,000',
    },
    {
      src: '/img/card1.jpg',
      title: '끈적임 없는 참마크림, 비건크림',
      category: '뷰티',
      username: '강민정',
      numofPeople: 34,
      days: 24,
      price: '50,000',
      totalprice: '560,000',
    },
  ];
  const maplist = list.map((one) => {
    return <Card one={one} />;
  });

  return (
    <Container>
      <Top>
        <Title>펀딩중인 아이디어</Title>
        <Link>
          <Plus to="/project">더보기</Plus>
        </Link>
      </Top>
      <CardContainer>{maplist}</CardContainer>
    </Container>
  );
}

export default HomeIdea
