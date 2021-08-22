import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { ProgressBar } from 'react-bootstrap';
function Card(props) {
    const onClick=((e)=>{
        //좋아요 버튼 클릭 이벤트.

    });
    return (
        <CardContainer>
            <Link to="/">
                <Image src={props.one.src}></Image> 
                <Title>{props.one.title}</Title>
            </Link>
            <Category>{props.one.category}</Category>
            <Character>
                <Ava_img src={props.one.src}></Ava_img>
                <Username>{props.one.username}</Username>
            </Character>
            <ProgressBar style={{animated:"false",backgroundColor:"C4C4C4"}} now={0} />

            <FirstInfo>
                <SubInfo>
                    <NumPeople>
                        {props.one.numofPeople}명
                    </NumPeople>
                    <Totalprice>
                        {props.one.totalprice}원
                    </Totalprice>
                
                </SubInfo>
                <Totalprice>
                {props.one.days}일 남음
                </Totalprice>
            </FirstInfo>

            <SecondInfo>
                <LikeButtons onClick={onClick}>
                    <div>
                        ♥{props.one.numofPeople}
                    </div>

                </LikeButtons>
                <Price>
                    {props.one.price}원
                </Price>
            </SecondInfo>

        </CardContainer>
           
        
    )
}
const Image= styled.img`
    border-radius:7%;
`;
const CardContainer=styled.div`
font-family: 'Noto Sans KR', sans-serif;
font-weight:500;
padding:15px;
display:flex;
flex-direction:column;
box-shadow: 1px 3px 3px 2px gray;
border-radius: 5%;
`;
const Title= styled.div`
    font-weight:700;
    display:flex;
    font-size:20px;
    padding-top:10px;
    padding-bottom:5px;
`;
const Category=styled.div`
    font-weight:400;
    font-size:15px;
    color:gray;
    display:flex;
    margin-top:2%;
    margin-bottom:1%;
`;
const Character=styled.div`
    margin-top:3%;
    display:flex;
    text-align:center;
    margin-bottom:5%;
    font-weight:600;
`;
const Ava_img=styled.img`
    width:35px;
    height:35px;
    border-radius:80%;
    margin-right:5%;
`;
const Username=styled.div`
    font-size:15px;
    margin-top:4%;
`;
const FirstInfo= styled.div`
    margin-top:4%;
    display:flex;
    justify-content: space-between;`;
const SubInfo=styled.div`
    width:38%;
    display:flex;
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
