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
          <h6>Jackalope Adventures is all about adventure, learning and growth in a safe and fun way.<br/>
         </h6>
         <br/>
          <h5>Our passion:</h5>
          <ul>
            <li>Teaching first time mountain bikers</li>
            <li>Mountain bike clinics</li>
            <li>Mountain bike guiding in the Wasatch. Group rides or individual</li>
            <li>Backcountry off-piste ski and snowboard touring (gear required)</li>
            <li>In-bounds resort guiding</li>
            <li>Ski and snowboard private lessons</li>
          </ul>
        </div>
        <div className="pt-4">

          <h5>Owner: Corey Smaller</h5>
          <ul>
            <li>30 years experience as a coach and trainer</li>
            <li>15 years of ski-touring the Wasatch Range</li>
            <li>Skiing and snowboarding instructor</li>
            <li>Instructed at Park City Mountain Resort and Snowbird Resort</li>
            <li>Competed in several disciplines in cycling - cross country, road, crits, downhill and Super D</li>
          </ul>
          <br />
          <h5>Education:</h5>
          <ul>
            <li>Masters of Science - Information Technology</li>
            <li>Bachelors of Science - Exercise Physiology</li>
            <li>Associates of Arts - Communications</li>
            <li>AIARE Avalanche Level 1 Certified </li>
            <li>ACSM certified, CPR, First Aid</li>
          </ul>
        
        </div>
        </div >
        <div className="col-12 col-lg-6">
          <img src={Self} className="float-left" />
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
        keywords={[`jackalope adventures`, `jackalope`, `backcountry skiing`, `utah ski touring`]}
      />
      <MainContainer className="col-12 justify-content-center">
        <MainContent />
      </MainContainer>
    </Layout>
  );

}