import styled from 'styled-components';
import { mobile } from '../../assets/styles/sizes';

export const Wrapper = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 70%;
  height: 375px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  box-shadow: 0 1px 10px rgb(0 0 0 / 11%);
  border-radius: 8px;
  margin: 10px;

  ${mobile.lg} {
    width: 90%;
    height: fit-content;
    flex-direction: column;
  }
`;

export const CardImage = styled.img`
  width: 300px;
  height: inherit;
  object-fit: cover;
  border-radius: 8px 0 0 8px;

  ${mobile.lg} {
    width: 100%;
    height: 400px;
    flex-direction: column;
    border-radius: 8px 8px 0 0;
  }
`;

export const CardDetails = styled.div`
  width: 60%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
`;

export const Icon = styled.a`
  font-size: 20px;
  width: 30px;
  height: 30px;
  color: grey;
  background-color: white;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: translateY(-5px);
    transition: 1s;
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    width: 60px;
    height: 60px;
    font-size: 25px;
  }
  ${mobile.md} {
    width: 50px;
    height: 50px;
  }
`;

export const Right = styled.div`
  width: 100%;
`;
