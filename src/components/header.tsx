
import React from "react";
import { Link } from "gatsby";
import { Button } from "react-bootstrap";
import Logo from "../../content/assets/logo.png";
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';
import classNames from "classnames";
import { Container } from "react-bootstrap";

const HeaderContainer = styled.div`

    width:100%;
    padding-left:20px;

    .link{
        text-decoration: none;
        color:black;
        font-size:15px;
        box-shadow: none;
        padding:10px;
    }

    .link:hover{
        color:white;
        background-color:black;
    }
`;

function Header({ location }) {
    return (
        <HeaderContainer>
            <div className="col-lg-1 col-4">
                <Link to={`/`} >
                    <img src={Logo} className="float-left" />
                </Link>
            </div>
            <nav className="col-lg-11 col-8 mb-4 mt-0 justify-content-left align-items-center mt-4 p-0">
                <Link to="/" disabled={location.pathname === "/"} className="link">
                    Home
                </Link>
                <Link to="/about/" disabled={location.pathname === "/about/"} className="link">
                    About Us
                </Link>
                <Link to="/gallery/" disabled={location.pathname === "/gallery/"} className="link">
                    Gallery
                </Link>
                <Link to="/contact/" disabled={location.pathname === "/contact/"} className="link">
                    Contact Us
                </Link>
            </nav>
        </HeaderContainer>
    );
}

export default Header;