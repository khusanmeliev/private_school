import styled from 'styled-components';

export const Image = styled.img`
  width: 40%;
  height: 100%;
  border-radius: 8px 0 0 8px;
`;

export const Icon = styled.div`
  font-size: 20px;
  width: 40px;
  height: 40px;
  color: blue;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: translateY(-5px);
    transition: 1s;
    cursor: pointer;
  }
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
`;
