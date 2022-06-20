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
  input {
    display: none;
  }
  label {
    display: none;
    font-size: 40px;
    color: white;
  }
  ${mobile.lg} {
    input:checked ~ .menu {
      display: none;
    }
    label {
      display: block;
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

export const List = styled.li`
  padding: 5px 14px;
  display: inline;
  cursor: pointer;
  color: white;
  &:hover {
    transition: 0.3s ease;
    color: rgb(200, 200, 200);
    ${mobile.lg} {
      display: block;
      transition: 0.3s ease;
    }
  }
`;

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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: '30px';
  li + li {
    ${mobile.lg} {
      margin-top: 12px;
    }
  }

  ${mobile.lg} {
    width: 200px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    position: absolute;
    border-radius: 8px 0 0 8px;
    background-color: rgb(21, 21, 137);
    right: 0;
    text-align: center;
    gap: 30px;
    padding: 16px 0;
  }
`;
