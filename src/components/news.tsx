import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import styled from "styled-components";
import HeaderText from "./headerText";

const NewsContainer = styled.div`
   
`;

const News = (props) => {
    return (
        <NewsContainer className={props.className}>
            {props.news &&
                <>
                    <h3>News</h3>
                    <div>
                        <MDXRenderer>{props.news.body}</MDXRenderer>
                    </div>
                </>
            }
        </NewsContainer>
    )
}

export default News;