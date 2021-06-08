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
      <p>Whether it's learning skills on the mountain bike, 
          training hard for that big race, 
          learning how to rock climb,
          finding the deep untracked lines,
          or exploring one of the many great ski resorts in the Wasatch 
          Jackalope Adventures will be your guide.
      </p>
    </div>
  );
}

export default function IndexPage(props) {
  const news = props.data.news;

  useEffect(() => {
    if (typeof "window" !== "undefined") {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, [])

  const siteTitle = "Jackalope Adventures - Home Page"

  return (
      <Layout location={props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`mountain bike lessons`, `enduro mountain bike lessons`, `bike lessons utah`,`jackalope adventures`, `jackalope`, `backcountry skiing`, `utah ski touring`]}
        />
        <Hero />
        <MainContainer className="row position-relative">
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