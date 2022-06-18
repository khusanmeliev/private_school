import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { StyledButton } from "../../components/Button/Button";
import { FlexBox } from "../../components/FlexBox/FlexBox";
import {
  Dropdown,
  Dropdown_Content,
  Logo,
  NavMenu,
} from "./Navbar.style";

function Navbar() {
  return (
    <FlexBox
      height="90px"
      flexDirection="row"
      position="fixed"
      background="linear-gradient(
      90deg,
      rgb(6, 2, 80) 0%,
      rgb(21, 21, 137) 59%,
      rgb(2, 109, 130) 100%
    )"
    >
      <Logo>
        <img
          src="https://profimaktab.uz/wp-content/uploads/2021/08/cropped-profi-school.png"
          alt=""
        />
      </Logo>
      <NavMenu>
        <ul>
          <a href="#">
            <li>
              <StyledButton borderBottom="1px solid white">
                Biz haqimizda
              </StyledButton>{" "}
            </li>
          </a>
          <a href="#">
            <li>
              <StyledButton borderBottom="1px solid white">
                Bizning afzalliklarimiz
              </StyledButton>{" "}
            </li>
          </a>
          <Dropdown>
            <StyledButton borderBottom="1px solid white">
              Bizning filiallarimiz <MdOutlineExpandMore />
            </StyledButton>
            <Dropdown_Content>
              <a href="#">Mirabod filiali</a>
              <a href="#">Olmazor filiali</a>
            </Dropdown_Content>
          </Dropdown>
          <li>
            <StyledButton borderBottom="1px solid white">Русский</StyledButton>
          </li>
          <li>
            <StyledButton borderBottom="1px solid white">O'zbek</StyledButton>
          </li>
        </ul>
      </NavMenu>
    </FlexBox>
  );
}

export default Navbar;
