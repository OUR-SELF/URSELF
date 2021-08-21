import React from 'react'
import {Carousel} from 'react-bootstrap';
import styled from 'styled-components';
const Image = styled.img`
    height:400px;
    
`;
const FirstComment= styled.div`
    font-family: 'GmarketSansBold', sans-serif;
    position:absolute;
    display:flex;
    flex-direction:column;
    left:6%;
    bottom:75%;
`;
const SecondComment= styled.div`
    font-family: 'GmarketSansBold', sans-serif;
    position:absolute;
    display:flex;
    flex-direction:column;
    left:65%;
    bottom:20%;
`;
const NameComment=styled.div`
    font-size:30px;
    color:#6432B7;
`;
const NormalComment=styled.div`
    font-size:30px;
    color:black;
`;
const CommentContainer=styled.div`
    display:flex;
    
    
`

function Imageslide() {
    return (
        <div>
            <Carousel>
                <Carousel.Item >
                    <Image
                        className="d-block w-100"
                        src="/img/carousel__img.jpg"
                        alt="First slide">
                    </Image>
                        <FirstComment >
                            <CommentContainer>
                                <NameComment>한식매니아</NameComment>
                                <NormalComment>님이 제안한 김밥세트</NormalComment>
                            </CommentContainer>
                            <CommentContainer>
                                <NameComment>동원식품</NameComment>
                                <NormalComment>에서 참여</NormalComment>
                            </CommentContainer>
                            
                        </FirstComment>
                        <SecondComment>
                            <CommentContainer>
                                <NormalComment >총&nbsp; </NormalComment>
                                <NameComment>56,194,000</NameComment>
                                <NormalComment> 원 펀딩</NormalComment>
                            </CommentContainer>
                            <CommentContainer>
                                <NormalComment >총&nbsp; </NormalComment>
                                <NameComment>4,894</NameComment>
                                <NormalComment>명 참여</NormalComment>
                            </CommentContainer>
                        </SecondComment>
                    
                </Carousel.Item>
                <Carousel.Item>
                <Image
                        className="d-block w-100"
                        src="/img/pillow.png"
                        alt="First slide">
                    </Image>

                    <FirstComment >
                            <CommentContainer>
                                <NameComment>잠만보</NameComment>
                                <NormalComment>님이 제안한 침구세트</NormalComment>
                            </CommentContainer>
                            <CommentContainer>
                                <NameComment>이브자리</NameComment>
                                <NormalComment>에서 참여</NormalComment>
                            </CommentContainer>
                            
                        </FirstComment>
                        <SecondComment>
                            <CommentContainer>
                                <NormalComment > 총&nbsp; </NormalComment>
                                <NameComment>37,915,300</NameComment>
                                <NormalComment> 원 펀딩</NormalComment>
                            </CommentContainer>
                            <CommentContainer>
                                <NormalComment > 총&nbsp; </NormalComment>
                                <NameComment>967</NameComment>
                                <NormalComment>명 참여</NormalComment>
                            </CommentContainer>
                        </SecondComment>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="/img/image1.jpg"
                        alt="First slide">
                    </Image>

                    <FirstComment >
                            <CommentContainer>
                                <NameComment>제주도매니아</NameComment>
                                <NormalComment>님이 제안한 캐리어</NormalComment>
                            </CommentContainer>
                            <CommentContainer>
                                <NameComment>샘소나이트</NameComment>
                                <NormalComment>에서 참여</NormalComment>
                            </CommentContainer>
                            
                        </FirstComment>
                        <SecondComment>
                            <CommentContainer>
                                <NormalComment > 총&nbsp; </NormalComment>
                                <NameComment>101,540,000</NameComment>
                                <NormalComment> 원 펀딩</NormalComment>
                            </CommentContainer>
                            <CommentContainer>
                                <NormalComment > 총&nbsp; </NormalComment>
                                <NameComment>1,094</NameComment>
                                <NormalComment>명 참여</NormalComment>
                            </CommentContainer>
                        </SecondComment>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Imageslide
