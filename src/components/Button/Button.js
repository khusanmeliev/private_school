import styled from 'styled-components';

const Button = styled.button`
  width: ${({ width }) => width || '160px'};
  height: ${({ height }) => height || '30px'};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${({ borderRadius }) => borderRadius || '8px'};
  font-size: 18px;
  font-family: 'Roboto Slab', serif;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
`;

export default Button;
