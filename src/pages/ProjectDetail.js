import React from 'react';
import styled from 'styled-components/macro';
import { FaUserCircle } from 'react-icons/fa';
import { DiscussionEmbed } from 'disqus-react';

const ProjectDetail = () => {
  return (
    <>
      <img alt="banner" src={'/images/top-banner.jpg'} />
      <Container>
        <Category>제안된 프로젝트 > 게임</Category>
        <FlexDiv>
          <Title>언더테일(UnderTail)</Title>
          <User>
            <FaUserCircle size={20} />
            <span>김토비</span>
          </User>
        </FlexDiv>
        <FlexDiv>
          <ProjectImage />
          <ProjectInfo>
            <div>
              <h4>
                마감까지 <b>24일</b> 남음
              </h4>
              <h4>
                현재까지 <b>560,000원</b> 펀딩
              </h4>
              <br />
              <br />
              <br />
              <h4>
                <span>참여자 수</span> 24명
              </h4>
              <h4>
                <span>희망 가격대</span>15,000원
              </h4>
            </div>
            <Button>펀딩에 참여하기</Button>
          </ProjectInfo>
        </FlexDiv>
        <Section>
          <SubTitle>기업에게 한 마디</SubTitle>
          <p>
            언더테일은 토비 폭스가 제작한 2015년 9월 15일에 출시된 인디
            게임이다. 한국어로 '지하 이야기' 정도로 번역할 수 있겠다. 2013년부터
            킥스타터를 통해 투자받은 금액으로 제작되었으며 릴리즈 영상 출시 이후
            백만 장 이상이 팔리며 상업적인 성공을 거두었다. 타임지나 IGF, IGN,
            SWSX 등의 시상식에서 상을 수상하며 평단으로부터 높은 평가를 받았다.
            스팀과 공식 홈페이지에서 살 수 있으며, 공식 홈페이지에서 구매하면
            스팀 키와 함께 DRM Free 버전을 받을 수 있다. 정가는
            9.99달러(10,500원)로, 사운드트랙 포함 버전 17.99달러(19,000원)이다.
          </p>
        </Section>
        <Section>
          <SubTitle>제안의도</SubTitle>
          <p>
            언더테일은 토비 폭스가 제작한 2015년 9월 15일에 출시된 인디
            게임이다. 한국어로 '지하 이야기' 정도로 번역할 수 있겠다. 2013년부터
            킥스타터를 통해 투자받은 금액으로 제작되었으며 릴리즈 영상 출시 이후
            백만 장 이상이 팔리며 상업적인 성공을 거두었다. 타임지나 IGF, IGN,
            SWSX 등의 시상식에서 상을 수상하며 평단으로부터 높은 평가를 받았다.
            스팀과 공식 홈페이지에서 살 수 있으며, 공식 홈페이지에서 구매하면
            스팀 키와 함께 DRM Free 버전을 받을 수 있다. 정가는
            9.99달러(10,500원)로, 사운드트랙 포함 버전 17.99달러(19,000원)이다.
          </p>
        </Section>
        <Section>
          <SubTitle>프로젝트 상세 설명</SubTitle>
          <p>
            언더테일은 토비 폭스가 제작한 2015년 9월 15일에 출시된 인디
            게임이다. 한국어로 '지하 이야기' 정도로 번역할 수 있겠다. 2013년부터
            킥스타터를 통해 투자받은 금액으로 제작되었으며 릴리즈 영상 출시 이후
            백만 장 이상이 팔리며 상업적인 성공을 거두었다. 타임지나 IGF, IGN,
            SWSX 등의 시상식에서 상을 수상하며 평단으로부터 높은 평가를 받았다.
            스팀과 공식 홈페이지에서 살 수 있으며, 공식 홈페이지에서 구매하면
            스팀 키와 함께 DRM Free 버전을 받을 수 있다. 정가는
            9.99달러(10,500원)로, 사운드트랙 포함 버전 17.99달러(19,000원)이다.
          </p>
        </Section>
        <Section>
          <SubTitle>펀딩에 참여하기</SubTitle>
          <FlexDiv>
            <MonnyButton>+W 10,000</MonnyButton>
            <MonnyButton>+W 20,000</MonnyButton>
            <MonnyButton>+W 30,000</MonnyButton>
            <MonnyButton>+W 40,000</MonnyButton>
            <MonnyButton>+W 50,000</MonnyButton>
          </FlexDiv>
        </Section>
        <DiscussionEmbed
          shortname="urself"
          config={{
            url: 'https://github.com/OUR-SELF',
            identifier: 'ourselves',
            title: 'URSELF',
            language: 'ko_KR',
          }}
        />
      </Container>
    </>
  );
};

export default ProjectDetail;

const Category = styled.div`
  font-family: 'GmarketSansMedium', sans-serif;
  font-size: 12px;
  margin: 20px 0 0;
`;

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  p {
    font-size: 16px;
    line-height: 25px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
`;

const Title = styled.h1`
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 24px;
  margin: 20px 30px 20px 0;
`;

const SubTitle = styled(Title)`
  font-size: 20px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  span {
    margin-left: 5px;
    font-weight: 600;
  }
`;

const ProjectImage = styled.div`
  margin-left: 10px;
  width: 350px;
  height: 350px;
  object-fit: contain;
  border: solid 1px black;
`;

const ProjectInfo = styled.div`
  padding: 30px 20px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 25px;
    b {
      font-size: 24px;
      color: #6432b7;
    }
    span {
      font-family: 'GmarketSansBold', sans-serif;
      font-weight: 900;
      margin-right: 20px;
    }
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 60px;
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 20px;
  background-color: #ffd600;
  border-radius: 10px;
`;

const Section = styled.section`
  margin: 40px 0;
`;

const MonnyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  padding: 12px 16px 12px 20px;
  width: 130px;
  height: 40px;
  color: #6e41b8;
  font-family: 'GmarketSansBold', sans-serif;
  border: 1.5px solid #6e41b8;
  border-radius: 8px;
`;
