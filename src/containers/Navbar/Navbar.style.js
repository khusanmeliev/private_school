import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  background: linear-gradient(
    90deg,
    rgb(6, 2, 80) 0%,
    rgb(21, 21, 137) 59%,
    rgb(2, 109, 130) 100%
  );
  position: fixed;
  padding: 0 40px;
  transition: 0.5s;
  @media(min-width: 1500px) {
    width: auto;
  }
  a{
    text-decoration: none;
  }
`;

export const Image = styled.img`
  width: 190px;
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const List = styled.li`
  width: auto;
  height: 30px;
  font-size: 17px;
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


