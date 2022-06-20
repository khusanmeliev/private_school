import styled from 'styled-components';
import { mobile } from '../../assets/styles/sizes';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background: linear-gradient(90deg, rgb(6, 2, 80) 0%, rgb(21, 21, 137) 59%, rgb(2, 109, 130) 100%);
  transition: 0.5s;
  padding: 0 60px;
  box-sizing: border-box;
  display: flex;

  a {
    text-decoration: none;
  }

  ${mobile.lg} {
    ul {
    }
  }
  
`;

export const Logo = styled.h1`
  font-size: 36px;
  font-family: 'Marcellus SC', serif;
  color: orange;

  ${mobile.lg} {
    font-size: 30px;
  }
`;

export const List = styled.li``;

export const MenuButton = styled.div`
  display: none;

  ${mobile.lg} {
    display: block;
    color: white;
    font-size: 40px;
    cursor: pointer;
  }
`;
export const Menu = styled.div`
  flex-direction: row;
  justify-content: space-around;
  gap: '30px';
  ${mobile.lg} {
    display: none;
    position: absolute;
    background-color: #1f1e28;
    right: 0;
    left: 0;
    text-align: center;
    padding: 16px 0;
  }
`;
