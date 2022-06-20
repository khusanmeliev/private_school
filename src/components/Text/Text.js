import styled, { css } from 'styled-components';
import { text } from '../../assets/styles/sizes';

const textSize = {
  sm: css`
    font-size: ${text.sm};
  `,
  md: css`
    font-size: ${text.md};
  `,
  lg: css`
    font-size: ${text.lg};
  `,
};

const Text = styled.p`
  ${({ size }) => textSize[size || 'md']};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align || 'start'};
  font-family: 'Roboto Slab', serif;
`;

export default Text;
