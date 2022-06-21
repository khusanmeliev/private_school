import styled, { css } from 'styled-components';
import { mobile } from '../../assets/styles/sizes';

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
  font-family: ${({ fontFamily }) => fontFamily || `'Charis SIL', serif`};
  color: ${({ color }) => color};
  text-indent: ${({ textIndent }) => textIndent};
  text-align: ${({ align }) => align || 'center'};

  ${mobile.lg} {
    font-size: 24px;
  }
`;

export default Heading;
