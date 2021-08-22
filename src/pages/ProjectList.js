import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { BiPlusCircle, BiChevronDown } from 'react-icons/bi';
import Search from 'components/Search';
import Card from 'components/Card';
const ProjectList = () => {
  const history = useHistory();
  const list=[{src:"/img/card1.jpg",title:"끈적임 없는 참마크림, 비건크림", category:"뷰티", username:"강민정" , numofPeople:34, days:24, price:"50,000",totalprice:"560,000" },
    {src:"/img/card1.jpg",title:"끈적임 없는 참마크림, 비건크림", category:"뷰티", username:"강민정" , numofPeople:34, days:24, price:"50,000",totalprice:"560,000" },
    {src:"/img/card1.jpg",title:"끈적임 없는 참마크림, 비건크림", category:"뷰티", username:"강민정" , numofPeople:34, days:24, price:"50,000" ,totalprice:"560,000"},
    ,{src:"/img/card1.jpg",title:"끈적임 없는 참마크림, 비건크림", category:"뷰티", username:"강민정" , numofPeople:34, days:24, price:"50,000" ,totalprice:"560,000"}
    ,{src:"/img/card1.jpg",title:"끈적임 없는 참마크림, 비건크림", category:"뷰티", username:"강민정" , numofPeople:34, days:24, price:"50,000" ,totalprice:"560,000"}
    ,{src:"/img/card1.jpg",title:"끈적임 없는 참마크림, 비건크림", category:"뷰티", username:"강민정" , numofPeople:34, days:24, price:"50,000" ,totalprice:"560,000"},  
  ];

  const maplist = list.map((one)=>{
    return <Card one={one}/>

  })
  
  return (
    <>
     
      <Container>
        <img alt="banner" src={'/images/top-banner.png'} />
        <SelectBar>
          <div>
            <h2>전체보기</h2> <BiChevronDown size={24} />
          </div>
          <div>
            <Search />
            <h4>추천순</h4> <BiChevronDown size={20} />
          </div>
        </SelectBar>
        <Line />
        <YellowButton onClick={() => history.push('/project/create')}>
          <BiPlusCircle size={22} />
          <span>펀딩 아이디어 제안하기</span>
        </YellowButton>
        <CardContainer>
        {maplist}

        </CardContainer>
        
      </Container>
    </>
  );
};

export default ProjectList;

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

const SelectBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  font-family: 'GmarketSansBold', sans-serif;
  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    h2 {
      font-size: 20px;
    }
    h4 {
      font-size: 14px;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #c4c4c4;
  margin: 5px 0;
`;

const YellowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
  margin: 20px 0;
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 20px;
  background-color: #ffd600;
  border-radius: 8px;
  backdrop-filter: blur(4px);
  margin-bottom:50px;
  span {
    margin-left: 20px;
  }
`;
const CardContainer= styled.div`
  display:flex;
  justify-content:space-evenly;
  text-align:center;
  margin-bottom:50px;
  flex-wrap: wrap; 
`;