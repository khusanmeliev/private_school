import styled, { css } from 'styled-components';

const headingSize = {
  sm: css`
    font-size: 25px;
  `,
  md: css`
    font-size: 30px;
  `,
  lg: css`
    font-size: 40px;
  `,
};

const Heading = styled.h1`
  ${({ size }) => headingSize[size || 'sm']};
  font-family: ${({ fontFamily }) => fontFamily || 'sans-serif'};
  color: ${({ color }) => color || 'black'};
  text-indent: ${({ textIndent }) => textIndent};
  text-align: ${({ textAlign }) => textAlign};

  @media (max-width: 980px) {
    width: auto;
    text-align: center;
  }
`;

export default Heading;
