import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 570px;
  display: flex;
  flex-direction: row;
`;
export const PreferencesText = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TextBox = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  li {
    width: 500px;
    text-indent: 20px;
    list-style-type: none;
    font-family: serif;
    color: rgb(68, 68, 68);
  }
`;

// <------------------------------->

export const Statistics = styled.div`
  width: 50%;
  height: 100%;
`;
export const StatisticsContainer = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
`;
export const StatisticsBox = styled.div`
  width: 230px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
`;
export const NumberBox = styled.div`
  width: 60%;
  height: 60%;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  background: -webkit-linear-gradient(rgb(3, 0, 198), rgb(144, 162, 241));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  box-shadow: rgba(37, 37, 218, 0.2) 0px 4px 29px 0px;
`;
