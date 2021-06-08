import React from "react"
import { Link } from "gatsby";
import { Button } from "react-bootstrap";
import "../../style.scss";
import Logo from "../../content/assets/logo_no_bg.png";
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';
import classNames from "classnames";
import { Container } from "react-bootstrap";

export default function Layout(props) {

  const { location, title, children, background, layoutClass } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/blog/`

  function Header() {
    return (
      <>
        <div className="col-lg-1 col-4">
          <Link to={`/`} >
            <img src={Logo} className="float-left" />
          </Link>
        </div>
        <nav className="col-lg-11 col-8 mb-4 mt-0 justify-content-left bg-primary mt-4 p-0">
          <Link to="/" disabled={location.pathname === "/"}>
            <Button marginTop="35px">Home</Button>
          </Link>
          <Link to="/about/" disabled={location.pathname === "/about/"}>
            <Button marginTop="35px">About</Button>
          </Link>
          <Link to="/contact/" disabled={location.pathname === "/contact/"}>
            <Button marginTop="35px">Contact</Button>
          </Link>
        </nav>
      </>
    );
  }

  return (
    <Container>
      <Wrapper >
        <LayoutContainer >
          <HeaderContainer className="row mb-0">
            <Header />
          </HeaderContainer>
          <MainContainer className={classNames(layoutClass, "row")}>
            <main className="px-2 px-lg-0">{children}</main>
          </MainContainer>
        </LayoutContainer>
        <Footer className="align-content-center">
          <p><a href="https://www.jackalopeadventures.com">jackalopeadventures.com &trade;</a></p>
          <SocialIcon url="https://www.facebook.com/jackalopeAdventureTouring"/>
          <SocialIcon url="https://www.instagram.com/jackalopeadventures/" />
          <Link to="/blog/" disabled={location.pathname === "/blog/"}>
            Personal Blog
          </Link>
        </Footer>
      </Wrapper>
    </Container>
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
  margin-left: -12%;
  margin-right: -12%;
  
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