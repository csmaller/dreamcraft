import React from "react"
import Header from "./header";
import "../../style.scss";
import styled from "styled-components";
import classNames from "classnames";

export default function Layout(props) {

  const { location, title, children, background, layoutClass } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/blog/`

  return (
    <div className="w-100 py-3">
      <Wrapper >
        <LayoutContainer >
          <HeaderContainer className="row mb-0">
            <Header location={props.location} />
          </HeaderContainer>
          <MainContainer className={classNames(layoutClass, "row")}>
            <main className="px-2 px-lg-0 w-100">{children}</main>
          </MainContainer>
        </LayoutContainer>
        <Footer className="align-content-center">
          <p><a href="https://www.dreamcraft.xyz">www.dreamcraft.xyz &trade;</a></p>
          {/* <SocialIcon url="https://www.facebook.com/jackalopeAdventureTouring"/>
          <SocialIcon url="https://www.instagram.com/jackalopeadventures/" /> */}

        </Footer>
      </Wrapper>
    </div>
  )
}

const LayoutContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10rem; 

  .hidden {
    display:none;
  }
`;

const MainContainer = styled.div`
  position:relative;
`;

const HeaderContainer = styled.div`
  position:relative;
  margin-left: 2%;
  margin-right: 2%; 
  
  nav {
    height: 40px;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Footer = styled.footer`
  text-align: center;
  width: 100%;
  height: 2.5rem; 

  a {
    box-shadow: none;
    margin-left:10px;
    height:30px !important;
    width:30px !important;
  }
`