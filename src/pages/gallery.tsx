import React, { useCallback, useEffect, useState } from 'react'
import ImageGallery from "react-photo-gallery";
import 'react-gallery-carousel/dist/index.css';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from "styled-components";
import SelectedImage from '../components/SelectedImage';
import Modal from "../components/Modal";
import { indexOf } from 'core-js/core/array';

const images = [];
for (let i = 1; i < 21; i++) {
    images.push({
        src: "images/" + i + ".JPG", 
        width: 1,
        height: 1
    });
}

const thumbWidth = "10%";
const thumbHeight = "20%";
const title = "Gallery";

const GalleryContainer = styled.div`
    position:relative;
    object-fit: none;
    width:100%;

`;

export default function Gallery(props) {

    const [selectedImage, setSelectedImage] = useState(null)
    const [showModal, setShowModal] = useState(false);

    function handleClick(index, width, height) {
        setSelectedImage({src:images[index].src, width, height});
        setShowModal(true);
    }

    function handleHideModal(){
        setShowModal(false);
    }

    const imageRenderer = useCallback(
        ({ index, left, top, key, photo}) => (
            <SelectedImage
                key={key}
                margin={"2px"}
                index={index}
                photo={photo}
                left={left}
                top={top}
                onClick={handleClick}
            />
        ),
        []
    );

    return (
        <>
            <Layout location={props.location} title={title}>
                <SEO
                    description="tiling in Utah"
                    lang="en"
                    title="Contact"
                    keywords={[`tiling in utah`, 'cabinets in utah', 'cabinets and tiling']}
                />
                <section className="text-center py-4">
                    <h1> pretty cool gallery huh??</h1>
                    <p>you can say stuff here like " our work is frikkin amazing. No Really , its
                    awesome. Everyone loves our shit. i mean, just look at it!"
            </p>
                </section>
                <GalleryContainer style={{ height: 500 }} >
                    <ImageGallery photos={images} renderImage={imageRenderer} />
                </GalleryContainer>

            </Layout>
            <Modal show={showModal} image={selectedImage} handleHideModal={handleHideModal} />
        </>
    );
};

