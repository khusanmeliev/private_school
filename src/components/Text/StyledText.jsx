import styled from "styled-components";

export const StyledHeading = styled.h1`
  font-size: ${({ fontSize }) => fontSize ? fontSize : '20px'};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "sans-serif")};
  color: ${({ color }) => (color ? color : "black")};
  text-indent: ${({textIndent})=> textIndent};
`;
