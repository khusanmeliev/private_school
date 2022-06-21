import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 20px;
  box-sizing: border-box;
`;

export const Card = styled.div`
  width: 300px;
  height: auto;

  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const CardDetails = styled.div`
  padding: 20px 30px;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;
