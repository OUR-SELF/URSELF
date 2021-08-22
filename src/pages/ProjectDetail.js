import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';
import { FaUserCircle } from 'react-icons/fa';
import { DiscussionEmbed } from 'disqus-react';
import { defaultProject } from 'data';

const ProjectDetail = ({ match }) => {
  const { id } = match.params;
  const [data, setData] = useState(defaultProject);
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/projects/' + id)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <>
      <img alt="banner" src={'/images/top-banner.jpg'} />
      <Container>
        <Category>제안된 프로젝트 > 카테고리 > {data.category}</Category>
        <FlexDiv>
          <Title>{data.name}</Title>
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
                마감일 ~<b>{data.end_date}</b>
              </h4>
              <h4>
                현재까지 <b>{data.target_amount}원</b> 펀딩
              </h4>
              <br />
              <br />
              <br />
              <h4>
                <span>참여자 수</span> {data.counted_user_num}명
              </h4>
              <h4>
                <span>희망 가격대</span>
                {data.price}원
              </h4>
            </div>
            <Button>펀딩에 참여하기</Button>
          </ProjectInfo>
        </FlexDiv>
        <Section>
          <SubTitle>기업에게 한 마디</SubTitle>
          <p>{data.comment}</p>
        </Section>
        <Section>
          <SubTitle>제안의도</SubTitle>
          <p>{data.intent}</p>
        </Section>
        <Section>
          <SubTitle>프로젝트 상세 설명</SubTitle>
          <p>{data.details}</p>
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
