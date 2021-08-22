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
    box-shadow: 1px 3px 3px 2px gray;
    max-width:230px;
    font-family: 'GmarketSansMedium', sans-serif;
    display:flex;
    flex-direction: column;
    
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
    font-family: 'GmarketSansBold', sans-serif;
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
    border-left:0.1px solid gray;
    border-right:0.1px solid gray;
`;

const MoreInfo = styled.div`
   
    width:100%;
    display: flex;
    justify-content: space-between;
    border:0.1px solid gray;
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
