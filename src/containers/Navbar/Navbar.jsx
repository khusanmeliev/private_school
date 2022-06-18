import React from "react";
import Flexbox from "../Flexbox/Flexbox";
import { Image, List, Wrapper } from "./Navbar.style";

function Navbar() {
  return (
    <Wrapper>
      <Flexbox flexDirection="row" width="100%" height="100%" gap="40px">
        <Image
          src="https://profimaktab.uz/wp-content/uploads/2021/08/cropped-profi-school.png"
          alt=""
        />
        <ul>
          <Flexbox gap="60px" flexDirection="row">
            <a href="#">
              <List>Biz haqimizda</List>
            </a>
            <a href="#">
              <List>Bizning afzalliklarimiz</List>
            </a>
            <a href="#">
              <List>Bizning filiallarimiz</List>
            </a>
            <a href="#">
              <List>Русский</List>
            </a>
            <a href="#">
              <List>O'zbek</List>
            </a>
          </Flexbox>
        </ul>
      </Flexbox>
    </Wrapper>
  );
}

export default Navbar;
