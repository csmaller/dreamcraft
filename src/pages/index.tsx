import React, { useEffect } from "react"
import styled from "styled-components";
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactGA from 'react-ga';
import { graphql } from "gatsby";
import News from "../components/news";
import Hero from "../components/hero";
import HeaderText from "../components/headerText";

ReactGA.initialize(process.env.GOOGLE_ID);

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
`;

function MainContent(props) {
  return (
    <div className={props.className}>
      <HeaderText type="h3">Welcome</HeaderText>
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
          meta="we work tiling in utah"
          keywords={[`tiling in utah`, 'cabinets in utah', 'cabinets and tiling']}
        />
        <MainContainer className="row position-relative w-100">
          <MainContent className="col-12 col-lg-6"/>
          <News className="col-12 col-lg-6" news={news} />
        </MainContainer>
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