import React, { useRef, useState } from 'react';
import { List, Logo, Menu, NavbarButton, Wrapper } from './Navbar.style';
import { AiOutlineMenu } from 'react-icons/ai';
import Flexbox from '../../components/Flexbox/Flexbox';

const Navbar = () => {
  const navbar = useRef(null);
  let prevScrollpos = window.pageYOffset;
  const [navbarOpen, setNavbarOpen] = useState(false);

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
      <Logo>
        Elite <span> Academic School </span>
      </Logo>
      <Flexbox flexDirection="row">
        <ul>
          <NavbarButton onClick={() => setNavbarOpen(!navbarOpen)}>
            <AiOutlineMenu />
          </NavbarButton>
          <Menu navbarOpen={navbarOpen}>
            <a href="#home">
              <List>Bosh sahifa</List>
            </a>
            <a href="#about">
              <List>Biz haqimizda</List>
            </a>
            <a href="#advantages">
              <List>Bizning afzalliklarimiz</List>
            </a>
            <a href="#lessons">
              <List>Darslar</List>
            </a>
            <a href="#directors">
              <List>Direktorlar</List>
            </a>
            <a href="#contact">
              <List>Bog`lanish</List>
            </a>
          </Menu>
        </ul>
      </Flexbox>
    </Wrapper>
  );
};

export default Navbar;
