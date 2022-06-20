import styled from 'styled-components';
import { mobile } from '../../assets/styles/sizes';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
  padding: 20px;
  background-color: #203860;
  box-sizing: border-box;

  ${mobile.lg} {
    justify-content: space-between;
  }

  svg {
    font-size: 30px;
    color: white;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      margin-top: -15px;
    }
  }
`;
