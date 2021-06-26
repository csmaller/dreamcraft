import React from 'react'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from "styled-components";

const images = [];
for (let i = 1; i < 21; i++){
    images.push({src:"images/"+i+".JPG"});
}
   
const thumbWidth="10%";
const thumbHeight="20%";
const title="Gallery";

const GalleryContainer = styled.div`
    position:relative;
    object-fit: none;
    width:100%;

`;

export default function Gallery(props) {
    return (
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
        <GalleryContainer>
            <Carousel hasThumbnailsAtMax={false} images={images} thumbnailWidth={thumbWidth} thumbnailHeight={thumbHeight} style={{ height: 500 }} />
        </GalleryContainer>
        </Layout>
    );
};

