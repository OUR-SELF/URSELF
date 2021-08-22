import React from 'react'
import styled from 'styled-components';
import styled from 'styled-components/macro';
import { Carousel } from 'react-bootstrap';
import HomeIdea from 'components/HomeIdea';
import ImageSlide from 'components/Imageslide';

const Image = styled.img`
  margin: 30px 0;
  width: 100%;
  height: 50%;
  padding: 20px 70px;
`;
const Container = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const CarouselContainer = styled.div`
  max-width: 100vw;
  margin: 10px auto;
`;
const ServiceTitle = styled.h1`
  font-family: 'GmarketSansBold', sans-serif;
  margin-top: 50px;
  font-size: 32px;

  display: flex;
  justify-content: flex-start;
`;

function Home() {
  return (
    <div>
      <CarouselContainer>
        <ImageSlide />
      </CarouselContainer>
      <Container>
        <ServiceTitle>서비스소개</ServiceTitle>
        <Image src="/img/service.jpg"></Image>
        <Image src="/img/process.jpg"></Image>
        <HomeIdea />
      </Container>
    </div>
  );
}

export default Home
