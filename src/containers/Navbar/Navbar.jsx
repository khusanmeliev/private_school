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

  const handleCloseNavbar = () => {
    setNavbarOpen(false);
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
            <a href="#home" onClick={handleCloseNavbar}>
              <List>Bosh sahifa</List>
            </a>
            <a href="#about" onClick={handleCloseNavbar}>
              <List>Biz haqimizda</List>
            </a>
            <a href="#advantages" onClick={handleCloseNavbar}>
              <List>Bizning afzalliklarimiz</List>
            </a>
            <a href="#lessons" onClick={handleCloseNavbar}>
              <List>Darslar</List>
            </a>
            <a href="#directors" onClick={handleCloseNavbar}>
              <List>Direktorlar</List>
            </a>
            <a href="#contact" onClick={handleCloseNavbar}>
              <List>Bog`lanish</List>
            </a>
          </Menu>
        </ul>
      </Flexbox>
    </Wrapper>
  );
};

export default Navbar;
