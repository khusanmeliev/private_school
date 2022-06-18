import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${({ width }) => (width ? width : "160px")};
  height: ${({ height }) => (height ? height : "30px")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "inherit")};
  border-radius: ${({borderRadius})=> (borderRadius ? borderRadius : '8px')};
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border-bottom: ${({ borderBottom }) => borderBottom};
  }
`;
