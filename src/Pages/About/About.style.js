import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Navlist = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  svg {
    margin-right: 10px;
  }

  li {
    list-style-type: none;
    color: ${colors.grey};
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

export const CircleBox = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 45px;
  border-radius: 100%;
  box-shadow: rgba(37, 37, 218, 0.2) 0px 4px 29px 0px;
  color: ${colors.blue};
`;
