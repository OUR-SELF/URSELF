import React,{useEffect , useState} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { BiPlusCircle, BiChevronDown } from 'react-icons/bi';
import Search from 'components/Search';
import Card from 'components/Card';
import axios from 'axios';
import { data } from 'data';

const ProjectList = () => {
  const history = useHistory();
  const list = data;

  const maplist = list.map((one) => {
    return <Card one={one} />;
  });

  
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      axios.get('http://127.0.0.1:8000/projects/')
      .then(response => {
          setPosts(response.data); //projects 목록 받아서 posts배열에 저장.
      })
  }, [])
  useEffect(()=>{
      //console.log(posts);
  },[posts])
   
  const mapposts = posts.map((one) => {
    return (
      <           Card one={one} />
    );

  })
 

  return (
    <>
      <img alt="banner" src={'/images/top-banner.png'} />
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
        <YellowButton onClick={() => history.push('/project/create')}>
          <BiPlusCircle size={22} />
          <span>펀딩 아이디어 제안하기</span>
        </YellowButton>
        <CardContainer>{mapposts}</CardContainer>
      </Container>
    </>
  );
};

export default ProjectList;

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 60px;
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
  margin: 30px 0 50px 0;
  span {
    margin-left: 20px;
  }
`;
const CardContainer = styled.div`
  width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 40px;
`;