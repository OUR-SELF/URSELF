import React from 'react'
import styled from 'styled-components'

function CompanyCard(props) {
    return (
        <CompanyCardContainer>
            <Image src={props.one.src}></Image> 
            <InfoBox>
                <CompanyName>
                    {props.one.name}
                </CompanyName>
                <CompanyDesc>
                    {props.one.desc}
                </CompanyDesc>
            </InfoBox>
            <MoreInfo>
                <MoreInfoBox>
                    <MoreInfoCate>
                        {props.one.category}
                    </MoreInfoCate>
                    <MoreInfoPro>
                        {props.one.numofproject}
                    </MoreInfoPro>
                </MoreInfoBox>
                <HeartImg src={props.one.heartsrc}>

                </HeartImg>
            </MoreInfo>
           
        </CompanyCardContainer>
    )
}
const Image=styled.img`
    width:100%;
`;
const CompanyCardContainer=styled.div`
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    max-width:230px;
    font-family:'Noto Sans KR', sans-serif;
    display:flex;
    flex-direction: column;
    margin:50px;
  
    
`;

const MoreInfoBox=styled.div`
    width:40%;
    margin-left:4%;
    margin-top:4%;
    margin-bottom:4%;
`;
const CompanyName=styled.div`
    display:flex;
    justify-content: flex-start;
    margin-top: 5%;
    margin-left:4%;
    font-weight:700;
    font-size:14px;
    margin-bottom:3%;
`;

const CompanyDesc= styled.div`
    display:flex;
    justify-content: flex-start;
    color:#878787;
    font-size:11px;
    margin-left:5%;
    margin-right:5%;
    margin-bottom:7.5%;
    
`;
const InfoBox=styled.div`
    border-bottom:3px solid #673AB7;
  
`;

const MoreInfo = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    
`;
const MoreInfoCate=styled.div`
    margin-top:3%;
    margin-left:5%;
    font-size:11px;
    color:#878787;
    margin-bottom:2%;
    
`;
const MoreInfoPro=styled.div`
    margin-left:5%;
    font-size:11px;
    color:#878787;
    margin-bottom:5%;
`;
const HeartImg=styled.img`
    margin-top:6%;
    width:25px;
    height:25px;
    margin-right:4%;
`;
export default CompanyCard
