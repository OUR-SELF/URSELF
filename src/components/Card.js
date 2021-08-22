import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import { BASE_URL } from 'data';

const defaultUserName = '장하얀';
const defaultUserImg = `${BASE_URL}/media/profile-default-img`;

const Card = (props) => {
  const [name, setName] = useState(defaultUserName);
  const [imgaddress, SetImgadress] = useState('');
  const [userImg, setUserImg] = useState(defaultUserImg);
  const [url, Seturl] = useState('');
  useEffect(() => {
    var imgaddress = 'http://127.0.0.1:8000';
    imgaddress += props.one.thumbnail_image;
    SetImgadress(imgaddress);
    var user_img_add = 'http://127.0.0.1:8000';
    var moveToUrl = '/project/';
    moveToUrl += props.one.id;
    console.log(moveToUrl);
    Seturl(moveToUrl);
    axios
      .get('http://127.0.0.1:8000/users/') //userlist가져오기
      .then((response) => {
        var step;
        for (step = 0; step < response.data.length; step++) {
          if (props.one.user === response.data[step].id) {
            //props.one.user
            const userName = response.data[step].name;
            if (userName) {
              setName(userName);
            }
            user_img_add += response.data[step].profile_img;

            if (user_img_add) {
              setUserImg(user_img_add);
            }
          }
        }
      });
  }, []);

  useEffect(() => {
    console.log(props.one.id, userImg, name);
  }, [userImg]);

  const onClick = (e) => {
    //좋아요 버튼 클릭 이벤트.
  };
  return (
    <CardContainer>
      <Link to={url}>
        <Image src={imgaddress}></Image>
        <Title>{props.one.name}</Title>
      </Link>
      <Category>{props.one.category}</Category>
      <Character>
        <Avatar alt="user-avartar" src={userImg} />
        <Username>{name}</Username>
      </Character>
      <ProgressBar now={0} />

      <FirstInfo>
        <SubInfo>
          <NumPeople>{props.one.target_count}명</NumPeople>
          <Totalprice>{props.one.target_amount}원</Totalprice>
        </SubInfo>
        <Totalprice>24일 남음</Totalprice>
      </FirstInfo>

      <SecondInfo>
        <LikeButtons onClick={onClick}>
          <div>♥{props.one.liked}</div>
        </LikeButtons>
        <Price>{props.one.price}원</Price>
      </SecondInfo>
    </CardContainer>
  );
};
const Image = styled.img`
  border-radius: 7%;
  width: 270px;
`;

const CardContainer = styled.div`
  width: 300px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  padding: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5%;
  /* margin-right: 20px; */
  margin-bottom: 30px;
`;
const Title = styled.div`
  font-weight: 700;
  display: flex;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 5px;
`;
const Category = styled.div`
  font-weight: 400;
  font-size: 15px;
  color: gray;
  display: flex;
  margin-top: 2%;
  margin-bottom: 1%;
`;
const Character = styled.div`
  margin-top: 3%;
  display: flex;
  text-align: center;
  margin-bottom: 5%;
  font-weight: 600;
`;
const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 80%;
  margin-right: 5%;
`;
const Username = styled.div`
  font-size: 15px;
  margin-top: 4%;
`;
const FirstInfo = styled.div`
  margin-top: 4%;
  display: flex;
  justify-content: space-between;
`;
const SubInfo = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;
const NumPeople=styled.div` 
    font-size:13px;
    font-weight:700;
    margin-right:2%;
`;
const Totalprice= styled.div`
    font-size:13px;
`;
const SecondInfo=styled.div`
    margin-top:6%;
    margin-bottom:3%;
    display:flex;
    justify-content: space-between;
`;
const Price= styled.div`
    font-family: 'GmarketSansBold', sans-serif;
    font-size:20px;
    padding-top:8px;
`;
const LikeButtons= styled.button`
   background-color: #ffffff;
   border-radius: 20%;
   border:2px solid gray;
   font-size:15px;
   font-weight:700;
   margin:3px;
   color:gray;
   div{
    margin:5px;
   }
    
`;
export default Card
