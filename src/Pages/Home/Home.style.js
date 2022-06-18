import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(50, 0, 214);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* h1 {
    font-size: 42px;
    font-family: sans-serif;
    color: rgb(241, 241, 241);
  } */
  p {
    width: 600px;
    text-align: center;
    font-size: 21px;
    font-family: serif;
    color: rgb(225, 225, 225);
    letter-spacing: 1px;
  }
  a{
    text-decoration: none;
  }
`;
