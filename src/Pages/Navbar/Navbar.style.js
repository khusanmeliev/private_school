import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 90px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgb(6, 2, 80) 0%,
    rgb(21, 21, 137) 59%,
    rgb(2, 109, 130) 100%
  );
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 1;
`;
export const Logo = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 190px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const NavMenu = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 5px;
    overflow: hidden;
  }
  li {
    width: auto;
    height: 30px;
    font-size: 17px;
    font-family: serif;
    color: white;
    list-style-type: none;
    cursor: pointer;
    float: right;
    &:hover {
      transition: 0.2s;
      margin-top: -5px;
    }
  }
  button {
    width: 160px;
    height: 30px;
    border: none;
    border-radius: 10px;
    outline: none;
    background-color: inherit;
    color: white;
    font-size: 15px;
    &:hover {
      border-bottom: 1px solid white;
    }
  }
`;
export const Dropdown = styled.li`
  display: inline-block;
  &:hover {
    display: block;
  }
`;
export const Dropdown_Content = styled.div`
  display: none;
  position: absolute;
  background-color: #6a687a;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  &:hover {
    display: block;
  }
  a {
    color: white;
    padding: 10px 8px;
    text-decoration: none;
    display: block;
    text-align: left;
    &:hover {
      background-color: #ffa500;
      transition: 0.5s;
    }
  }
`;
