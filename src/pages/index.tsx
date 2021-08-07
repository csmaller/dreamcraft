import React, { useEffect } from "react"
import styled from "styled-components";
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactGA from 'react-ga';
import { graphql } from "gatsby";
import News from "../components/news";
import Slideshow from "../components/slideshow";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactGA.initialize(process.env.GOOGLE_ID);

const images = [
  "images/1.JPG",
  "images/2.JPG",
  "images/3.JPG",
  "images/4.JPG",
];

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  lazyLoad: false,
  autoplaySpeed: 5000,
  speed: 1000,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  height: 500,
  className: 'slick-slider-fade',
};

const MainContainer = styled.div`
  .overlay {
    width: 50%;
    padding: 75px 95px 75px 70px;
    opacity: .9;
    color: white;

    @media(max-width:765px){
      width:100%;
      padding: 10px;
    }
  }

  .slider-main-container {
    position: relative;
    top: 0;
  }
`;

function MainContent(props) {
  return (
    <div className={props.className}>
      <h3>Welcome</h3>
      <p>stuff here
      </p>
    </div>
  );
}

export default function IndexPage(props) {
  const news = props.data.news || "";

  useEffect(() => {
    if (typeof "window" !== "undefined") {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, [])

  const siteTitle = "Dreamcraft - Home Page"

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        description="tiling in Utah"
        lang="en"
        title="Contact"
        keywords={[`tiling in utah`, 'cabinets in utah', 'cabinets and tiling']}
      />
      {/* <MainContainer className="row position-relative w-100">
        <MainContent className="col-12 col-lg-6" />
      </MainContainer> */}
      <div className="row w-100">
        <div className="col-12 px-0 pb-3 slider-main-container">
          <Slideshow wrapperClass="images-slider" images={images} settings={settings} key="image-slider" />
        </div>
      </div>

    </Layout>
  );
}

export const pageQuery = graphql` query {
  
    news: mdx(frontmatter: {path: {eq: "news"}}) {
      frontmatter {
        date(formatString: "MMMM D,y")
        description
        path
        title
      }
      body
    }
}

 `;