import React from 'react'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
// Components
// import Layout from '../components/Layout'
// import Seo from '../components/seo'
// import Item from '../components/GalleryCard'


const images = [];
for (let i = 1; i < 21; i++){
    images.push({src:"images/"+i+".JPG"});
}
   
const thumbWidth="10%";
const thumbHeight="20%";
export default function Gallery() {
    return (
        <>
        <section className="text-center py-4">
            <h1> pretty cool gallery huh??</h1>
            <p>you can say stuff here like " our work is frikkin amazing. No Really , its
                awesome. Everyone loves our shit. i mean, just look at it!"
            </p>
        </section>
        <div className='carousel-container'>
            <Carousel hasThumbnailsAtMax={false} images={images} thumbnailWidth={thumbWidth} thumbnailHeight={thumbHeight} style={{ height: 500 }} />
        </div>
        </>
    );
};

