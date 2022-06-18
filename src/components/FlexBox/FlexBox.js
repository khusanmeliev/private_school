import styled from "styled-components";

export const FlexBox = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  /* background-color: ${({ bgColor }) => (bgColor ? bgColor : "red")}; */
  border-radius: ${({ borderRadius }) => borderRadius};
  position: ${({ position }) => position};
  background: ${({ background }) => background};
  gap: ${({ gap }) => gap};
  font-size: ${({ fontSize }) => fontSize};
  border: ${({ border }) => border};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  margin-top: ${({ marginTop }) => marginTop};
`;
