import React from "react";
import styled from "styled-components";
const StyledTextMedium = styled.p`
  font: inherit;
  font-size: 1rem;
  line-height: 1.25rem;
  margin-bottom: 1rem;
  color: #3F3D56;
`;
export const TextMedium = ({ textMedium }) => (
    <StyledTextMedium>{textMedium}</StyledTextMedium>
);