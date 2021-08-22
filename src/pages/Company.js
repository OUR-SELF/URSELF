import React from 'react'
import styled from 'styled-components/macro';
import { BiChevronDown } from 'react-icons/bi';
import CompanyCard from 'components/CompanyCard';
import Search from 'components/Search';
import { companyData } from 'data';

function Company() {
  const list = companyData;

  const maplist = list.map((one) => {
    return <CompanyCard one={one} />;
  });

  return (
    <>
      <ImageBanner src="/img/Company_banner.png"></ImageBanner>
      <Container>
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
        <CardContainer>{maplist}</CardContainer>
        <CardContainer>{maplist}</CardContainer>
      </Container>
    </>
  );
}

export default Company;

const SelectBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-top: 30px; */
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

const Container = styled.div`
  max-width: 80vw;
  margin: 0 auto 30px;
  display: flex;
  flex-direction: column;
  font-family: 'GmarketSansMedium', sans-serif;
`;

const ImageBanner = styled.img`
  margin-bottom: 30px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: justify;
  /* margin-bottom:5%; */
  flex-wrap: wrap;
  /* margin-left: 80px; */
`;
