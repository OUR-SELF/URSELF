import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { ProgressBar } from 'react-bootstrap';
const Image= styled.img`
    border-radius:7%;
`;
const CardContainer=styled.div`
font-family: 'GmarketSansMedium', sans-serif;

padding:15px;
display:flex;
flex-direction:column;
box-shadow: 1px 3px 3px 2px gray;

border-radius: 5%;

`;
const Title= styled.div`
    
    display:flex;
    font-size:20px;
    padding-top:10px;
    padding-bottom:5px;
`;
const Category=styled.div`
    font-family: 'GmarketSansMedium', sans-serif;
    font-size:12px;
    color:gray;
    display:flex;
`;
const Character=styled.div`
    margin-top:3%;
    display:flex;
    text-align:center;
    margin-bottom:3%;
    
`;
const Ava_img=styled.img`
    width:25px;
    height:25px;
    border-radius:80%;
    margin-right:5%;
`;
const Username=styled.div`
    font-size:15px;
    margin-top:2.5%;
`;
const FirstInfo= styled.div`
    margin-top:4%;
    display:flex;
    justify-content: space-between;`;
const SubInfo=styled.div`
    width:30%;
    display:flex;
    justify-content: space-between;
`;

const NumPeople=styled.div`
    font-family: 'GmarketSansBold', sans-serif;
    font-weight:100%;
    margin-right:2%;

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

`;
const Buttons= styled.div`
   font-family: 'GmarketSansMedium', sans-serif;
   display:flex;

`;


function Card(props) {
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
                {props.one.totalprice}원
                </SubInfo>
                {props.one.days}일 남음
            </FirstInfo>

            <SecondInfo>
                <Buttons>
                    <Buttons>
                        <img src="/img/button.jpg"></img>
                    </Buttons>
                </Buttons>
                <Price>
                    {props.one.price}원
                </Price>
            </SecondInfo>

        </CardContainer>
           
        
    )
}

export default Card
