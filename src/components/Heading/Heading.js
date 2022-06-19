import styled, { css } from 'styled-components';
import { colors } from '../../assets/styles/colors';

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
  color: ${({ color }) => color || `${colors.black}`};
  text-indent: ${({ textIndent }) => textIndent};
  text-align: ${({ align }) => align || 'center'};
`;

export default Heading;
