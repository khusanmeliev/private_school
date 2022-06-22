import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';
import { mobile } from '../../assets/styles/sizes';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background: ${colors.navbar};
  transition: 0.5s;
  padding: 0 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  width: fit-content;
  font-size: 28px;
  font-family: 'Marcellus SC', serif;
  color: orange;
  display: flex;
  flex-direction: column;
  span {
    color: white;
    font-size: 14px;
  }
  ${mobile.lg} {
    font-size: 24px;
    text-align: center;
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
  ${mobile.lg} {
    font-family: 'Roboto Slab', serif;
    font-size: 18px;
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

  ${mobile.lg} {
    display: ${({ navbarOpen }) => (navbarOpen ? `flex` : 'none')};
    flex-direction: column;
    background-color: ${colors.navbar};
    text-align: center;
    width: 100%;
    height: 94vh;
    position: absolute;
    right: 0;
    left: 0;
  }
`;

export const NavbarButton = styled.span`
  color: white;
  font-size: 30px;
  display: none;
  ${mobile.lg} {
    display: block;
  }
`;
