import styled from 'styled-components';
import { mobile } from '../../assets/styles/sizes';

export const Wrapper = styled.div`
  padding: 20px 0;
`;

export const UpLine = styled.div`
  width: 200px;
  border: 0; 
  height: 2px; 
  background-image: linear-gradient(to right, #f0f0f0, #3b13b0, #3b13b0,#f0f0f0);
  margin-top: 10px;
  display: block;
  margin: 0 auto;
`;

export const AdvantagesCards = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;

  ${mobile.lg} {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Card = styled.div`
  width: 300px;
  height: 400px;
  padding: 20px 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #f5f5f5;
  box-shadow: 0 1px 10px rgb(0 0 0 / 11%);
  color: black;

  &:hover {
    background-color: transparent;
    background-image: linear-gradient(90deg, #2575fc 0%, #6a11cb 100%);
    color: white;
  }

  span {
    font-size: 45px;
  }

  ${mobile.lg} {
    height: auto;
  }
`;

export const LessonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LessonBoxes = styled.div`
  width: 100%;
  height: auto;
  background-color: inherit;
  font-family: sans-serif;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  ${mobile.lg} {
    flex-direction: column;
    gap: 20px;
  }
`;

export const LessonBox = styled.div`
  width: 40%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 1px 10px rgb(0 0 0 / 11%);
  border-radius: 10px;

  ${mobile.lg} {
    width: 90%;
  }
`;

export const PriceLabel = styled.div`
  width: 100%;
  height: 50px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(44, 44, 247, 1) 0%,
    rgba(255, 51, 0, 0.989233193277311) 0%,
    rgba(7, 20, 198, 0.9472163865546218) 0%,
    rgba(7, 178, 198, 0.9472163865546218) 68%,
    rgba(115, 124, 236, 0.9472163865546218) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  color: white;
  font-family: 'Marcellus SC', serif;
`;
