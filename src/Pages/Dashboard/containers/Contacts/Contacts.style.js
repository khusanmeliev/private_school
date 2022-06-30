import styled from 'styled-components';
import { colors } from '../../../../assets/styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 40px;
`;

export const Table = styled.table`
  width: 100%;
  height: auto;
  border-radius: 8px;
  border-collapse: collapse;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  th {
    padding: 0 10px;
    height: 80px;
    color: white;
    font-weight: 700;
    font-size: 16px;
    border: 1px solid grey;
    background-color: ${colors.grey};
  }

  td {
    padding: 2px 10px;
    border: 1px solid grey;
    font-size: 14px;
    font-weight: 600;
  }

  tr {
    color: ${colors.grey};
    background-color: white;
    &:nth-child(even) {
      background-color: #f3f3f3;
    }
  }
`;
