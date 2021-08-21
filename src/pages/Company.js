import React from 'react'
import styled from 'styled-components'
import CompanyCard from 'components/CompanyCard' 
function Company() {
    const list =[{src:"/img/cc1.jpg",name:"주식회사 셀프메이드",desc:"더 편한 생활용품을 만드는 <주식회사 셀프메이드> 입니다.",category:"식품/리빙", numofproject:"3개의 프로젝트",heartsrc:"/img/emptyhart.jpg"},
    {src:"/img/cc2.jpg",name:"농업회사법인 주식회사 벗드림",desc:"부산에서 생산되는 농산물을 이용하여 전통주를 만드는 회사입니다.",category:"식품/리빙", numofproject:"3개의 프로젝트",heartsrc:"/img/emptyhart.jpg"},
    {src:"/img/cc3.jpg",name:"(주)마링",desc:"(주)마링, 안고 자는 감정 일기,마봉이입니다.",category:"공예", numofproject:"1개의 프로젝트",heartsrc:"/img/emptyhart.jpg"},
    {src:"/img/cc4.jpg",name:"(주)스퀴즈브루어리",desc:"양조장비의 차이가 맥주 품질의 차이를 만듭니다.",category:"식품/리빙", numofproject:"3개의 프로젝트",heartsrc:"/img/emptyhart.jpg"}]

    const maplist= list.map((one)=> {
        return(
            <CompanyCard one={one}/>
        );

    })
    return (
        <Container>
            <ImageBanner src="/img/Company__banner.jpg"></ImageBanner>
            <Title>전체보기</Title>
            <CardContainer>
                {maplist}
            </CardContainer>
            <CardContainer>
                {maplist}
            </CardContainer>
           
        </Container>
    )
}

export default Company
const Container= styled.div`
    max-width:1100px;
    margin:auto;
    display:flex;
    flex-direction: column;
    font-family: 'GmarketSansMedium', sans-serif;
`;
const ImageBanner=styled.img`
    margin-bottom:4%;
`;
const Title=styled.div`
    font-family: 'GmarketSansBold', sans-serif;
    font-size:50px;
    margin-bottom:5%;
    border-bottom:1px solid gray;
`;
const CardContainer= styled.div`
    display:flex;
    justify-content: space-between;
    text-align:justify;
    margin-bottom:5%;
`;
