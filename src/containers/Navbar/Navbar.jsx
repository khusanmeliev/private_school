import React, { useRef } from "react";
import Flexbox from "../../components/Flexbox/Flexbox";
import { Image, List, Wrapper } from "./Navbar.style";

function Navbar() {
  const navbar = useRef(null);
   let prevScrollpos = window.pageYOffset;
   window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
         navbar.current.style.top = '0';
      } else {
         navbar.current.style.top = '-100px';
      }
      prevScrollpos = currentScrollPos;
   };
  return (
    <Wrapper ref={navbar}>
      <Flexbox flexDirection="row" width="100%" height="100%" gap="40px">
        <Image
          src="https://profimaktab.uz/wp-content/uploads/2021/08/cropped-profi-school.png"
          alt=""
        />
        <ul>
          <Flexbox gap="60px" flexDirection="row" >
            <a href="">
              <List>Bosh sahifa</List>
            </a>
            <a href="#">
              <List>Biz haqimizda</List>
            </a>
            <a href="#">
              <List>Bizning afzalliklarimiz</List>
            </a>
            <a href="directors">
              <List>Direktorlar</List>
            </a>
            <a href="#">
              <List>Darslar</List>
            </a>
            <a href="#">
              <List>Bog'lanish</List>
            </a>
          </Flexbox>
        </ul>
      </Flexbox>
    </Wrapper>
  );
}

export default Navbar;
