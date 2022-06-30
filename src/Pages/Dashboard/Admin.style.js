import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Table = styled.table`
  width: 90%;
  height: auto;
  padding: 10px;
  border-radius: 8px;
  border-collapse: collapse;
  box-sizing: border-box;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  th {
    padding: 0 10px;
    height: 80px;
    color: white;
    font-weight: 700;
    font-size: 16px;
    border: 1px solid grey;
    background-color: ${colors.blue};
  }

  td {
    padding: 2px 10px;
    border: 1px solid grey;
    font-size: 14px;
    font-weight: 600;
  }

  tr {
    color: ${colors.grey};
    &:nth-child(even) {
      background-color: aliceblue;
    }
  }
`;
