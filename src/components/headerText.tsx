import React from "react";
import styled from "styled-components";

const HeaderTextContainer = styled.div`

    h3 {
        text-decoration: underline;
    }

`;

const HeaderText = (props) => {
    return (
        <HeaderTextContainer>
            {props&& React.createElement(
                props.type,
                [props],
                [props.children]
            )}
        </HeaderTextContainer>
    )
}

export default HeaderText;