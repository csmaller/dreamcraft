import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames";

const SlideContainer = styled.div`
  
&.slide-container {
    width: 104%;
    max-height: 600px;
    margin: auto; 

  .slick-slide {
    img {
        width: 100%;
        max-height: 600px;
        object-fit: cover;
    }
  } 
}
`;

const ImageContainer = styled.div`

    position: relative;
    div{
        position: absolute;
        top: 50px;
        left: 100px;
        text-align: center;
        max-width: 350px;
        font-size: 20px;
        color: white;

        hr{
            margin-top: 15px;
            margin-bottom: 15px;
            border-top: 6px solid white;
        }

        button{
            padding: 10px;
            padding-left:50px;
            padding-right:50px;
            font-size:20px;
            opacity: .8;
            -webkit-transition: background-color,.3s border,.3s;
            -o-transition: background-color,.3s border,.3s;
            transition: background-color,.3s border,.3s;
        }

    }
`;

const CustomSlide = ({ image }) => {
    return (
        <ImageContainer>
            <img src={image} />
            <div>
                <h1>Here Is A Header</h1>
                <hr></hr>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="btn-primary"> here is a button!</button>
            </div>

        </ImageContainer>
    );
}

export default function Slideshow(props) {
    const { images, settings, wrapperClass } = props;

    return (
        <SlideContainer className={classNames("slide-container", wrapperClass)}>
            <Slider {...settings}>
                {images.map((image, index) => <CustomSlide image={image} key={index} />)}
            </Slider>
        </SlideContainer>
    )
}