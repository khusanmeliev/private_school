import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 88vh;
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
  ul {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  li {
    width: 500px;
    text-indent: 60px;
    list-style-type: none;
    font-family: serif;
    color: rgb(68, 68, 68);
  }
`;

export const TextBox = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  h2 {
    font-size: 38px;
    text-indent: 80px;
    letter-spacing: 1.5px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
  h3 {
    font-size: 20px;
    font-family: serif;
    color: rgb(85, 85, 85);
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
  gap: 25px;
`;
export const StatisticsBox = styled.div`
  width: 230px;
  height: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
  h2 {
    font-family: serif;
  }
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
