import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Image = styled.img`
  width: 40%;
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
