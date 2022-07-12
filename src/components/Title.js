import React from "react";
import styled from "styled-components";
const StyledH3 = styled.h3`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  color: #3F3D56;
  display: block;
`;
export const Heading = ({ ...props }) => {
    return (
        <StyledH3 isCentered={props.isCentered}>
            {props.heading}
        </StyledH3>
    );
};