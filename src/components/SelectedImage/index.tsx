import React, { useState } from "react";
import styled from "styled-components";

const imgStyle = {
    transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const selectedImgStyle = {
    transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
    transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const cont = {
    backgroundColor: "#eee",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative"
};


const SelectedImageContainer = styled.div`
border: 2px solid white;

    img{
        margin-bottom: 0;
    }
`;

const SelectedImage = ({
    index,
    photo,
    margin,
    direction,
    onClick,
    top,
    left,
    selected
}) => {

    //calculate x,y scale
    const sx = (100 - (30 / photo.width) * 100) / 100;
    const sy = (100 - (30 / photo.height) * 100) / 100;
    selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;

    if (direction === "column") {
        cont.position = "absolute";
        cont.left = left;
        cont.top = top;
    }

    const handleOnClick = e => {
        onClick(index, photo.width, photo.height);
    };

    return (
        <SelectedImageContainer
            style={{ margin, height: photo.height, width: photo.width, ...cont }}
        >
            <img
                alt={photo.title}
                loading="lazy"
                style={{ ...imgStyle }}
                {...photo}
                onClick={handleOnClick}
            />
            <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
        </SelectedImageContainer>
    );
};

export default SelectedImage;
