import React from 'react'
import styled from 'styled-components';
import {Carousel} from 'react-bootstrap';
import HomeIdea from 'components/HomeIdea';
import ImageSlide from 'components/Imageslide';
const Image= styled.img`
margin-top:5%;
margin-bottom:5%;
width:100%;
height:50%;
padding-left:10%;
padding-right:10%;
padding-top:5%;
padding-bottom:5%;`;


const Container= styled.div`
margin-left:8%;
margin-right:8%;
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;`;

const CarouselContainer = styled.div`

  width:100%;
  height:30%;
`;

const ServiceTitle = styled.h1`
font-family: 'GmarketSansBold', sans-serif;
margin-top:10%;
font-size:50px;

display:flex;
justify-content:flex-start;
`;
function Home() {
  return (
    <div>
      <CarouselContainer>

        <ImageSlide/>
      </CarouselContainer>
     
     
      <Container>
        <ServiceTitle>서비스소개</ServiceTitle>
        <Image src="/img/service.jpg"></Image>
        <Image src="/img/process.jpg"></Image>
        <HomeIdea/>
      </Container>

      </div>
    
  )
}

export default Home
