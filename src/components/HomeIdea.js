import React, {useState,useEffect}from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
margin-top:100px;
margin-bottom:100px;
display:flex;
flex-direction:column;
justify-content:center;
text-align:center;`;

const Top = styled.div`
margin-left:30px;
margin-right:30px;
font-family: 'GmarketSansBold', sans-serif;
display:flex;
justify-content:space-between;
text-align:center;
margin-bottom:50px;
`;

const Plus= styled.div`
font-family: 'GmarketSansMedium',sans-serif;
font-size:15px;
width:60px;
margin-top:40%;
padding-right:5%; 
`;

const Title= styled.span`
font-size:32px;`;


const CardContainer= styled.div`
display:flex;
justify-content:space-around;
text-align:center;
`;


function HomeIdea() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/projects/')
        .then(response => {
            console.log(response)
            setPosts(response.data);
            console.log(posts);
            
        })
        
    }, [])
    useEffect(()=>{
        console.log(posts);

    },[posts])

    const list=[{src:"/img/card1.jpg",title:"끈적임 없는 참마크림, 비건크림", category:"뷰티", username:"강민정" , numofPeople:34, days:24, price:"50,000",totalprice:"560,000" },
    {src:"/img/card1.jpg",title:"끈적임 없는 참마크림, 비건크림", category:"뷰티", username:"강민정" , numofPeople:34, days:24, price:"50,000",totalprice:"560,000" },
    {src:"/img/card1.jpg",title:"끈적임 없는 참마크림, 비건크림", category:"뷰티", username:"강민정" , numofPeople:34, days:24, price:"50,000" ,totalprice:"560,000"}];
    const maplist =list.map((one)=> {
        return (
            <Card one={one}/>
        );

    })

    const mapposts=posts.map((one)=>{
        return(
<           Card one={one}/>
        );

    })
    return (
        <Container>
            <Top>
                <Title>펀딩중인 아이디어</Title>
                <Link to="/project"><Plus>더보기</Plus></Link>
            </Top>
            <CardContainer>
                {mapposts}
            </CardContainer>
                
        </Container>
    )
}

export default HomeIdea
