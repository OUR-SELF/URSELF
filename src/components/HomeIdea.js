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
    const [first,setFirst]=useState();
    const [second,setSecond]=useState();
    const [third,setThird]=useState();
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/projects/')
        .then(response => {
            const list=[];
            list[0]=response.data[0];
            list[1]=response.data[1];
            list[2]=response.data[2];
            setPosts(list); //projects 목록 받아서 posts배열에 저장.
        })
    }, [])
    useEffect(()=>{
        setFirst(posts[0])
        setSecond(posts[1])
        setThird(posts[2])
        console.log(first);
        console.log(second);
        console.log(third);

    },[posts])

 

    const mapposts=posts.map((one)=>{
        return(
            <Card one={one}/>
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
