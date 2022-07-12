import React from "react";
import styled from "styled-components";
export const Column = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: stretch;
  flex-basis: 1;
  margin: 2vw;
  padding: 2vw;
  border-radius: 2rem;
`
const StyledColumn100 = styled(Column)`
  width: calc(100% - 4rem);
  flex-basis: 1;
  margin-bottom: 1.25rem;
`;

export const Column100 = ({ children, ...props }) => (
    <StyledColumn100
        isFloating={props.isFloating}
        isCentered={props.isCentered}
    >
        {children}
    </StyledColumn100>
);