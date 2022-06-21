import styled from 'styled-components';
import { mobile } from '../../assets/styles/sizes';

export const GoalsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const GoalsCard = styled.div`
  width: 500px;
  height: 200px;
  background-color: #fa9722;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;

  &:nth-child(2) {
    background-color: #203860;
  }

  &:hover {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(2, 18, 62, 1) 0%,
      rgba(2, 42, 95, 1) 0%,
      rgba(2, 39, 91, 1) 0%,
      rgba(2, 37, 88, 1) 0%,
      rgba(4, 35, 120, 1) 0%,
      rgba(3, 116, 198, 1) 44%,
      rgba(3, 116, 198, 1) 50%,
      rgba(3, 116, 198, 1) 94%
    );
  }

  ${mobile.lg} {
    width: 400px;
  }
`;
