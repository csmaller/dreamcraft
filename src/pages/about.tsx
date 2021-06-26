import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ReactGA from 'react-ga';
import { graphql } from "gatsby";
import Self from "../../content/assets/touring_main.jpeg";

ReactGA.initialize('UA-177166710-1');


const MainContainer = styled.div`

.smaller-font {
  font-size:12px;
}
ul li{
  padding : 0;
  margin: 0;
}

`;

function MainContent() {
  return (
    <div className="row">
      <div className="col-12 col-lg-6 text-justify">
        <div>
          <h6>DreamCraft about here.<br />
          </h6>
          <br />
          <h5>Our passion:</h5>
        </div>
      </div>

    </div>

  );

}

export default function About(props) {

  useEffect(() => {
    if (typeof "window" !== "undefined") {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, [])

  const siteTitle = "About Jackalope Adventures"

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="About"
        keywords={[`dreamcraft cabinetry`]}
      />
      <MainContainer className="col-12 justify-content-center">
        <MainContent />
      </MainContainer>
    </Layout>
  );

}