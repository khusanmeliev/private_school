import styled from 'styled-components';

export const GlobalStyle = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 10px;

  hr {
    width: 80%;
    border: 0;
    height: 2px;
    background-image: linear-gradient(to right, #f0f0f0, #3b13b0, #3b13b0,#f0f0f0);
  }
`;
