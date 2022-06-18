import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px 20px;
  margin: 0;
  width: 100%;
  height: 570px;
`;

export const Navlist = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  li {
    width: 500px;
    text-indent: 20px;
    list-style-type: none;
    font-family: serif;
    color: rgb(68, 68, 68);
    margin: 10px;
  }
`;

// <------------------------------->

export const StatisticsContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
