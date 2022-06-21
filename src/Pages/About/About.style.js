import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';
import { mobile } from '../../assets/styles/sizes';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  ${mobile.lg} {
    flex-direction: column;
    width: 100%;
  }
`;

export const AboutUsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  ${mobile.lg} {
    width: 90%;
  }
`;

export const Navlist = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  svg {
    margin-right: 8px;
  }

  li {
    list-style-type: none;
    color: ${colors.grey};
  }
`;

// <------------------------------->

export const StatisticsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding-top: 30px;
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
