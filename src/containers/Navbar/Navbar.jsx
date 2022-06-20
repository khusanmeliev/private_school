import React, { useRef } from 'react';
import { List, Logo, Menu, Wrapper } from './Navbar.style';
import { AiOutlineMenu } from 'react-icons/ai';
import Flexbox from '../../components/Flexbox/Flexbox';
import './styles.css';
const Navbar = () => {
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
      <Flexbox flexDirection="row" width="100%" height="100%" justifyContent="space-between">
        <Logo>Elite School</Logo>
        <Flexbox flexDirection="row">
          <ul className="ul">
            <input type="checkbox" id="checkbox_toggle" />
            <label htmlFor="checkbox_toggle" className="hamburger">
              <AiOutlineMenu />
            </label>
            <Menu className="menu">
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
      </Flexbox>
    </Wrapper>
  );
};

export default Navbar;
