import styled from 'styled-components';

export const UpLine = styled.div`
  width: 90px;
  height: 4px;
  background-color: #003cc8;
  background-image: -webkit-linear-gradient(left, #003cc8, #00d0fc);
  margin-top: 10px;
`;

export const AdvantagesCards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 1238px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const AdvantagesCardsCards = styled.div`
  width: 28%;
  height: 450px;
  background-color: white;
  margin: 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border: 1px solid #f5f5f5;
  box-shadow: 0 1px 10px rgb(0 0 0 / 11%);
  &:hover {
    background-color: transparent;
    background-image: linear-gradient(90deg, #2575fc 0%, #6a11cb 100%);
    color: white;
  }
  span {
    font-size: 45px;
    color: blue;
  }
  h1 {
    margin: 15px;
  }
  p {
    width: 90%;
    @media (max-width: 1220px) {
      width: 60%;
    }
    @media (max-width: 720px) {
      width: 90%;
    }
  }
  @media (max-width: 1220px) {
    width: 70%;
    height: auto;
  }
`;

export const GoalsCard = styled.div`
  width: 40%;
  height: 180px;
  background-color: #fa9722;
  margin: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;
  margin-top: 90px;
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
  @media (max-width: 1180px) {
    margin: 20px;
  }
  @media (max-width: 999px) {
    width: 80%;
    height: auto;
    flex-direction: column;
  }
`;

export const LessonBoxes = styled.div`
  width: 100%;
  height: auto;
  background-color: inherit;
  font-family: sans-serif;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 1175px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LessonBox = styled.div`
  width: 40%;
  height: 350px;
  background-color: inherit;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 1px 10px rgb(0 0 0 / 11%);
  border-radius: 10px;
  @media (max-width: 1175px) {
    width: 80%;
    margin: 30px;
  }

  h2 {
    color: red;
    margin-left: 20px;
    color: black;
  }

  ul {
    margin-left: 50px;
  }
  ul li {
    margin: 5px;
    font-weight: 500;
  }
`;

export const AdvantagesLessonBoxesBoxTxtBox = styled.div`
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
`;