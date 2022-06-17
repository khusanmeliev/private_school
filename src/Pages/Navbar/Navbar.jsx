import React, { useRef } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { Container, Dropdown, Dropdown_Content, Logo, NavMenu } from "./Navbar.style";

function Navbar() {
  const navbar = useRef(null);
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-50px";
    }
  }
  return (
    <Container ref={navbar}>
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
              <button>Biz haqimizda</button>{" "}
            </li>
          </a>
          <a href="#">
            <li>
              <button>Bizning afzalliklarimiz</button>{" "}
            </li>
          </a>
            <Dropdown>
              <button>
                Bizning filiallarimiz <MdOutlineExpandMore />
              </button>
              <Dropdown_Content>
                <a href="#">Mirabod filiali</a>
                <a href="#">Olmazor filiali</a>
              </Dropdown_Content>
            </Dropdown>
          <li>
            <button>Русский</button>
          </li>
          <li>
            <button>O'zbek</button>
          </li>
        </ul>
      </NavMenu>
    </Container>
  );
}

export default Navbar;
