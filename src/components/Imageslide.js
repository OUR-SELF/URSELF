import React from 'react'
import {Carousel} from 'react-bootstrap';
import styled from 'styled-components';
const Image = styled.img`
    height:400px;
    
`;
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
                        <div style={{position:"absolute",display:"flex",left:"10%",bottom:"75%"}}>

                            <h3></h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                        
                    
                </Carousel.Item>
                <Carousel.Item>
                <Image
                        className="d-block w-100"
                        src="/img/carousel__img.jpg"
                        alt="First slide">
                    </Image>

                    <Carousel.Caption style={{position:"absolute",color:"black"}} >
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="/img/carousel__img.jpg"
                        alt="First slide">
                    </Image>

                    <Carousel.Caption style={{position:"absolute",color:"black"}} >
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Imageslide
