import styled, { css } from 'styled-components';

const textSize = {
  sm: css`
    font-size: 12px;
  `,
  md: css`
    font-size: 14px;
  `,
  lg: css`
    font-size: 16px;
  `,
};

const Text = styled.p`
  ${({ size }) => textSize[size || 'md']};
  color: ${({ color }) => color || 'black'};
  text-align: ${({ textAlign }) => textAlign};

  @media (max-width: 600px) {
    width: auto;
    height: auto;
  }
`;

export default Text;
