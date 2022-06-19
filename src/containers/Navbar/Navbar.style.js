import styled from 'styled-components';
import { mobile, text } from '../../assets/styles/sizes';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  background: linear-gradient(90deg, rgb(6, 2, 80) 0%, rgb(21, 21, 137) 59%, rgb(2, 109, 130) 100%);
  transition: 0.5s;
  padding: 0 60px;
  box-sizing: border-box;

  a {
    text-decoration: none;
  }

  ${mobile.lg} {
    ul {
      display: none;
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
  width: fit-content;
  font-size: ${text.md};
  font-family: serif;
  color: white;
  list-style-type: none;
  cursor: pointer;

  &:hover {
    color: rgb(220, 220, 220);
    transition: 0.2s;
    margin-top: -5px;
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
